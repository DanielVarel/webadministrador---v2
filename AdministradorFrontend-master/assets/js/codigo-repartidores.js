var repartidoresRegistrados = [];

function  obtenerRepartidorese(){
    fetch(`http://localhost:8888/repartidores`, {
        method: 'get',
        headers: {"Content-Type": "application/json"},
      })
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        repartidoresRegistrados = datos;
        mostrarRepartidores()
    })
    .catch(error => {
            console.log(error)
    }); 
}

obtenerRepartidorese();

function mostrarRepartidores(){
    let tabla = ``;
    let verificado = ``;
    for(let i=0; i<repartidoresRegistrados.length; i++){

        if(repartidoresRegistrados[i].authenticated == true){
            verificado = `<i class="fa-solid fa-check"></i>`;            
        }else{
            verificado = `<i class="fa-solid fa-x"></i>`;            
        }


        tabla += ` <TR class="detalles-tabla" onclick="abrirVentanaModal(${i})">
                    <TD class="checkbox-tama"><div class="checkbox-apple"><input class="yep" id="check-apple" type="checkbox"><label for="check-apple"></label></div></TD><TD>${repartidoresRegistrados[i]._id}</TD><TD><p>${repartidoresRegistrados[i].name}</p></TD><TD>${repartidoresRegistrados[i].email}</TD> <TD>${repartidoresRegistrados[i].phoneNumber}</TD><TD class="botones" id="botones">${verificado}</TD>
                 </TR>`;                 
    }

    document.getElementById("seccion-repartidores").innerHTML = ` <div class="card">    
                                                                <TABLE BORDER>
                                                                    <TR class="detalles-tabla">
                                                                        <TH></TH><TH>ID</TH> <TH>Name</TH> <TH>Email</TH> <TH>Phone number</TH> <TH>Verified</TH>
                                                                    </TR>
                                                                    ${tabla} 
                                                                </TABLE> 
                                                            </div>`;
}

var miVentanaModal = document.getElementById("miVentanaModal");

// Abre la ventana modal
function abrirVentanaModal(id) {
  miVentanaModal.style.display = "block";

  document.getElementById("miVentanaModal").innerHTML = `<div class="modal-contenido">
                                            <span class="cerrar" id="cerrar">&times;</span>
                                              <h2>Biker details</h2>
                                              <div class="contenedor-modal">
                                                  <div class="modal-img">
                                                      <img src="assets/img/repartidor3.jpeg" alt="">
                                                  </div>
                                                  <div class="modal-inf">
                                                      <p><i class="fa-solid fa-user"></i> ${repartidoresRegistrados[id].name}</p>
                                                      <p><i class="fa-solid fa-id-card-clip"></i>${repartidoresRegistrados[id]._id}</p>
                                                      <p><i class="fa-solid fa-envelope"></i> ${repartidoresRegistrados[id].email}</p>
                                                      <p><i class="fa-solid fa-phone"></i>${repartidoresRegistrados[id].phoneNumber}</p>
                                                  </div>
                                                  <div class="botones">
                                                      <div>
                                                          <button onclick="validarRepartidor('${repartidoresRegistrados[id]._id}')">Validate</button>
                                                      </div>
                                                      <div>
                                                          <button>Deny</button>
                                                      </div>
                                                      <div>
                                                          <button onclick="eliminarRepartidor('${repartidoresRegistrados[id]._id}')">Delete</button>
                                                      </div>
                                                      <div>
                                                          <button>Update</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>`


}

// eliminar repartidor
function eliminarRepartidor(id){
    fetch(`http://localhost:8888/repartidores/${id}`, {
        method: 'delete',
        headers: {"Content-Type": "application/json"},
      })
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        console.log(datos);
        location.reload(true);
    })
    .catch(error => {
            console.log(error)
    }); 
}

// validar repartidor
function  validarRepartidor(id){
    fetch(`http://localhost:8888/repartidores/${id}`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify()
        })
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            console.log('Se actualizo correctamente', datos);
        })
        .catch(error => console.log(error));  
}


// Cierra la ventana modal cuando se hace clic afuera de ella
window.onclick = function(event) {
  if (event.target == miVentanaModal) {
    miVentanaModal.style.display = "none";
  }
}

//Cierra la ventana modal cuando se hace clic en el botón de cerrar
var botonCerrar = document.getElementsByClassName("cerrar")[0];
botonCerrar.onclick = function() {
  miVentanaModal.style.display = "none";
}






// // Obtener elementos del DOM para actualizar
// const openModalBtn1 = document.getElementById('open-modal-btn1');
// const closeModalBtn1 = document.getElementById('close-modal-btn1');
// const modalContainer1 = document.getElementById('modal-container1');

// // Función para abrir el modal
// function openModal() {
//   modalContainer1.style.display = 'block';
// }

// // Función para cerrar el modal
// function closeModal() {
//   modalContainer1.style.display = 'none';
// }

// // Agregar eventos a los botones
// openModalBtn1.addEventListener('click', openModal);
// closeModalBtn1.addEventListener('click', closeModal);
