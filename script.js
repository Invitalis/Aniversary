function updateCountdown() {
    const eventDate = new Date('December 22, 2024 15:30:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('countdown').innerHTML = `Faltan: ${days} días, ${hours} horas y ${minutes} minutos`;
}

function addToCalendar() {
    const eventDetails = {
        title: '40° Aniversario - Fredy & America',
        description: 'Celebración de Bodas de Rubí',
        location: 'Jardín versalles, calzada ebenezer, callejón giron, santo tomas milpas altas, sacatepéquez',
        start: '2024-12-22T15:30:00',
        end: '2024-12-22T23:00:00'
    };

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}&dates=${eventDetails.start.replace(/[-:]/g, '')}/${eventDetails.end.replace(/[-:]/g, '')}`;
    
    window.open(googleCalendarUrl, '_blank');
}

function openMap() {
    const mapUrl = 'https://maps.google.com/?q=Jardín+versalles,+calzada+ebenezer,+callejón+giron,+santo+tomas+milpas+altas,+sacatepéquez';
    window.open(mapUrl, '_blank');
}

function confirmAssistance() {
    const message = encodeURIComponent('¡Hola! Confirmo mi asistencia al 40° Aniversario de Fredy & America');
    const whatsappUrl = `https://wa.me/+50244675393?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

updateCountdown();
setInterval(updateCountdown, 60000);