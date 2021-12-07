from django.shortcuts import render
from .models import Contacto
from .forms import ContactForm
import time
# Create your views here.

def base(request):
    form = ContactForm(request.POST or None)
    if form.is_valid():
        form.save()
        time.sleep(0.5)
        form = ContactForm()

    context = {
        'form': form
    }
    return render(request, 'base.html', context)
