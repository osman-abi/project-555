from django.urls import path
from .views import (
    about_list,
    about_detail,
    mission_list,
    mission_detail,
    our_shop_list,
    ourshop_detail
)

urlpatterns = [
    path('abouts/', about_list),
    path('abouts/<int:pk>/', about_detail),

    path('missions/', mission_list),
    path('missions/<int:pk>/', mission_detail),

    path('shops/', our_shop_list),
    path('shops/<int:pk>/', ourshop_detail)
]
