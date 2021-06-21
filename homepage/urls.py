from django.urls import path
from .views import Homepage

urlpatterns = [
    path('', Homepage.index, name="index"),
    path('buttonTest/', Homepage.buttonTest, name="buttonTest"),
    path('register/', Homepage.register, name="register"),
    path('register/checkuser/', Homepage.checkuser, name="checkuser"),
    path('register/checkmail/', Homepage.checkmail, name="checkmail"),
    path('register/getcheckcode/', Homepage.getcheckcode, name="getcheckcode"),
    path('register/checkcode/', Homepage.checkcode, name="checkcode"),
    # path('register/checkpassword2/', Homepage.checkpassword2, name="checkpassword2"),
]