$(document).ready(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
        $(".menuppal").toggleClass("is_active");
    });

    // Cierra el menú al hacer clic en un enlace
    $(".menuppal a").click(function() {
        $(".menuppal").removeClass("is_active");
        $(".hamburger").removeClass("is-active");
    });
});