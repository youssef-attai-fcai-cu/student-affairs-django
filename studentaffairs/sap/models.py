from django.db import models

# Create your models here.
class informations(models.Model):
    #if bad thing happend change data from the migrations
    IDS=models.IntegerField(blank=True,null=True,default=None)
    name=models.CharField(max_length=500,default='')
    date=models.IntegerField(blank=True,null=True,default=None)
    gpa=models.FloatField(blank=True,null=True,default=None)
    GENDER_MALE = 0
    GENDER_FEMALE = 1
    GENDER_CHOICES = [(GENDER_MALE, 'Male'), (GENDER_FEMALE, 'Female')]
    gender = models.IntegerField(choices=GENDER_CHOICES)
    level=models.IntegerField(blank=True,null=True,default=None)
    departement=models.CharField(max_length=500,default='')
    Email=models.CharField(max_length=500,default='')
    mobile=models.CharField(max_length=500,default='')
    status=models.CharField(max_length=500,default='')
