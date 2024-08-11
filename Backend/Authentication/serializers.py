from rest_framework import serializers
from .models import User, Profile

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = ['is_active']

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
        