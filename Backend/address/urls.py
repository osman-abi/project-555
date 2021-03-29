from django.urls import path
from .views import (
    shop_address_list,
    work_duration_list,
    tech_support_list,
    copy_rigth_list
)

urlpatterns = [
    path('shop_address/', shop_address_list),
    path('work_duration/', work_duration_list),
    path('tech_support/', tech_support_list),
    path('copy_right/', copy_rigth_list)
]
