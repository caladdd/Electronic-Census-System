'use strict'
function initForm() {

    const paisInput = document.getElementById('fpaisnacimiento');
    paisInput.addEventListener('blur', (obj) => {
        console.log(obj.target.value);
        let pais = obj.target.value;
        pais = pais.toUpperCase();
        if (pais !== 'BOLUMBIA') {
            const extranjeroInput = document.getElementById('bloqueExtranjero');
            extranjeroInput.style.display = "block";
            const tiempoBolumbia = extranjeroInput.children[1].children[1];
            console.log(tiempoBolumbia);
            
            tiempoBolumbia.setAttribute('required', 'required');
        }
         
        // if(obj.target.value ===)
    });
}

window.addEventListener('load', initForm)