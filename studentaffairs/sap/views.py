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
from django.core.exceptions import ObjectDoesNotExist


# import pyautogui as pag
# Create your views here.


def index(request):

    return render(request, 'index.html')


def add_student(request):
    if request.method == 'POST':  # get all field values
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

        if len(studentPhone) < 11:  # validate phone and email fields
            messages.info(request, 'Phone number should be 11 characters')
            return redirect('add-student.html')

        if not("@" in studentEmail and (".com" in studentEmail or ".org" in studentEmail or ".net" in studentEmail or "stud.cu.edu.eg" in studentEmail)):
            messages.info(request, 'Invalid E-mail address')
            return redirect('add-student.html')
        else:
            # check if phone number already exists for another student
            if informations.objects.all().filter(mobile=studentPhone):
                messages.info(request, 'Phone number already used')
                return redirect('add-student.html')
            # check if email already exists for another student
            elif informations.objects.all().filter(email=studentEmail):
                messages.info(request, 'Email already used')
                return redirect('add-student.html')
            else:
                # generate another ID if the current one is already used
                while(informations.objects.all().filter(studID=studentID)):
                    studentID = 20200000 + randint(100, 999)
                    if informations.objects.all().filter(studID=studentID):
                        continue
                    else:
                        break

                newStudent = informations.objects.create(name=studentName.lower(), studID=studentID,  level=studentLevel, gender=studentGender, status=studentStatus, gpa=studentGpa, date=studentBirth,
                                                         department=studentDepartment, mobile=studentPhone, email=studentEmail)
                newStudent.save()  # create and save the student into the database
                messages.info(request, 'Student added successfully')
                messages.info(request, 'Student ID is ' + str(studentID))
                return redirect('add-student.html')

    else:
        return render(request, 'add-student.html')


def edit_student_data(request):

    if request.method == 'POST':  # get all field values
        studentID = request.POST.get('studentID')

        clickAction = request.POST['actionType']  # check action type

        if clickAction == 'delete':  # delete a student
            try:
                row = informations.objects.get(studID=studentID)
                row.delete()
                messages.info(request, 'Student has been deleted')
            except ObjectDoesNotExist:
                messages.error(request, 'Delete failed, invalid ID')
            return redirect("edit-student-data.html")
        else:                   # update student info
            try:
                studentName = request.POST['name']
                studentGpa = request.POST['gpa']
                studentBirth = request.POST['date']
                studentGender = request.POST['gender']
                studentLevel = request.POST['level']
                studentPhone = request.POST['mobile']
                studentEmail = request.POST['email']
                studentStatus = request.POST['status']

                # validate phone and email fields
                if len(studentPhone) < 11 or len(studentPhone) > 11:
                    messages.info(
                        request, 'Phone number should be 11 characters')
                    return redirect("edit-student-data.html?studID="+studentID)
                if not("@" in studentEmail and (".com" in studentEmail or ".org" in studentEmail or ".net" in studentEmail or "stud.cu.edu.eg" in studentEmail)):
                    messages.info(request, 'Invalid email address')
                    return redirect("edit-student-data.html?studID="+studentID)

                row = informations.objects.get(studID=studentID)
                if informations.objects.all().filter(mobile=studentPhone):  # check if new phone number is already used
                    if row.mobile == studentPhone:  # if it's the same as the current student's, don't do anything
                        pass
                    else:
                        messages.info(request, 'Phone number already used')
                        return redirect("edit-student-data.html?studID="+studentID)

                if informations.objects.all().filter(email=studentEmail):  # check if new email is already used
                    if row.email == studentEmail:  # if it's the same as the current student's, don't do anything
                        pass
                    else:
                        messages.info(request, 'Email already used')
                        return redirect("edit-student-data.html?studID="+studentID)

                # update student info in the database with the current input
                row.name = studentName.lower()
                row.gpa = studentGpa
                row.date = studentBirth
                row.gender = studentGender
                row.level = studentLevel
                row.mobile = studentPhone
                row.email = studentEmail
                row.status = studentStatus

                row.save()
                messages.info(request, 'Updated student successfully')
            except ObjectDoesNotExist:
                messages.error(request, 'Edit failed')
            return redirect("edit-student-data.html?studID="+studentID)

    elif request.method == 'GET':   # get student info
        studentID = request.GET.get('studID')
        if studentID is not None:  # if ID field is not empty
            try:
                # if ID exists, the student details will be displayed via inform dictionary
                row = informations.objects.get(studID=studentID)
                inform = vars(row)

                return render(request, 'edit-student-data.html', {'inform': inform})
            except ObjectDoesNotExist:  # if ID doesn't exist
                messages.error(request, 'Invalid ID')
                return render(request, 'edit-student-data.html')
        else:
            return render(request, 'edit-student-data.html')


def Homepage(request):
    inform = informations.objects.all()
    return render(request, 'Homepage.html', {'inform': inform})


class search(CreateView):
    template_name = "search-student.html"
    form_class = UserCreationForm


def search_student(request):
    student_name = request.GET.get('name')
    is_found = informations.objects.all().filter(name=student_name).exists()
    inform = informations.objects.all()
    data = {'is_found': is_found, 'inform': list(inform.values())}
    return JsonResponse(data)


def student_department_assignment(request):
    inform = informations.objects.all()

    if request.method == 'POST':
        studentID = request.POST['studentID']
        studentName = request.POST['name']
        studentDepartment = request.POST['selected_department']
        try:

            row = informations.objects.get(studID=studentID)
            if studentName.lower() != row.name:
                raise ObjectDoesNotExist
            if row.level == "lvl1" or row.level == "lvl2":
                messages.error(
                    request, 'Cannot assign department to students lower than level 3')
                return redirect("student-department-assignment.html")
            else:
                row.department = studentDepartment
                row.save()
                messages.info(request, 'Department Assigned Successfully!')
                return redirect("student-department-assignment.html")
        except ObjectDoesNotExist:
            messages.error(request, 'Invalid ID or Name')
            return redirect("student-department-assignment.html")

    else:
        return render(request, 'student-department-assignment.html', {'inform': inform})


def view_students(request):
    inform = informations.objects.all()

    if(request.method == 'POST'):

        studentStatus = request.POST['status_In']
        student_ID = request.POST['studentViewID']
        row = informations.objects.get(studID=student_ID)
        row.status = studentStatus
        row.save()
        messages.info(request, "Student with ID: "+str(student_ID) +
                      " changed status to "+str(studentStatus))

    return render(request, 'view-students.html', {'inform': inform})
