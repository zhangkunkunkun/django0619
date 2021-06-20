from django.http.response import HttpResponse, JsonResponse
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

    def checkuser(request):
        username = request.GET.get("username")
        users = Customer.objects.filter(c_name = username)
        data = {
            "status": 200,
            "msg": '用户名可用'
        }

        if users.exists():
            data['status'] = 901
            data['msg'] = '用户不可用'
        else:
            pass
        return JsonResponse(data = data)

    def checkmail(request):
        usermail = request.GET.get("useremail")
        emails = Customer.objects.filter(c_email = usermail)
        data = {
            "status": 200,
            "msg": '邮箱可用'
        }

        if emails.exists():
            data['status'] = 901
            data['msg'] = '邮箱不可用'
        else:
            pass
        return JsonResponse(data = data)



            

