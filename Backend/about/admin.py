from django.contrib import admin
from .models import (
    About,
    OurShop,
    Mission
)
# Register your models here.
admin.site.register(About)
admin.site.register(OurShop)
admin.site.register(Mission)
