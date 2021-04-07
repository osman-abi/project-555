from django.db import models
from products.models import Product

# Create your models here.

class Logo(models.Model):
    logo_image = models.ImageField(upload_to='uploads/')

    def __str__(self):
        return f"{self.logo_image.url}"

class CoverImage(models.Model):
    image = models.ImageField(upload_to='coverimages/')

    class Meta:
        verbose_name_plural = "Slayd şəkillər"

class CoverPhoto(models.Model):
    image = models.ManyToManyField(CoverImage, verbose_name='cover foto')

class ProductImage(models.Model):

    image = models.ImageField(upload_to='products/images/')
    def __str__(self):
        return self.image.url
