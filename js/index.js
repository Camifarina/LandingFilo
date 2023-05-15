$(document).ready(() => {
    console.log("JQuery Cargado");
    
    
      $(".boton1, .boton2, .boton3").click(() => {
        abrirForm();
      });
      $(".btn-sig").click(() => {
        pasarForm();
      });
      $("#formulario-principal").on("submit", (e) => {
        e.preventDefault(); 
        abrirFeed();
        pasarDatosAFeedback();
      });
    
      function abrirForm() {
        console.log("form abierto");
        $(".form-cont1").removeClass("oculto");
      }
      function pasarForm() {
        console.log("form2");
        $(".form-cont1").addClass("oculto");
        $(".form-cont2").removeClass("oculto");
      }
      function abrirFeed(){
        $(".form-cont2").addClass("oculto");
        $(".feedback").removeClass("oculto");
      }
      function pasarDatosAFeedback(){
        const inputNombre = $("#nombre");
        const inputEmail = $("#email");
    
        const nombre = inputNombre.val();
        const email = inputEmail.val();
    
        const spanNombre = $("#dato-nombre");
        const spanEmail = $("#dato-email");
        
        spanNombre.html(' ' + nombre);
        spanEmail.html(' ' + email + ' ');
      }
      
      var swiper = new Swiper(".cards-info", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
   

});
    
