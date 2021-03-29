from django.urls import path
from .views import product_category_list, filter_category_list

urlpatterns = [
    path('categories/', product_category_list),
    path('filter/', filter_category_list)
]
