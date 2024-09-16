// Función para actualizar los colores de fondo y texto basados en la hora
function updateBackground() {
    const now = new Date();
    const hour = now.getHours();
    const body = document.body;
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const links = document.querySelectorAll('a.gradient-link'); // Selecciona todos los enlaces con la clase 'gradient-link'
    
    let backgroundColor;
    let textColor;
  
    // Cambiar el fondo cada 6 horas
    if (hour >= 6 && hour < 12) {
        backgroundColor = '#FFDDC1'; // Amanecer - tonos cálidos y suaves
        textColor = '#333'; // Texto oscuro para buena legibilidad
    } else if (hour >= 12 && hour < 18) {
        backgroundColor = '#87CEEB'; // Mediodía - cielo azul claro
        textColor = '#000'; // Texto oscuro
    } else if (hour >= 18 && hour < 24) {
        backgroundColor = '#FFD700'; // Atardecer - dorado
        textColor = '#333'; // Texto oscuro
    } else {
        backgroundColor = '#2C3E50'; // Noche - oscuro, casi negro
        textColor = '#FFF'; // Texto claro
    }
  
    // Actualizar los estilos dinámicamente
    body.style.backgroundColor = backgroundColor;
    h1.style.color = textColor;
    h2.style.color = textColor;
    links.forEach(link => {
        link.style.color = textColor; // Actualiza el color del texto del enlace
    });
}
  
// Llamar la función al cargar la página
updateBackground();
  
// Para que recargue el color sin recargar la página
setInterval(updateBackground, 60000); // Actualiza cada minuto
