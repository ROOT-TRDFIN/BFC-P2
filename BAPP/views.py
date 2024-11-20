from django.shortcuts import render, redirect, get_object_or_404
from operator import index
from django.core.mail import EmailMultiAlternatives
from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages
from django.utils.html import strip_tags
from BAPP.models import BFCONTACT
from django.http import HttpResponseNotFound
# Create your views here.

#Index

def index(request):
    return render(request, 'index.html')
#about


def about(request):
    return render(request, 'about.html')
#galery


def gallery(request):
    return render(request, 'gallery.html')

#team

def team(request):
    return render(request, 'ourteam.html')

#projects
def projects(request):
    return render(request, 'projects.html')

#service

def service(request):
    return render(request, 'service.html')

#works

def works(request):
    return render(request, 'works.html')

#contact

def contact(request):
    if request.method == 'POST':
        Name = request.POST.get('Name','')
        Number = request.POST.get('Number','')
        Email = request.POST.get('Email','')
        Message = request.POST.get('Message','')
        
        if Name and Number and Email and Message:
            
            BFCONTACT.objects.create(
                Name=Name,
                Number=Number,
                Email=Email,
                Message=Message
            )
            
            # Prepare the email content
            email_subject = 'Contact Form Submission - Clients or Visitors'
            html_message = f"""
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2 style="color: #2C3E50;">New Contact Form Submission</h2>
                <p style="font-size: 16px; color: #34495E;"><strong>First Name:</strong> {Name}</p>
                <p style="font-size: 16px; color: #34495E;"><strong>Phone Number:</strong> {Number}</p>
                <p style="font-size: 16px; color: #34495E;"><strong>Email:</strong> {Email}</p>
                <p style="font-size: 16px; color: #34495E;"><strong>Message:</strong></p>
                <p style="padding: 10px; background-color: #F9F9F9; border: 1px solid #DDDDDD;">{Message}</p>
            </body>
            </html>
            """
            plain_message = strip_tags(html_message)
    # Strip HTML tags for plain text version
            email = EmailMultiAlternatives(
                subject=email_subject,
                body=plain_message,  # Plain text fallback
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[settings.DEFAULT_FROM_EMAIL]
            )
            email.attach_alternative(html_message, "text/html")

# Send the email
            email.send(fail_silently=False)
            
            messages.success(request, 'Your message has been sent. We will get in touch soon.')

            return redirect('contact')
        
    return render(request,'contact.html')

def custom_404_view(request, exception=None):
    return HttpResponseNotFound('Page not found')