from django.urls import path
from .views import product_list, product_detail,comment_list

urlpatterns = [
    path('', product_list),
    path('<int:pk>/', product_detail),
    path('comments/', comment_list)
]
