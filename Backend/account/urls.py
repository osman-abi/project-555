
from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import LogoutAPIView, LoginAPIView,RegisterView, user_list


urlpatterns = [
     path('users/', user_list),
     path('token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
     path('token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
     path('login/', LoginAPIView.as_view(), name="login"),
     path('logout/', LogoutAPIView.as_view(), name="logout"),
     path('register/', RegisterView.as_view(), name="register"),

]
