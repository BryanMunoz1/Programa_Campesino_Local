// Smooth scrolling para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = target.offsetTop - navbarHeight - 20;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    }
});
});

// Cambiar navbar activo al hacer scroll
window.addEventListener('scroll', () => {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(45, 80, 22, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
} else {
    navbar.style.backgroundColor = '';
    navbar.style.backdropFilter = '';
}
});

// Animación de contador (simulado)
const observerOptions = {
threshold: 0.5,
rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.style.opacity = '1';
    entry.target.style.transform = 'translateY(0)';
    }
});
}, observerOptions);

// Observar cards para animación
document.querySelectorAll('.card').forEach(card => {
card.style.opacity = '0';
card.style.transform = 'translateY(30px)';
card.style.transition = 'all 0.6s ease';
observer.observe(card);
});

// Validación del formulario
document.querySelector('form').addEventListener('submit', function(e) {
e.preventDefault();

const nombre = document.getElementById('nombre').value;
const telefono = document.getElementById('telefono').value;

if (!nombre || !telefono) {
    alert('Por favor completa los campos obligatorios (*)');
    return;
}

// Simular envío exitoso
alert('¡Gracias por tu mensaje! Te contactaremos pronto para coordinar tu pedido o resolver tu consulta.');

// Limpiar formulario
this.reset();
});

// Auto-rotate carousel más lento
const carousel = new bootstrap.Carousel(document.getElementById('testimoniosCarousel'), {
interval: 5000,
wrap: true
});