from cmath import inf
from email import message
import imp
import json
from multiprocessing import context
from pickle import TRUE
from ssl import AlertDescription
from unicodedata import name
from unittest import result
from urllib import request
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import informations
from django.contrib import messages
from django.http import JsonResponse
from random import randint, randrange
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView
#import pyautogui as pag
# Create your views here.


def index(request):

    return render(request, 'index.html')


def add_student(request):
    if request.method == 'POST':
        studentName = request.POST['name']
        studentID = 20200000 + randint(100, 999)
        studentGpa = request.POST['gpa']
        studentBirth = request.POST['date']
        studentGender = request.POST['gender']
        studentDepartment = request.POST['department']
        studentLevel = request.POST['level']
        studentPhone = request.POST['mobile']
        studentEmail = request.POST['email']
        studentStatus = request.POST['status']

        if informations.objects.all().filter(mobile=studentPhone):
            messages.info(request, 'Phone number already used')
            return redirect('add-student.html')
        elif informations.objects.all().filter(email=studentEmail):
            messages.info(request, 'Email already used')
            return redirect('add-student.html')
        else:
            while(informations.objects.all().filter(studID=studentID)):
                studentID = 20200000 + randint(100, 999)
                if informations.objects.all().filter(studID=studentID):
                    continue
                else:
                    break

            newStudent = informations.objects.create(name=studentName, studID=studentID,  level=studentLevel, gender=studentGender, status=studentStatus, gpa=studentGpa, date=studentBirth,
                                                     department=studentDepartment, mobile=studentPhone, email=studentEmail)
            newStudent.save()
            messages.info(request, 'Student added successfully')
            return redirect('add-student.html')
            # return render(request, 'Homepage.html')
    else:
        return render(request, 'add-student.html')


def edit_student_data(request):
    inform = informations.objects.all()
    return render(request, 'edit-student-data.html', {'inform': inform})


def Homepage(request):
    inform = informations.objects.all()
    return render(request, 'Homepage.html', {'inform': inform})


class search(CreateView):
    template_name="search-student.html"
    form_class= UserCreationForm



def search_student(request):
    student_name=request.GET.get('name')
    is_found=informations.objects.all().filter(name=student_name).exists()
    inform=informations.objects.all()       
    data={'is_found':is_found,'inform':list(inform.values())}
    return JsonResponse(data)




def student_department_assignment(request):
    inform = informations.objects.all()
    return render(request, 'student-department-assignment.html', {'inform': inform})


def view_students(request):
    inform = informations.objects.all()
    return render(request, 'view-students.html', {'inform': inform})

