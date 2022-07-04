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

//Configuración de EmailJs

//Creación del template
// const templateParams = {
//     name: 'James',
//     notes: 'Check this out!'
// };



//Ejecuta la función para enviar el email
const sendEmail = (templateParams) => {
    emailjs.send('service_nrxarln', 'template_k7vv6zw', templateParams)
    .then(function(response) {//se ejecuta cuando el envío es exitoso
       console.log('SUCCESS!', response.status, response.text);


    }, function(error) {//se ejecuta cuando el envío falla
       console.log('FAILED...', error);


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

    sendEmail(data);


})


