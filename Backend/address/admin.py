from django.contrib import admin
from .models import ShopAddress, CopyRigth, WorkingDuration,  TechniqueSupport

admin.site.register(ShopAddress)
admin.site.register(WorkingDuration)
admin.site.register(TechniqueSupport)
admin.site.register(CopyRigth)

# Register your models here.
