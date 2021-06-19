from django.urls import path
from .views import Homepage

urlpatterns = [
    path('', Homepage.index, name="index"),
    path('buttonTest/', Homepage.buttonTest, name="buttonTest"),
    path('register/', Homepage.register, name="register"),

]