from email import message
import imp
from multiprocessing import context
from pickle import TRUE
from ssl import AlertDescription
from unicodedata import name
from unittest import result
from urllib import request
from django.shortcuts import render
from django.http import HttpResponse
from .models import informations
#import pyautogui as pag
# Create your views here.
def index(request):
    
    return render(request, 'index.html')

def add_student(request):
    inform=informations.objects.all()
    return render(request, 'add-student.html', {'inform': inform})

def edit_student_data(request):
    inform=informations.objects.all()
    return render(request, 'edit-student-data.html', {'inform': inform})

def Homepage(request):
    inform=informations.objects.all()
    return render(request, 'Homepage.html', {'inform': inform})

def search_student(request):
    inform=informations.objects.all()
    return render(request, 'search-student.html', {'inform': inform})

def student_department_assignment(request):
    inform=informations.objects.all()
    return render(request, 'student-department-assignment.html', {'inform': inform})

def view_students(request):
    inform=informations.objects.all()
    return render(request, 'view-students.html', {'inform': inform})

def search(request):
    if request.method == 'POST':
        inform=informations.objects.all()
        sname=request.POST.get('student')
        post=informations.objects.all().filter(name=sname)
        found=True

        if(not sname==""):
            if(not(informations.objects.all().filter(name=sname).exists())):
                found=False

            
        
        context={
            'inform':inform,
            'post':post,
            'f':found,
        }
        return render(request,'search-student.html',context)


    
