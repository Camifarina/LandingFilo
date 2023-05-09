$(document).ready(() => {
    console.log("JQuery Cargado");

});

    function toggle(source) {
        checkboxes = document.getElementsByName('foo');
        for(var i=0, n=checkboxes.length;i<n;i++) {
          checkboxes[i].checked = source.checked;
        }
      }

      $(".btn-sig").click(() => {
        pasarForm();
      });

      $(".boton1, .boton2, .boton3").click(() => {
        abrirForm();
      });

      $(".btn-vol").click(() => {
        volverForm();
      });
      $(".btn-conf").click(() => {
        abrirFeed();
        pasarDatosAFeedback();
      });

      $("#formulario-principal").on("#conf", (e) => {
        e.preventDefault(); 
        abrirFeed();
        pasarDatosAFeedback();
      });

      function pasarForm() {
        console.log("form2");
        $(".form1").addClass("oculto");
        $(".form1-botones").addClass("oculto");
        $(".form-tex1").addClass("oculto");
        $(".md-chips").addClass("oculto");
        $(".form2").removeClass("oculto");
        $(".form2-botones").removeClass("oculto");
        $(".wrapper .steps ul li").removeClass("active");
        
      }

      function abrirForm() {
        console.log("form abierto");
        $(".form-cont").removeClass("oculto");
        $(".form1").removeClass("oculto");
        $(".form1-botones").removeClass("oculto");
      }

      function volverForm(){
        console.log("form1");
        $(".form2").addClass("oculto");
        $(".form2-botones").addClass("oculto");
        $(".form1").removeClass("oculto");
        $(".form1-botones").removeClass("oculto");
        $(".form-tex1").removeClass("oculto");
        $(".md-chips").removeClass("oculto");
      }

      function abrirFeed(){
        $(".form-cont").addClass("oculto");
        $(".feedback-cont").removeClass("oculto");

      }

      function pasarDatosAFeedback(){
        const inputNombre = $("#nombre");
        const inputEmail = $("#email");

        const nombre = inputNombre.val();
        const email = inputEmail.val();

        const spanNombre = $("#dato-nombre");
        const spanEmail = $("#dato-email");
        
        spanNombre.html(nombre);
        spanEmail.html(email);
      }
