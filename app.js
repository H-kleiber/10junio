const datos = async () => {
    try {
        const request=await fetch("http://localhost:3000/clientes");
        const res=await request.json();
        console.log(res)
        renderData(res);  
    } catch (error) {
        console.log(error)
    }
 };
     datos()
function renderData(res) {
        const fragmento=document.createDocumentFragment();
        const main=document.querySelector('.box')
        res.forEach(element => {
        const divbox=document.createElement('div');
        divbox.innerHTML=` <div class="row">
                        <div class="fila nombre"><h3>${element.nombre}</h3></div>
                        <div class="fila email"><h3>${element.email}</h3></div>
                        <div class="fila telefono"><h3>${element.telefono}</h3></div>
                        <div class="fila empresa"><h3>${element.empresa}</h3></div>
                         <button id="button_edit_id"class="button_fila">E</button>
                         <button id="button_eliminar_id"class="button_fila">X</button>
                        </div>`
        fragmento.appendChild(divbox)   
        });
        main.appendChild(fragmento);

        const button_eliminar_id=document.getElementById('button_eliminar_id')
        button_eliminar_id.addEventListener('click',()=>{
            alert('sda')

        })
        const button_edit_id=document.getElementById('button_edit_id')
        button_edit_id.addEventListener('click',()=>{
            dogs.forEach(function(objeto) {
                if (objeto.id == captura_id) {
                  objeto.nombre = nombre;
                  objeto.name=nombre;
                  objeto.telefono=telefono;
                  objeto.pais=pais;
                  objeto.descripcion=descripcion;
                }
              });

        })
}

const createRegistro = async () => {
    const nombre=document.getElementById('nombre').value
    const email=document.getElementById('email').value
    const telefono=document.getElementById('telefono').value
    const empresa=document.getElementById('empresa').value

    const data = {
        nombre:`${nombre}`,
        email: `${email}`,
        telefono: `${telefono}`,
        empresa: `${empresa}`
    };
    const request = await fetch('http://localhost:3000/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    // return request.json()
    const info = await request.json();
    console.log(info);  
  };

const button_agregar_id=document.getElementById('button_agregar_id')
button_agregar_id.addEventListener('click',function(){
   createRegistro()
});