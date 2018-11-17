'use strict'

$(function() {
    $('#fpaisnacimiento').blur(function(){
        var pais = this.value;
        pais = pais.toUpperCase();
        var extranjeroInput = $('#bloqueExtranjero');
        var tiempoBolumbia = extranjeroInput[0].children[0].children[1];           
        if (pais !== 'BOLUMBIA') {
            extranjeroInput.show();
            tiempoBolumbia.setAttribute('required', 'required');
        } else {
            extranjeroInput.hide();
            $('#ftiemporesidencia').removeAttr('required')
        }
    });
  });