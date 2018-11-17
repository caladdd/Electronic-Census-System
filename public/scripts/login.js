'use strict'

var form = $('#login');
$(form).submit(function(event) {
    event.preventDefault();
    var formData = {}
    var inputdivs = $('#login').find('input');
    
    //escribe en formdata todos los datos del form tipo objeto
    for(var i = 0; i < inputdivs.length; i += 1){    
        formData[inputdivs[i].name] = inputdivs[i].value;
    }
    
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
            window.scrollTo(0,0);
            $('.alert').removeClass('alert-danger');
            $('.alert').addClass('alert-success');
            $('.alert').text(response.message);

            var census = {
                token: response.token,
                tipo: response.tipo
            }
            
            // El token y el tipo se guardará en una variable llamada census, en el sessionstorage
            // es algo muy inseguro, si es posible, cambiar a cookies
            sessionStorage.setItem('census', JSON.stringify(census));
            
            //luego se redigirá a la pagina principal
            //aquí se debería poner un $.get que envíe como parametro el token.
            setTimeout(function() {
                window.location.href = '/';
            }, 1000);
        })
        .fail(function(data) {
            // Asegurar que el alert se le quite la clase succes para que solo tenga danger
            window.scrollTo(0,0);
            $('.alert').removeClass('alert-success');
            $('.alert').addClass('alert-danger');
        
            // Agrega el texto del mensaje
            if (data.responseText !== '') {
                $('.alert').text(data.responseText);
            } else {
                $('.alert').text('Ha ocurrido un error y tus datos no han sido enviados, vuelve a intentarlo');
            }
        });
    }
    
})