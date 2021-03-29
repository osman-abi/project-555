from django.db import models

# Create your models here.

class SocialLinks(models.Model):
    link = models.URLField(max_length=250, verbose_name='sosial hesab')