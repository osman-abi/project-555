from django.db import models

# Create your models here.

""" ABOUT PAGE """

class About(models.Model):
    about_context = models.TextField(verbose_name='daha etrafli')
    
    def __str__(self):
        return self.about_context

class Mission(models.Model):
    mission_context = models.TextField(verbose_name='missiyamiz')

    def __str__(self):
        return self.mission_context

class OurShop(models.Model):
    ourshop_context = models.TextField(verbose_name='magazamiz')

    def __str__(self):
        return self.ourshop_context

