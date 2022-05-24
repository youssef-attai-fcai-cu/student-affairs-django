from argparse import Action
from django.urls import path
from . import views
urlpatterns = [
    path('', views.Homepage, name='index'),
    path('index.html', views.index, name='index'),
    path('add-student.html', views.add_student, name='add-student'),
    path('edit-student-data.html', views.edit_student_data,
         name='edit-student-data'),
    path('Homepage.html', views.Homepage, name="Homepage"),
    path('search_student/', views.search_student, name='search_srudent'),
    path('search-student.html',  views.search.as_view(), name='search-student'),
    path('autocomplete',  views.autocomplete, name='autocomplete'),
    path('student-department-assignment.html',
         views.student_department_assignment, name='student-department-assignment'),
    path('view-students.html', views.view_students, name='view-students'),

]
