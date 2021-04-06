from django.db import models

# Create your models here.

""" ABOUT PAGE """

class About(models.Model):
    about_context = models.TextField(verbose_name='daha etrafli')
    
    class Meta:
        verbose_name='Haqqımızda daha ətraflı'
    
    def __str__(self):
        return self.about_context

class Mission(models.Model):
    mission_context = models.TextField(verbose_name='missiyamiz')

    class Meta:
        verbose_name = "Missiyamız"

    def __str__(self):
        return self.mission_context

class OurShop(models.Model):
    ourshop_context = models.TextField(verbose_name='magazamiz')

    class Meta:
        verbose_name="Mağazamız"

    def __str__(self):
        return self.ourshop_context

class YourMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    title = models.CharField(max_length=100)
    message = models.TextField()

    class Meta:
        verbose_name="Bİzə yazılan mesajlar"

    def __str__(self):
        return f"{self.name} -> {self.message}"

