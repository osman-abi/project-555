"""weeshoop URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="WeeShoop API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="admin@admin.remote"),
        license=openapi.License(name="WeeSh License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', schema_view.with_ui('swagger',
        cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc',
        cache_timeout = 0), name = 'schema-redoc'),
    #################################################
    path('api/registration/', include('account.urls')),
    path('api/about/', include('about.urls')),
    path('api/shop/', include('address.urls')),
    path('api/social/', include('socialinks.urls')),
    path('api/category/', include('categories.urls')),
    path('api/images/', include('images.urls')),
    path('api/products/', include('products.urls')),
    path('api/invoices/', include('order.urls'))

]


urlpatterns += static(settings.STATIC_URL,
                      document_root = settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL,
                      document_root=settings.MEDIA_ROOT)
