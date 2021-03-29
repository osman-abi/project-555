from django.contrib import admin
from .models import Logo, CoverImage, CoverPhoto, ProductImage

admin.site.register(Logo)
admin.site.register(CoverPhoto)
admin.site.register(CoverImage)
admin.site.register(ProductImage)

# Register your models here.
