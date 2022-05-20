from django.db import models

# Create your models here.

class informations(models.Model):
    # if bad thing happend change data from the migrations
    name = models.CharField(max_length=500, default='')
    studID = models.DecimalField(max_digits=99999999,
                                 blank=True, default=None, decimal_places=0)
    date = models.CharField(max_length=500, default='')
    gpa = models.FloatField(blank=True, null=True,
                            default=None)
    gender = models.CharField(max_length=500, default='')
    level = models.CharField(max_length=500, default='')
    department = models.CharField(max_length=500, default='')
    email = models.CharField(max_length=500, default='')
    mobile = models.CharField(max_length=500, default='')
    status = models.CharField(max_length=500, default='')

