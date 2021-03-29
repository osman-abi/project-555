from django.urls import path
from .views import social_link_list

urlpatterns = [
    path('link/',social_link_list)
]