$(document).ready(function() {
    function toggleMenu() {
        $(".hamburger").toggleClass("is-active");
        $(".menuppal").toggleClass("is_active");

        // Actualiza aria-expanded en el botón del menú
        let isExpanded = $(".hamburger").hasClass("is-active");
        $(".hamburger").attr("aria-expanded", isExpanded);
    }

    // Evento de clic en el botón del menú
    $(".hamburger").click(function() {
        toggleMenu();
    });

    // Evento para activar con teclado (Enter o Espacio)
    $(".hamburger").keydown(function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleMenu();
        }
    });

    // Cierra el menú al hacer clic en un enlace
    $(".menuppal a").click(function() {
        $(".menuppal").removeClass("is_active");
        $(".hamburger").removeClass("is-active").attr("aria-expanded", "false");
    });
});