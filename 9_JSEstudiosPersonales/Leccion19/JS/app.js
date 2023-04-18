const personas = [
];
function mostrarPersona(){
    console.log('mostrar personas');
    let texto = '';
    for (let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    let nombre = forma['nombre'];
    let apellido = forma['apellido'];
    if ( nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value,apellido.value);
        console.log(persona);
        personas.push(persona)
        mostrarPersona();
    }else{
        alert('No hay informacion que mostrar')
    }
}