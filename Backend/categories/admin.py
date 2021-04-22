from django.contrib import admin
from .models import ParentCategory, ChildCategory

admin.site.register(ParentCategory)
admin.site.register(ChildCategory)


# Register your models here.
