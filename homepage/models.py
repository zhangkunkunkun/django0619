from django.db import models

class Customer(models.Model):
    c_name = models.CharField(max_length=16, unique=True)
    c_password = models.CharField(max_length=256)
    c_email = models.CharField(max_length=64, unique=True)
    is_active = models.BooleanField(default=False)
    is_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'edu_customer'
