from django.http.response import HttpResponse
from homepage.models import Customer
from django.shortcuts import redirect, render

class Homepage:
    

    def index (request):
      return render(request, 'homepage.html')

    def buttonTest(request):
        return render(request, 'buttontest.html')

    def register(request):
        if request.method =="GET":
            data = {
                "title":"注册"
            }
            return render(request, 'register.html', context = data)

        elif request.method =="POST":
            username = request.POST.get("username")
            useremail = request.POST.get("useremail")
            userpassword = request.POST.get("userpassword")
            
            customer = Customer()
            customer.c_name = username
            customer.c_email = useremail
            customer.c_password = userpassword

            customer.save()

            return HttpResponse("注册成功")




            

