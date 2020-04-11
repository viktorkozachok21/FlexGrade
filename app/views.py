from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *
import random
import string


def app(request):
    """
    Rendering the root template of the application
    """
    return render(request, 'index.html')

def home(request):
    """
    Rediarect all the not found pages to base /
    """
    return HttpResponseRedirect('/')


class RegistrationView(APIView):
    """
    View to get a random username and password and then register a new user (student or teacher) with given data
    """
    # Get random username and password
    def get(self, request):
        """
        Generate a random username and password of letters and digits
        """
        alphabet = string.ascii_letters + string.digits
        return Response({"success":True, "username":''.join(random.choice(alphabet) for i in range(15)), "password":''.join(random.choice(alphabet) for i in range(10))}, status=200)
    # Register a new user
    def post(self, request, code):
        """
        Create a new user with given request.data
        """
        # if email in request then register a teacher
        school = get_object_or_404(School, pk=code)
        info = request.data
        username = info.get('username').strip()
        first_name = info.get('first_name').strip().capitalize()
        last_name = info.get('last_name').strip().capitalize()
        sur_name = info.get('sur_name').strip().capitalize()
        if 'email' in info:
            email = info.get('email').strip()
            if FlexUser.objects.filter(username__iexact=username).exists():
                return Response({"success":False, "message":"Надане ім'я користувача вже використовується."}, status=200)
            elif Teacher.objects.filter(user__school=school, user__last_name__iexact=last_name, user__first_name__iexact=first_name, user__sur_name__iexact=sur_name).exists():
                return Response({"success":False, "message":"Викладач з наданим П.І.Б. вже зареєстровий."}, status=200)
            user = FlexUser.objects.create(school=school, username=username, email=email, first_name=first_name, last_name=last_name, sur_name=sur_name, status='Teacher')
            user.set_password(str(info.get('password')))
            user.save(update_fields=['password'])
            if 'avatar' in request.FILES:
                user.avatar = request.FILES['avatar']
                user.save(update_fields=['avatar'])
            teacher = Teacher.objects.create(user=user)
            return Response({"success":True, "message":"Нового користувача успішно зареєстровано."}, status=200)
        # if book_number in request then register a student
        elif 'book_number' in info:
            book_number = info.get('book_number').strip()
            if FlexUser.objects.filter(username__iexact=username).exists():
                return Response({"success":False, "message":"Надане ім'я користувача вже використовується."}, status=200)
            elif Student.objects.filter(user__school=school, book_number__iexact=book_number, user__is_active=True).exists():
                return Response({"success":False, "message":"Студент з наданим номером залікової книжки вже зареєстрований."}, status=200)
            user = FlexUser.objects.create(school=school, username=username, first_name=first_name, last_name=last_name, sur_name=sur_name, status='Student')
            user.set_password(str(info.get('password')))
            user.save(update_fields=['password'])
            if 'avatar' in request.FILES:
                user.avatar = request.FILES['avatar']
                user.save(update_fields=['avatar'])
            group_number = info.get('group_number').strip()
            number, short_name = group_number.split('-')
            specialty = get_object_or_404(Specialty, short_name=short_name)
            group = get_object_or_404(Group, number=number, specialty=specialty)
            if Student.objects.filter(user__school=school, group=group, user__last_name__iexact=last_name, user__first_name__iexact=first_name, user__sur_name__iexact=sur_name).exists():
                user.delete()
                return Response({"success":False, "message":"Студент з наданим П.І.Б. вже зареєстровий в обраній групі."}, status=200)
            new_student = Student.objects.create(user=user, group=group, book_number=book_number)
            students = [student for student in list(Student.objects.filter(user__school=school, group=group))]
            for student in students:
                if Semester.objects.filter(students=student).exists():
                    semesters = list(Semester.objects.filter(students=student, is_active=True))
                    for semester in semesters:
                        if new_student not in semester.students.all():
                            semester.students.add(new_student)
                            semester.save()
            return Response({"success":True, "message":"Нового користувача успішно зареєстровано."}, status=200)
        else:
            return Response({"success":False, "message":"Під час виконання операції виникла помилка, спробуйте пізніше."}, status=200)


class EditProfileView(APIView):
    """
    Features to edit profile of a user
    """
    # Change base information about user
    def post(self, request):
        """
        Change information of user
        """
        info = request.data
        user = get_object_or_404(FlexUser, code=info.get('code'))
        user.first_name = info.get('first_name').strip().capitalize()
        user.last_name = info.get('last_name').strip().capitalize()
        user.sur_name = info.get('sur_name').strip().capitalize()
        user.save(update_fields=['first_name','last_name','sur_name'])
        if 'email' in info:
            user.email = info.get('email').strip()
            user.save(update_fields=['email'])
            if 'avatar' in request.FILES:
                user.avatar = request.FILES['avatar']
                user.save(update_fields=['avatar'])
            return Response({"success":True, "message":"Інформацію успішно змінено."}, status=200)
        elif 'book_number' in info:
            book_number = info.get('book_number').strip()
            if Student.objects.filter(book_number__iexact=book_number, user__is_active=True).exclude(user=user).exists():
                return Response({"success":False, "message":"Студент з наданим номером залікової книжки вже зареєстрований."}, status=200)
            if 'avatar' in request.FILES:
                user.avatar = request.FILES['avatar']
                user.save(update_fields=['avatar'])
            student = get_object_or_404(Student, user=user)
            if student.book_number != book_number:
                student.book_number = book_number
                student.save(update_fields=['book_number'])
            return Response({"success":True, "message":"Інформацію успішно змінено."}, status=200)
        else:
            return Response({"success":False, "message":"Під час виконання операції виникла помилка, спробуйте пізніше."}, status=200)
    # Change user/users status
    def put(self, request):
        """
        Change user status to not active
        """
        info = request.data
        if 'students' in info:
            students_list = info.get('students')
            for student in students_list:
                user = get_object_or_404(FlexUser, code=student)
                user.change_active()
                student = get_object_or_404(Student, user__code=student)
                student.end()
            if len(students_list) > 1:
                return Response({"success":True, "message":"Студентів успішно виключено зі списку активних."}, status=200)
            elif len(students_list) == 1:
                return Response({"success":True, "message":"Студента успішно виключено зі списку активних."}, status=200)
        if 'teachers' in info:
            teachers_list = info.get('teachers')
            for teacher in teachers_list:
                user = get_object_or_404(FlexUser, code=teacher)
                user.change_active()
            if len(teachers_list) > 1:
                return Response({"success":True, "message":"Викладачів успішно виключено зі списку активних."}, status=200)
            elif len(teachers_list) == 1:
                return Response({"success":True, "message":"Викладача успішно виключено зі списку активних."}, status=200)
        else:
            return Response({"success":False, "message":"Під час виконання операції виникла помилка, спробуйте пізніше."}, status=200)


class ActiveUserView(APIView):
    """
    Check the user status of the active user and in response get user profile
    """
    # Get profile of active user
    def get(self, request, username):
        """
        Get all information about active user
        """
        response = {}
        active_user = get_object_or_404(FlexUser, username=username)
        if active_user.status == 'Admin':
            school = active_user.school_code
            return Response({"success":True, "school":school, "status":'Admin'}, status=200)
        response['school'] = active_user.school_code
        response['code'] = active_user.code
        response['fullname'] = active_user.fullname
        response['registered'] = active_user.registered
        response['avatar'] = active_user.photo
        response['status'] = active_user.status
        if active_user.status == 'Student':
            student = get_object_or_404(Student, user=active_user)
            response['book_number'] = student.book_number
            response['group_number'] = student.group_number
            return Response({"success":True, "profile":response}, status=200)
        elif active_user.status == 'Teacher':
            response['email'] = active_user.email
            return Response({"success":True, "profile":response}, status=200)
        else:
            return Response({"success":False, "message":'Під час виконання операції виникла помилка, спробуйте пізніше.'}, status=200)
    # Change user avatar
    def put(self, request):
        """
        Change avatar for active user
        """
        user = get_object_or_404(FlexUser, code=request.data.get('person'))
        if 'avatar' in request.FILES:
            user.avatar = request.FILES['avatar']
            user.save(update_fields=['avatar'])
        user_avatar = UserSerializer(user).data
        avatar = str(user_avatar['avatar'][7:])
        return Response({"success":True, "message":'Інформацію успішно змінено.', 'avatar':avatar}, status=200)


class SchoolView(APIView):
    """
    Features to manage the information about school
    """
    def get(self, request, code):
        """
        Get all information about school
        """
        if School.objects.filter(pk=code).exists():
            school = SchoolSerializer(get_object_or_404(School, pk=1)).data
            return Response({"success":True, "school":school}, status=200)
        else:
            return Response({"success":False, "message":"Під час виконання операції виникла помилка, спробуйте пізніше."}, status=200)

    def put(self, request, code):
        """
        Save the school if information has been changed
        """
        if School.objects.filter(pk=code).exists():
            info = request.data
            school = get_object_or_404(School, pk=code)
            school.full_name = info.get('full_name')
            school.short_name = info.get('short_name')
            school.director = info.get('director')
            school.director_short = info.get('director_short')
            school.assistant = info.get('assistant')
            school.assistant_short = info.get('assistant_short')
            school.save()
            new_school = SchoolSerializer(school).data
            return Response({"success":True, "school":new_school}, status=200)
        else:
            return Response({"success":False, "message":"Під час виконання операції виникла помилка, спробуйте пізніше."}, status=200)


class DepartmentView(APIView):
    """
    View to manage the department of school
    """
    def get(self, request, code):
        school = get_object_or_404(School, pk=code)
        departments = DepartmentSerializer(Department.objects.filter(school=school), many=True).data
        return Response({"success":True, "departments":departments}, status=200)

    def post(self, request, code):
        """
        Get all existing departments
        """
        info = request.data
        school = get_object_or_404(School, pk=code)
        full_name = info.get('full_name').capitalize()
        if Department.objects.filter(school=school, full_name__iexact=full_name).exists():
            return Response({"success":False, "message":"Відділення з наданою назвою вже зареєстровано."}, status=200)
        department = Department.objects.create(school=school, full_name=full_name, manager=info.get('manager'), manager_short=info.get('manager_short'))
        departments = DepartmentSerializer(Department.objects.filter(school=school), many=True).data
        return Response({"success":True, "departments":departments, "message":"Нове відділення успішно зареєстровано."}, status=200)

    def put(self, request, code):
        """
        Get all existing departments
        """
        info = request.data
        school = get_object_or_404(School, pk=code)
        department = get_object_or_404(Department, pk=info.get('id'), school=school)
        department.full_name = info.get('full_name').capitalize()
        department.manager = info.get('manager')
        department.manager_short = info.get('manager_short')
        department.save(update_fields=['full_name','manager','manager_short'])
        departments = DepartmentSerializer(Department.objects.filter(school=school), many=True).data
        return Response({"success":True, "departments":departments}, status=200)


class SpecialtyView(APIView):
    """
    View to manage the department of school
    """
    def get(self, request, code):
        school = get_object_or_404(School, pk=code)
        specialties = SpecialtySerializer(Specialty.objects.filter(department__school=school), many=True).data
        return Response({"success":True, "specialties":specialties}, status=200)

    def post(self, request, code):
        """
        Get all existing departments
        """
        info = request.data
        school = get_object_or_404(School, pk=code)
        full_name = info.get('full_name').capitalize()
        degree = info.get('degree')
        department = get_object_or_404(Department, full_name__iexact=info.get('department'), school=school)
        if Specialty.objects.filter(department__school=school, department=department, full_name__iexact=full_name, degree=degree).exists():
            return Response({"success":False, "message":"Спеціальність з наданою назвою вже зареєстровано."}, status=200)
        specialty = Specialty.objects.create(department=department, full_name=full_name, short_name=info.get('short_name'), degree=degree)
        specialties = SpecialtySerializer(Specialty.objects.filter(department__school=school), many=True).data
        return Response({"success":True, "specialties":specialties, "message":"Нову спеціальність успішно зареєстровано."}, status=200)

    def put(self, request, code):
        """
        Get all existing departments
        """
        info = request.data
        school = get_object_or_404(School, pk=code)
        department = get_object_or_404(Department, full_name=info.get('department'), school=school)
        specialty = get_object_or_404(Specialty, pk=info.get('id'), department__school=school)
        specialty.department = department
        specialty.full_name = info.get('full_name').capitalize()
        specialty.short_name = info.get('short_name')
        specialty.degree = info.get('degree')
        specialty.save()
        specialties = SpecialtySerializer(Specialty.objects.filter(department__school=school), many=True).data
        return Response({"success":True, "specialties":specialties}, status=200)


class StudentListView(APIView):
    """
    Student view serializer to get the list of exists student
    """
    def get(self, request, code):
        school = get_object_or_404(School, pk=code)
        students = StudentSerializer(Student.objects.filter(user__school=school), many=True).data
        return Response({"success":True, "students":students}, status=200)


class TeacherListView(APIView):
    """
    Teacher view serializer to get the list of exists teachers
    """
    def get(self, request, code):
        school = get_object_or_404(School, pk=code)
        teachers = TeacherSerializer(Teacher.objects.filter(user__school=school, user__is_active=True), many=True).data
        return Response({"success":True, "teachers":teachers}, status=200)


class SubjectView(APIView):
    """
    The view to edit (create) a new subject which depends on a teacher
    """
    def get(self, request, code):
        school = get_object_or_404(School, pk=code)
        subjects = SubjectSerializer(Subject.objects.filter(teacher__user__school=school, teacher__user__is_active=True).order_by('subject'), many=True).data
        return Response({"success":True, "subjects":subjects}, status=200)

    def post(self, request, code):
        """
        Registration a new subject with given data
        """
        school = get_object_or_404(School, pk=code)
        code = request.data.get('teacher')
        subject = request.data.get('subject').capitalize()
        user = get_object_or_404(FlexUser, code=code)
        teacher = get_object_or_404(Teacher, user=user)
        if Subject.objects.filter(subject__iexact=subject, teacher=teacher, teacher__user__school=school).exists():
            return Response({"success":False, "message":"Навчальну дисципліну з наданою назвою для обраного викладача вже зареєстровано!"}, status=200)
        new_subject = Subject.objects.create(teacher=teacher, subject=subject)
        new_subject.save()
        subjects = SubjectSerializer(Subject.objects.filter(teacher__user__school=school), many=True).data
        return Response({"success":True, "message":'Навчальну дисципліну успішно додано.', "subjects":subjects}, status=200)


class GroupListView(APIView):
    """

    """
    def get(self, request, code):
        school = get_object_or_404(School, pk=code)
        groups = GroupSerializer(Group.objects.filter(specialty__department__school=school), many=True).data
        return Response({"success":True, "groups":groups}, status=200)


class SemestersView(APIView):
    """
    The view to manage semesters, get semesters to student and register a new semester
    """
    # Get semesters for selected student
    def get(self, request, code):
        """
        Get semesters with discoplines and grades
        """
        student = get_object_or_404(Student, user__code=code)
        if Semester.objects.filter(students=student).exists():
            semesters = []
            for semester in list(Semester.objects.filter(students=student).order_by('number')):
                examinations = {}
                examinations['semester'] = semester.semester
                disciplines = [discipline for discipline in list(Discipline.objects.filter(semester=semester))]
                grades = []
                for discipline in disciplines:
                    grades.append(Grade.objects.filter(discipline=discipline, student=student).last())
                examinations['grades'] = GradeSerializer(grades, many=True).data
                examinations['disciplines'] = DisciplinesSerializer(disciplines, many=True).data
                semesters.append(examinations)
            return Response({"success":True, "semesters":semesters}, status=200)
        else:
            return Response({"success":False, "message":'Не знайдено відповідних записів.'}, status=200)
    # Add new semester
    def post(self, request, code):
        """
        Check if students exists in list of request.group and then create a new semester for them
        """
        info = request.data
        school = get_object_or_404(School, pk=code)
        groups = info.get('groups')
        students = []
        for group_number in groups:
            number, short_name = group_number.split('-')
            specialty = get_object_or_404(Specialty, department__school=school, short_name=short_name)
            group = get_object_or_404(Group, number=number, specialty=specialty)
            if Student.objects.filter(group=group, user__is_active=True, user__school=school).exists():
                for student in list(Student.objects.filter(group=group, user__school=school, user__is_active=True)):
                    students.append(student)
            else:
                return Response({"success":False, "message":'В групі ' + group_number + ' не зареєстровано студентів.'}, status=200)
        semester = info.get('semester')
        disciplines = info.get('disciplines')
        number, end = semester.split('-')
        new_semester = Semester.objects.create(number=number, semester=semester)
        for student in students:
            if Semester.objects.filter(number__iexact=number, students=student).exclude(pk=new_semester.pk).exists():
                new_semester.delete()
                return Response({"success":False, "message":'Семестр з наданим номером вже зареєстровано для групи.'}, status=200)
            new_semester.students.add(student)
        new_semester.save()
        for index, disc in enumerate(disciplines, start=1):
            new_descipline = Discipline.objects.create(semester=new_semester,number=index,subject=disc['discipline'],form=disc['form'],hours=disc['hours'],credits=disc['credits'],discipline_date=disc['date'],teacher=disc['teacher'])
        return Response({"success":True, "message":'Семестр успішно додано.'}, status=200)


class GradesView(APIView):
    """
    The view to manage grades of discipline of exams
    """
    # Get semesters for selected group
    def get(self, request, students):
        """
        Get semester for chosen group to add new grades
        """
        group_semesters = []
        student = get_object_or_404(Student, user__code=students)
        if Semester.objects.filter(students=student).exists():
            semesters = [semester for semester in list(Semester.objects.filter(students=student, is_active=True).order_by('number'))]
            for semester in semesters:
                our_semester = {}
                our_semester['semester'] = semester.semester
                disciplines = [discipline for discipline in list(Discipline.objects.filter(semester=semester))]
                our_semester['disciplines'] = DisciplinesSerializer(disciplines, many=True).data
                group_semesters.append(our_semester)
            return Response({"success":True, "semesters":group_semesters}, status=200)
        else:
            return Response({"success":False, "message":'Під час виконання операції виникла помилка, спробуйте пізніше.'}, status=200)
    # Add new grades for students
    def post(self, request):
        """
        Record the added grades from given data
        """
        info = request.data
        students = info.get('students')
        first_student = get_object_or_404(Student, user__code=students[0])
        semester = get_object_or_404(Semester, semester=info.get('semester'), students=first_student)
        discipline = get_object_or_404(Discipline, semester=semester, subject=info.get('discipline'))
        for student, score, grade in zip(students, info.get('scores'), info.get('grades')):
            new_student = get_object_or_404(Student, user__code=student)
            if Grade.objects.filter(discipline=discipline, discipline__semester=semester, student=new_student).exists():
                old_grade = get_object_or_404(Grade, discipline=discipline, discipline__semester=semester, student=new_student)
                old_grade.score = score
                old_grade.grade = grade
                old_grade.save()
            else:
                new_grade = Grade.objects.create(discipline=discipline, student=new_student, score=score, grade=grade)
        return Response({"success":True, "message":'Інформацію успішно збережено.'}, status=200)


class AdminListView(generics.ListAPIView):
    """
    Get list of active admins
    """
    queryset = FlexUser.objects.filter(status='Admin')
    serializer_class = UserSerializer
