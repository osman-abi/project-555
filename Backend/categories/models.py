from django.db import models


class ParentCategory(models.Model):
    name = models.CharField(max_length=150, blank=False,
                            verbose_name='Kateqoriya adı AZ')

    def __str__(self):
        return self.name


class ChildCategory(models.Model):
    parent = models.ForeignKey(
        ParentCategory, on_delete=models.CASCADE, verbose_name='Ana Categoriya')
    name = models.CharField(max_length=150, blank=False,
                            verbose_name='Kateqoriya adı AZ')

    def __str__(self):
        return self.name
