'use strict'
var form = $('#signup');
$(form).submit(function(event){
    //función que se ejecuta cuando al form se le hace submit
    event.preventDefault(); // previene que se envíen los datos por defecto
    var formData = {};
    var inputdivs = $('#signup').find(".form-group");
    var radioInput = $('.form-check')[0]
    
    //este for es para agregar todos los datos del form
    for(var i = 0; i < inputdivs.length; i += 1){
        var target = inputdivs[i].children[1];

        // verificar si el elemento es un radiobutton
        if (target === radioInput) {
            var radioValue = $("input[name='genero']:checked").val();
            formData['genero'] = radioValue;
        } else {
            formData[target.name] = target.value;
        }
     }
    
     //si formData existe y no esta vacío hacer la petición
    if(formData) {
        $.ajax({
            url: $(form).attr('action'),
            data: formData,
            cache: false,
            method: 'POST',
            type: 'POST'
        })
        .done(function(response) {
            // esta se ejecuta cuando todo sale bien
            $('.alert').removeClass('alert-danger');
            $('.alert').addClass('alert-success');
            $('.alert').text(response.message);
            // Limpia el form
            $(form)[0].reset();
        })
        .fail(function(data) {
            // Asegurar que el alert se le quite la clase succes para que solo tenga danger
            $('.alert').removeClass('alert-success');
            $('.alert').addClass('alert-danger');
        
            // Agrega el texto del mensaje
            if (data.responseText !== '') {
                $('.alert').text(data.responseText);
            } else {
                $('.alert').text('Oops! An error occured and your message could not be sent.');
            }
        });
    }
});
