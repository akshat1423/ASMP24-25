from rest_framework import serializers
from .models import Registration, WishList
from Mentors.models import Mentor
from Mentors.serializers import MentorSerializer

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'

class WishListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishList
        fields = '__all__'
        