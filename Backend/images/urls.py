from django.urls import path
from .views import (
    cover_image_list,
    cover_photo_list,
    product_image_list,
    logo_list
)

urlpatterns = [
    path('product_image/', product_image_list),
    path('cover_photo/', cover_photo_list),
    path('cover_image/', cover_image_list),
    path('logo/', logo_list),

]
