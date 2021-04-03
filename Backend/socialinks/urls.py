from django.urls import path
from .views import facebook_link_list,instagram_link_list,whatsapp_link_list

urlpatterns = [
    path('facebook/link/',facebook_link_list),
    path('instagram/link/',instagram_link_list),
    path('whatsapp/link/',whatsapp_link_list),
]