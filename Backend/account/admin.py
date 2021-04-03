from django.contrib import admin
from .models import User,SubscribedUsers


admin.site.register(User)
admin.site.register(SubscribedUsers)
# Register your models here.
