from django.db import models

# Create your models here.
class BFCONTACT(models.Model):
    Name = models.CharField(max_length=50)
    Number = models.CharField(max_length=20)
    Email= models.EmailField(max_length=50)
    Message= models.CharField(max_length=50)
    
    def __str__(self):
        return self.Name