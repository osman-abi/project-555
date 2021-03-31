from django.urls import path
from .views import (
    shop_address_list,
    shop_address_detail,

    work_duration_list,
    work_duration_detail,

    tech_support_list,
    tech_support_detail,

    copy_rigth_list,
    copy_right_detail
)

urlpatterns = [
    path('shop_address/', shop_address_list),
    path('shop_address/<int:pk>/', shop_address_detail),

    path('work_duration/', work_duration_list),
    path('work_duration/<int:pk>/', work_duration_detail),

    path('tech_support/', tech_support_list),
    path('tech_support/<int:pk>/', tech_support_detail),

    path('copy_right/', copy_rigth_list),
    path('copy_right/<int:pk>/', copy_right_detail)
]
