//inicia la librería de EmailJs
(function(){
    emailjs.init("H_5IgZ4n-8LyRdzA8");
 })();

const form = document.querySelector('.form-contact');
console.log(form);

//fijar placeholder en la parte superior del input
var inputs = document.getElementsByClassName('form-input');
for (var i = 0; i <inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar')
            
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

//Ejecuta la función para enviar el email
const sendEmail = (templateParams) => {
    emailjs.send('service_nrxarln', 'template_k7vv6zw', templateParams)
    .then(function(response) {//se ejecuta cuando el envío es exitoso
       console.log('SUCCESS!', response.status, response.text);
       Toastify({
        text: "Tu Comentario se envio correctamente",
        duration: 1000,
        position: "center", // `left`, `center` or `right`
        style: {background: "linear-gradient(to right, #4BC40B, #8AFA55)",},
        }).showToast();

    }, function(error) {//se ejecuta cuando el envío falla
       console.log('FAILED...', error);

       Toastify({
        text: "Error al enviar",
        duration: 1000,
        position: "center", // `left`, `center` or `right`
        style: {background: "linear-gradient(to right, #D50505, #E78D0C)",},
        }).showToast();
    });
}

//evento
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = {
        to_name:'Exequiel',
        from_name:e.target[0].value,
        email_of_emiter:e.target[1].value,
        message:e.target[2].value,
    };
    if( e.target[0].value =="" | e.target[1].value=="" | e.target[2].value =="" ){
        Toastify({
            text: "Los campos no pueden estar vacios",
            duration: 1000,
            position: "center", // `left`, `center` or `right`
            style: {background: "linear-gradient(to right, #D50505, #E78D0C)",},
            }).showToast();
     }else{
       sendEmail( data );
     }
    
})


