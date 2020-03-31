from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FlexUser
        fields = ('last_name','first_name','sur_name','status','username','password')
