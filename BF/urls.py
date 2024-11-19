"""
crafted by nawin kumar
"""
from django.contrib import admin
from django.urls import path
from  django.conf import settings
from BAPP import views
from django.conf.urls.static import  static
urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.index, name='index'),
    path('about/', views.about, name='about'),
    path('gallery/', views.gallery, name='gallery'),
    path('team/', views.team, name='team'),
    path('projects/', views.projects, name='projects'),
    path('service/', views.service, name='service'),
    path('works/', views.works, name='works'),
    path('contact/', views.contact, name='contact')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)