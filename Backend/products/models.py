from django.db import models
from categories.models import ChildCategory, ParentCategory
from django.db.models.signals import pre_save
from django.dispatch import receiver
import string
import random


# Create your models here.

class Product(models.Model):
    artikul = models.CharField(max_length=200, blank=True)
    name = models.CharField(max_length=300, verbose_name='mehsulun adi')
    price = models.IntegerField(verbose_name='mehsulun qiymeti')
    description = models.TextField(verbose_name='mehsulun xususiyyetleri')
    images = models.ManyToManyField('images.ProductImage', blank=True)
    filter_category = models.ManyToManyField(
        ChildCategory, blank=True, verbose_name='Alt kateqoriya')
    parent_category = models.ManyToManyField(
        ParentCategory, blank=True, verbose_name='Ust kateqoriya')
    stock_status = models.BooleanField(default=False)
    best_seller = models.BooleanField(default=False)
    publish_date = models.DateTimeField(
        auto_now=True, verbose_name='Əlavə edilmə tarixi')

    def __str__(self):
        return self.artikul


class Comment(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    firstname = models.CharField(max_length=100, blank=True)
    email = models.EmailField(blank=True)
    commentt = models.TextField()

    class Meta:
        verbose_name_plural = 'Mehsul haqqinda reyler'

    def __str__(self):
        return self.commentt


@receiver(pre_save, sender=Product)
def generate_artikul(sender, instance, **kwargs):
    instance.artikul = ''.join(
        random.choice(string.digits) for _ in range(10))
    return instance.artikul
