from django.db import models

# Create your models here.

class FacebookLink(models.Model):
    link = models.URLField(max_length=250, verbose_name='sosial hesab')

class InstagramLink(models.Model):
    link = models.URLField(max_length=250, verbose_name='sosial hesab')

class WhatsappLink(models.Model):
    link = models.URLField(max_length=250, verbose_name='sosial hesab')