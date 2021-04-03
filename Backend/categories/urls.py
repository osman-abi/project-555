from django.urls import path
from .views import  filter_category_list, filter_category_detail

urlpatterns = [
    
    path('filter/', filter_category_list),
    path('filter/<int:pk>/', filter_category_detail)
]
