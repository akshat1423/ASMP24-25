from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegistrationSerializer, WishListSerializer
from Authentication.models import User, Profile
from .models import Registration, WishList
from Mentors.serializers import MentorSerializer
from Mentors.models import Mentor


class RegistrationAPIView(APIView):
    def post(self, request):
<<<<<<< HEAD
        # accessToken = request.data['accessToken']
        accessToken = "82cf3f73-f995-4d72-92bb-7c158a38232a"
=======
        accessToken = request.data['accessToken']
>>>>>>> 9489e6568018ab22832a06313891bfca1204128e
        try:
            user = User.objects.get(accessToken=accessToken)
            if(user.is_active == False):
                return Response("User not verified", status=status.HTTP_400_BAD_REQUEST)
            if(not Profile.objects.filter(user=user)[0]):
                return Response("Profile Not Found", status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            print("Error while fetching user", e)
            return Response(status=status.HTTP_404_NOT_FOUND)
        print(user)
        request.data['user'] = user.id
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            try:
                pref1 = Mentor.objects.get(id=serializer.validated_data['pref1'].id)
                pref2 = Mentor.objects.get(id=serializer.validated_data['pref2'].id)
                pref3 = Mentor.objects.get(id=serializer.validated_data['pref3'].id)
                pref4 = Mentor.objects.get(id=serializer.validated_data['pref4'].id)
                pref5 = Mentor.objects.get(id=serializer.validated_data['pref5'].id)
                
                if(pref1.should_show == False or pref2.should_show == False or pref3.should_show == False or pref4.should_show == False or pref5.should_show == False):
                    if(pref1.should_show == False):
                        return Response(f'Mentor with ID: {pref1.id} is not available', status=status.HTTP_406_NOT_ACCEPTABLE)
                    if(pref2.should_show == False):
                        return Response(f'Mentor with ID: {pref2.id} is not available', status=status.HTTP_406_NOT_ACCEPTABLE)
                    if(pref3.should_show == False):
                        return Response(f'Mentor with ID: {pref3.id} is not available', status=status.HTTP_406_NOT_ACCEPTABLE)
                    if(pref4.should_show == False):
                        return Response(f'Mentor with ID: {pref4.id} is not available', status=status.HTTP_406_NOT_ACCEPTABLE)
                    if(pref5.should_show == False):
                        return Response(f'Mentor with ID: {pref5.id} is not available', status=status.HTTP_406_NOT_ACCEPTABLE)
                        
                pref1.popularity += 5
                pref2.popularity += 4
                pref3.popularity += 3
                pref4.popularity += 2
                pref5.popularity += 1
                
                if(pref1.popularity > pref1.preferred_mentees*15):
                    pref1.should_show = False
                
                if(pref2.popularity > pref2.preferred_mentees*15):
                    pref2.should_show = False
                
                if(pref3.popularity > pref3.preferred_mentees*15):
                    pref3.should_show = False
                
                if(pref4.popularity > pref4.preferred_mentees*15):
                    pref4.should_show = False
                    
                if(pref5.popularity > pref5.preferred_mentees*15):
                    pref5.should_show = False
                    
                pref1.save()
                pref2.save()
                pref3.save()
                pref4.save()
                pref5.save()

                serializer.save()
            except Exception as e:
                print("Error while updating mentor popularity", e)
                return Response("Something went wrong", status=status.HTTP_406_NOT_ACCEPTABLE)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class WishListAPIView(APIView):
    def post(self, request):
<<<<<<< HEAD
        # accessToken = request.data['accessToken']
        accessToken = "82cf3f73-f995-4d72-92bb-7c158a38232a"       
=======
        accessToken = request.data['accessToken']
>>>>>>> 9489e6568018ab22832a06313891bfca1204128e
        try:
            user = User.objects.get(accessToken=accessToken)
            if(user.is_active == False):
                return Response("User not verified", status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print("Error while verifying user", e)
            return Response(status=status.HTTP_404_NOT_FOUND)
        print(user)
        try:
            if(not WishList.objects.filter(user=user)[0]):
                return Response(status=status.HTTP_404_NOT_FOUND)
            
            wishlist = WishList.objects.get(user=user)
            if(not wishlist.mentors.filter(id=request.data['mentor'])):
                return Response("Mentor not in the wishlist", status=status.HTTP_404_NOT_FOUND)
            wishlist.mentors.remove(request.data['mentor'])
            wishlist.save()
            return Response("Mentor deleted to wishlist", status=status.HTTP_200_OK)
        except Exception as e:
            print("Error while updating wishlist", e)
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    
    def get(self, request):
        try:
<<<<<<< HEAD
            # accessToken = request.query_params.get('accessToken')
            accessToken = "82cf3f73-f995-4d72-92bb-7c158a38232a"
=======
            accessToken = request.query_params.get('accessToken')
>>>>>>> 9489e6568018ab22832a06313891bfca1204128e
            user = User.objects.get(accessToken=accessToken)
            
            if not user.is_active:
                return Response("User not verified", status=status.HTTP_400_BAD_REQUEST)
            
            wishlist = WishList.objects.get(user=user)
            mentors = []

            print('wishlist.mentors.all() = ',wishlist.mentors.all())

            for mentor in wishlist.mentors.all():
                serializer = MentorSerializer(mentor)
                mentor_data = serializer.data;
                mentor_data['wishlisted'] = True
                if(mentor_data['should_show']):
                    mentors.append(mentor_data)
                
            
            return Response(mentors, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response("User not found", status=status.HTTP_404_NOT_FOUND)

        except WishList.DoesNotExist:
            return Response("Wishlist not found", status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            print("Error while fetching wishlist", e)
            return Response("Internal server error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    
    def put(self, request):
<<<<<<< HEAD
        # accessToken = request.data['accessToken']
        accessToken = "82cf3f73-f995-4d72-92bb-7c158a38232a"
=======
        accessToken = request.data['accessToken']
>>>>>>> 9489e6568018ab22832a06313891bfca1204128e
        try:
            user = User.objects.get(accessToken=accessToken)
            if(user.is_active == False):
                return Response("User not verified", status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print("Error while verifying user", e)
            return Response(status=status.HTTP_404_NOT_FOUND)
        print(user)
        try:
            if(not WishList.objects.filter(user=user)):
                wishlist = WishList.objects.create(user=user)
            wishlist = WishList.objects.get(user=user)
            if(wishlist.mentors.filter(id=request.data['mentor'])):
                return Response("Mentor already in wishlist", status=status.HTTP_400_BAD_REQUEST)
            wishlist.mentors.add(request.data['mentor'])
            wishlist.save()
            return Response("Mentor added to wishlist", status=status.HTTP_201_CREATED)
        except Exception as e:
            print("Error while updating wishlist", e)
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        


import csv
from django.http import HttpResponse
from .models import Registration

def export_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="registration_data.csv"'

    writer = csv.writer(response)
    writer.writerow(['full name', 'contact', 'Email', 'sop', 'Personal email', 'linkedin', 'Pref1 ID', 'Pref1 Name', 'Pref2 ID', 'Pref2 Name', 'Pref3 ID', 'Pref3 Name', 'Pref4 ID', 'Pref4 Name', 'Pref5 ID', 'Pref5 Name'])

    registrations = Registration.objects.select_related('user', 'pref1', 'pref2', 'pref3', 'pref4', 'pref5').all()

    for registration in registrations:
        profile = Profile.objects.filter(user=registration.user)[0]
        writer.writerow([
            registration.user.fullname,
            registration.user.contact,
            registration.user.ldap,
            profile.sop,
            profile.personal_email,
            profile.linkedin,
            registration.pref1.id,
            registration.pref1.fullname,
            registration.pref2.id,
            registration.pref2.fullname,
            registration.pref3.id,
            registration.pref3.fullname,
            registration.pref4.id,
            registration.pref4.fullname,
            registration.pref5.id,
            registration.pref5.fullname,
        ])

    return response




def export_csv_wishlist(request, queryset):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="wishlist_data.csv"'

    writer = csv.writer(response)
    writer.writerow(['fullname', 'context', 'email', 'Mentor IDs', 'Mentor Names'])

    for wishlist in WishList.objects.all():
        mentors_ids = [str(mentor.id) for mentor in wishlist.mentors.all()]
        mentors_names = [mentor.fullname for mentor in wishlist.mentors.all()]

        writer.writerow([
            wishlist.user.fullname,
            wishlist.user.contact,
            wishlist.user.ldap,
            ', '.join(mentors_ids),
            ', '.join(mentors_names),
        ])

    return response

