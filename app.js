async function actualizarRegistros() {
  try {
    const request = await fetch("http://localhost:3000/clientes");
    const res = await request.json();
    renderData(res);
  } catch (error) {
    console.log(error);
  }
}

const defaultDatos = async () => {
  try {
    const request = await fetch("http://localhost:3000/clientes");
    const res = await request.json();  
    renderData(res);
  } catch (error) {
    console.log(error);
  }
};
defaultDatos();

function renderData(res) {
  const fragmento = document.createDocumentFragment();
  const main = document.querySelector('.box');
  
  res.forEach(element => {
    console.log(element.email);
    const divbox = document.createElement('div');
    divbox.innerHTML = `
      <div class="row">
        <div class="fila nombre"><h3>${element.nombre}</h3></div>
        <div class="fila email"><h3>${element.email}</h3></div>
        <div class="fila telefono"><h3>${element.telefono}</h3></div>
        <div class="fila empresa"><h3>${element.empresa}</h3></div>
        <button data-id="${element.id}" class="button_fila button_edit">E</button>
        <button data-id="${element.id}" class="button_fila button_eliminar">X</button>
      </div>
    `;
    fragmento.appendChild(divbox);
  });

  main.appendChild(fragmento);

  //  btneliminar
  const button_eliminar = document.querySelectorAll('.button_eliminar');
  button_eliminar.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      eliminarObjeto(id);
     
    });
  });

  //  btneditar
  const button_edit = document.querySelectorAll('.button_edit');
  button_edit.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      editarObjeto(id);
    });
  });
}

async function eliminarObjeto(id) {
  try {
    const request = await fetch(`http://localhost:3000/clientes/${id}`, {
      method: 'DELETE',
    });
    const response = await request.json();
    console.log(response);
    actualizarRegistros();
    
  } catch (error) {
    console.log(error);
  }
}

async function editarObjeto(id) {
  const nombre = prompt('Ingrese el nuevo nombre:');
  const email = prompt('Ingrese el nuevo email:');
  const telefono = prompt('Ingrese el telefono:');
  const empresa = prompt('Ingrese la empresa:');

  const data = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    empresa: empresa
  };

  try {
    const request = await fetch(`http://localhost:3000/clientes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

const createRegistro = async () => {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const empresa = document.getElementById('empresa').value;

  const data = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    empresa: empresa
  };

  try {
    const request = await fetch('http://localhost:3000/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const button_agregar_id = document.getElementById('button_agregar_id');
button_agregar_id.addEventListener('click', function () {
  createRegistro();
});
