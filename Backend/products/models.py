from django.db import models
from categories.models import  FilterCategory



# Create your models here.

class Product(models.Model):

    name = models.CharField(max_length=300, verbose_name='mehsulun adi')
    price = models.IntegerField(verbose_name='mehsulun qiymeti')
    description = models.TextField(verbose_name='mehsulun xususiyyetleri')
    images = models.ManyToManyField('images.ProductImage',blank=True)
    filter_category = models.ManyToManyField(
        FilterCategory, blank=True, verbose_name='filter')
    
    stock_status = models.BooleanField(default=False)
    best_seller = models.BooleanField(default=False)
    publish_date = models.DateTimeField(
        auto_now=True, verbose_name='Əlavə edilmə tarixi')

    def __str__(self):
        return f"mehsul = {self.name}"
