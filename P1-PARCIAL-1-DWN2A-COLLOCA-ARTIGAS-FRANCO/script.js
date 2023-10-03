// Obtener elementos del DOM
const cargarDiscoBtn = document.getElementById('cargarDiscoBtn');
const verDiscografiaBtn = document.getElementById('verDiscografiaBtn');
const cargarDiscoModal = document.getElementById('cargarDiscoModal');
const verDiscografiaModal = document.getElementById('verDiscografiaModal');
const closeButtons = document.querySelectorAll('.close');
const cargarDiscoForm = document.getElementById('cargarDiscoForm');
const guardarDiscoBtn = document.getElementById('guardarDisco');
const discografia = document.getElementById('discografia');
const agregarDiscoBtn = document.getElementById('agregarDiscoBtn');
const agregarCancionBtn = document.getElementById('agregarCancionBtn');


// Función para abrir el modal de carga de disco
cargarDiscoBtn.addEventListener('click', () => {
  cargarDiscoModal.style.display = 'block';
});

// Función para cerrar los modales
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cargarDiscoModal.style.display = 'none';
    verDiscografiaModal.style.display = 'none';
  });
});

// Función para mostrar el modal de discografía
verDiscografiaBtn.addEventListener('click', () => {
  verDiscografiaModal.style.display = 'block';
});

// Función para guardar un disco en la discografía
guardarDiscoBtn.addEventListener('click', () => {
  // Validar que los campos no estén vacíos
  if (
    img.value === '' ||
    nombre.value === '' ||
    artista.value === '' ||
    nunico.value === '' ||
    canciones.value === '' ||
    duraciones.value === ''
  ) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Guardar los datos del disco y agregarlos a la discografía
  // Usando un objeto para representar un disco y luego agregarlo a una lista
  let disco = {
    img: img.value,
    nombre: nombre.value,
    artista: artista.value,
    nunico: nunico.value,
    canciones: canciones.value,
    duraciones: duraciones.value,
  };


  let agregarDisco = document.getElementById('discografia')
  agregarDisco.innerHTML += '<ul><li>' + '<img src=img/disco.img width="200">' + '</li>' + '<li>' + 'Nombre del disco: ' + disco.nombre + '</li>' + '<li>' + 'Artista: ' + disco.artista + '</li>' + '<li>' + 'ID del disco: ' + disco.nunico + '</li>' + '<li>' + 'Canciones: ' +disco.canciones + '</li>' + '<li>' + 'Duracion: ' +disco.duraciones + '</li></ul>';
  console.log(agregarDisco.textContent);
  cargarDiscoForm.appendChild('verDiscografiaModal');


  // Limpiar el formulario
  
  cargarDiscoForm.reset();
  cargarDiscoModal.style.display = 'none';
  
});


// Función para abrir el modal de carga de disco desde la discografía
agregarDiscoBtn.addEventListener('click', () => {
  cargarDiscoModal.style.display = 'block';
  verDiscografiaModal.style.display = 'none';
});

// Aca quiero agregar un input para cargar mas canciones pero me crea el input abajo de los botones del boton de crear
// cancion y el boton de guardar

agregarCancionBtn.addEventListener('click', () => {
  let agregarCancion = document.createElement('input')
  agregarCancion.textContent = `${cargarDiscoForm}`
  cargarDiscoForm.appendChild(agregarCancion);

})




