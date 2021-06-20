from django.urls import path
from .views import Homepage

urlpatterns = [
    path('', Homepage.index, name="index"),
    path('buttonTest/', Homepage.buttonTest, name="buttonTest"),
    path('register/', Homepage.register, name="register"),
    path('register/checkuser/', Homepage.checkuser, name="checkuser"),
    path('register/checkmail/', Homepage.checkmail, name="checkmail"),
    # path('register/checkpassword1/', Homepage.checkpassword1, name="checkpassword1"),
    # path('register/checkpassword2/', Homepage.checkpassword2, name="checkpassword2"),
]