from django.urls import path
from .views import about_list,mission_list, our_shop_list

urlpatterns = [
    path('abouts/', about_list),
    path('missions/', mission_list),
    path('shops/', our_shop_list)
]