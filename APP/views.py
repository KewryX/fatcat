from django.shortcuts import render

# Create your views here.


def hellodjango(request):

    

    return render(request, 'index.html', {})