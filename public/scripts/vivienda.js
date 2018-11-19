'use strict'

$(function() {
    var arriendoRadioB = $('input[name=faduenacion]');
    arriendoRadioB.change(function(){
        var tipoArriendo = this.value;
        var bloqueArrinedo = $('#bloqueArriendo');
        var pago = bloqueArrinedo[0].children[1]
        if (tipoArriendo === 'pgarriendo') {
            bloqueArrinedo.removeClass('d-none');
            pago.setAttribute('required', 'required');
        } else {
            bloqueArrinedo.addClass('d-none');
            $(pago).removeAttr('required');
        }
    })
});