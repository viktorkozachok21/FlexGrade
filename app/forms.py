from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import FlexUser

class FlexUserCreationForm(UserCreationForm):

    class Meta:
        model = FlexUser
        fields = ('last_name','first_name','sur_name','status','username','password')

class FlexUserChangeForm(UserChangeForm):

    class Meta:
        model = FlexUser
        fields = UserChangeForm.Meta.fields
