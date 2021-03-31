from django.urls import path
from .views import invoice_list, invoice_detail

urlpatterns = [
    path('', invoice_list),
    path('<int:pk>/', invoice_detail)
]
