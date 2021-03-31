from django.urls import path
from .views import (
    cover_image_list,
    cover_image_detail,
    cover_photo_list,
    product_image_detail,
    product_image_list,
    logo_detail,
    logo_list
)

urlpatterns = [
    path('product_image/', product_image_list),
    path('product_image/<int:pk>/', product_image_detail),

    path('cover_photo/', cover_photo_list),
    path('cover_image/', cover_image_list),
    path('cover_image/<int:pk>', cover_image_detail),

    path('logo/', logo_list),
    path('logo/<int:pk>/', logo_detail)
]
