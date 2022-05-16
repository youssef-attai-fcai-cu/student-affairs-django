from argparse import Action
from django.urls import path
from . import views
urlpatterns=[
    path('',views.Homepage,name='index'),
    path('index.html',views.index,name='index'),
    path('add-student.html',views.add_student,name='add-student'),
    path('edit-student-data.html',views.edit_student_data,name='edit-student-data'),
    path('Homepage.html',views.Homepage,name="Homepage"),
    path('search-student.html',views.search_student,name='search-student'),
    path('student-department-assignment.html',views.student_department_assignment,name='student-department-assignment'),
    path('view-students.html',views.view_students,name='view-students'),
    path('search/',views.search,name='search'),
    path('search/index.html',views.index,name='index'),
    path('search/add-student.html',views.add_student,name='add-student'),
    path('search/edit-student-data.html',views.edit_student_data,name='edit-student-data'),
    path('search/Homepage.html',views.Homepage,name="Homepage"),
    path('search/search-student.html',views.search_student,name='search-student'),
    path('search/student-department-assignment.html',views.student_department_assignment,name='student-department-assignment'),
    path('search/view-students.html',views.view_students,name='view-students'),

]