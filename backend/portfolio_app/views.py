from django.shortcuts import render
from django.http import JsonResponse
from django.core.mail import send_mail
from django.conf import settings


def home(request):
    """Renders the single-page portfolio (Home, About, Skills, Projects, Contact)."""
    return render(request, 'index.html')


def contact(request):
    """Handles the contact form submission (POST from #contact-form)."""
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        message = request.POST.get('message', '').strip()

        if not (name and email and message):
            return JsonResponse({'success': False, 'error': 'All fields are required.'}, status=400)

        try:
            send_mail(
                subject=f'Portfolio contact from {name}',
                message=f'From: {name} <{email}>\n\n{message}',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_RECEIVER_EMAIL],
                fail_silently=True,
            )
        except Exception:
            pass

        return JsonResponse({'success': True})

    return JsonResponse({'success': False, 'error': 'Invalid request method.'}, status=405)
