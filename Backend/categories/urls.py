from django.urls import path
from .views import parent_category_list, child_category_list

urlpatterns = [

    path('parent/', parent_category_list),
    path('child/', child_category_list)
]
