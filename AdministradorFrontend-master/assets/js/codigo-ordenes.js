function mostrarOrdenes(){
    document.getElementById("seccion-ordenes").style.display = "block";
    document.getElementById("seccion-entregas").style.display = "none";
    document.getElementById("seccion-cancelado").style.display = "none";

    document.getElementById("boton-ordenes").style.background = "#bfb9f6"
    document.getElementById("boton-entregas").style.background = "#fff"
    document.getElementById("boton-cacelados").style.background = "#fff"

    obtenerOrdenes();

}

function mostrarEntegas(){
    document.getElementById("seccion-ordenes").style.display = "none";
    document.getElementById("seccion-entregas").style.display = "block";
    document.getElementById("seccion-cancelado").style.display = "none";

    document.getElementById("boton-ordenes").style.background = "#fff"
    document.getElementById("boton-entregas").style.background = "#bfb9f6"
    document.getElementById("boton-cacelados").style.background = "#fff"

    obtenerEntregas();
}

function mostrarCanceladas(){
    document.getElementById("seccion-ordenes").style.display = "none";
    document.getElementById("seccion-entregas").style.display = "none";
    document.getElementById("seccion-cancelado").style.display = "block";

    document.getElementById("boton-ordenes").style.background = "#fff"
    document.getElementById("boton-entregas").style.background = "#fff"
    document.getElementById("boton-cacelados").style.background = "#bfb9f6"

    obtenerEnProceso();
}

var ordenes = [];

function obtenerOrdenes(){
    fetch(`http://localhost:8888/ordenes/espera`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then((respuesta) => respuesta.json())
  .then(async (result) => {
    ordenes = result;
    console.log(ordenes);
    renderizarOrdenes();
  }); 
}

function renderizarOrdenes(){
    let ordenesTabla =  ``;
    document.getElementById("seccion-ordenes").innerHTML = ``

    for(let i=0; i<ordenes.length; i++){
        ordenesTabla += `<TR class="detalles-tabla" onclick="abrirVentanaModalOrdenes(${i})"s>
                            <TD class="checkbox-tama"><div class="checkbox-apple"><input id="check-apple" type="checkbox"><label for="check-apple"></label></div></TD><TD>${ordenes[i].date}</TD> <TD>${ordenes[i]._id}</TD> <TD><div class="tabla-usuario"><p>${ordenes[i].nombreCliente}</p></div></TD><TD>${ordenes[i].direccion}</TD> <TD>${ordenes[i].envios.length}</TD><TD>$${ordenes[i].precio}</TD>  
                        </TR>`;
    }

    

    document.getElementById("seccion-ordenes").innerHTML += `
                                                    <div class="card">
                                                    <TABLE BORDER>
                                                        <TR>
                                                            <TH></TH><TH>Date</TH> <TH>Referencia</TH> <TH>Cliente</TH> <TH>Direccion</TH> <TH>No.Productos</TH> <TH>Cargo</TH>
                                                        </TR>
                                                        <div id="contenedor-ordenes">
                                                            ${ordenesTabla}
                                                        </div>   
                                                    </TABLE>
                                                    </div>`;
}

obtenerOrdenes();

// Abre la ventana modal para las entregas
function abrirVentanaModalOrdenes(i){
    miVentanaModal.style.display = "block";
  
      document.getElementById('miVentanaModal').innerHTML = ` <div class="modal-contenido">
                                                      <span class="cerrar">&times;</span>
                                                      <h2>Delivery details</h2>
                                                      <div class="contenedor-modal">
                                                          <div class="modal-info-ordenes">
                                                              <p><samp class="span-orden">Date:</samp> ${ordenes[i].date}</p>
                                                              <p><span class="span-orden">Id:</span> ${ordenes[i]._id}</p>
                                                              <p><span class="span-orden">Location:</span> ${ordenes[i].direccion}</p>
                                                              <p><span class="span-orden">Number of products: </span> ${ordenes[i].envios.length}</p>
                                                              <p><span class="span-orden">Price: </span> $${ordenes[i].precio}</p>
                                                          </div>
                                                          <div class="modal-inf-cliente">
                                                              <h3>Customer</h3>
                                                              <p><i class="fa-solid fa-user"></i> ${ordenes[i].nombreCliente}</p>
                                                              <p><i class="fa-solid fa-id-card-clip"></i> ${ordenes[i].idCliente}</p>
                                                          </div>
                                                         
                                                          <div class="botones">
                                                              
                                                              <div>
                                                                  <button>Cancel</button>
                                                              </div>
                                                              <div>
                                                                  <button>Update</button>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>`;
  }



var entregas = []

function obtenerEntregas(){
    fetch(`http://localhost:8888/ordenes/entregadas`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then((respuesta) => respuesta.json())
  .then(async (result) => {
    entregas = result;
    console.log(entregas);
    renderizarEntregas();
  }); 
}

function renderizarEntregas(){
    let ordenesTabla =  ``;
    document.getElementById("seccion-entregas").innerHTML = ``;

    for(let i=0; i<entregas.length; i++){
        ordenesTabla += `<TR class="detalles-tabla" onclick="abrirVentanaModalEntregas(${i})">
                            <TD class="checkbox-tama"><div class="checkbox-apple"><input class="yep" id="check-apple" type="checkbox"><label for="check-apple"></label></div></TD><TD>${entregas[i].date}</TD> <TD>${entregas[i]._id}</TD> <TD><div class="tabla-usuario"><p>${entregas[i].nombreCliente}</p></div></TD><TD><div class="tabla-repartidor"><p>${entregas[i].nombreRepartidor}</p></div></TD><TD>${entregas[i].direccion}</TD> <TD>${entregas[i].envios.length}</TD><TD>$${entregas[i].precio}</TD>
                        </TR>`;
    }

    

    document.getElementById("seccion-entregas").innerHTML += `
                                                    <div class="card">
                                                    <TABLE BORDER>
                                                        <TR>
                                                            <TH></TH><TH>Date</TH> <TH>Referencia</TH> <TH>Cliente</TH> <TH>Repartidor</TH> <TH>Direccion</TH> <TH>No.Productos</TH> <TH>Cargo</TH>
                                                        </TR>
                                                        <div id="contenedor-ordenes">
                                                            ${ordenesTabla}
                                                        </div>   
                                                    </TABLE>
                                                    </div>`;
}

// Abre la ventana modal para las entregas en proceso
function abrirVentanaModalEntregas(i) {
    miVentanaModal.style.display = "block";
  
      document.getElementById('miVentanaModal').innerHTML = ` <div class="modal-contenido">
                                                      <span class="cerrar">&times;</span>
                                                      <h2>Delivery details</h2>
                                                      <div class="contenedor-modal">
                                                          <div class="modal-info-ordenes">
                                                              <p><samp class="span-orden">Date:</samp> ${entregas[i].date}</p>
                                                              <p><span class="span-orden">Id:</span> ${entregas[i]._id}</p>
                                                              <p><span class="span-orden">Location:</span> ${entregas[i].direccion}</p>
                                                              <p><span class="span-orden">Number of products: </span> ${entregas[i].envios.length}</p>
                                                              <p><span class="span-orden">Price: </span> $${entregas[i].precio}</p>
                                                          </div>
                                                          <div class="modal-inf-cliente">
                                                              <h3>Customer</h3>
                                                              <p><i class="fa-solid fa-user"></i> ${entregas[i].nombreCliente}</p>
                                                              <p><i class="fa-solid fa-id-card-clip"></i> ${entregas[i].idCliente}</p>
                                                          </div>
                                                          <div class="modal-inf-repartidor">
                                                              <h3>Dealer</h3>
                                                              <p><i class="fa-solid fa-user"></i> ${entregas[i].nombreRepartidor}</p>
                                                              <p><i class="fa-solid fa-id-card-clip"></i> ${entregas[i].idRepartidor}</p>
                                                          </div>
                                                          <div class="botones">
                                                              
                                                              <div>
                                                                  <button>Cancel</button>
                                                              </div>
                                                              <div>
                                                                  <button>Update</button>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>`;
  }



var enProceso = [];

function obtenerEnProceso(){
    fetch(`http://localhost:8888/ordenes/camino`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then((respuesta) => respuesta.json())
  .then(async (result) => {
    enProceso = result;
    console.log(enProceso);
    renderizarEnCamino();
  }); 
}


function renderizarEnCamino(){
    let ordenesTabla =  ``;
    document.getElementById("seccion-cancelado").innerHTML = ``;

    for(let i=0; i<enProceso.length; i++){
        ordenesTabla += `<TR class="detalles-tabla" onclick="abrirVentanaModalProceso(${i})">
        <TD class="checkbox-tama"><div class="checkbox-apple"><input class="yep" id="check-apple" type="checkbox"><label for="check-apple"></label></div></TD><TD>${enProceso[i].date}</TD> <TD>${enProceso[i]._id}</TD> <TD><div class="tabla-usuario"><p>${enProceso[i].nombreCliente}</p></div></TD><TD><div class="tabla-repartidor"><p>${enProceso[i].nombreRepartidor}</p></div></TD><TD>${enProceso[i].direccion}</TD> <TD>${enProceso[i].envios.length}</TD><TD>$${enProceso[i].precio}</TD>
                        </TR>`;
    }

    

    document.getElementById("seccion-cancelado").innerHTML += `
                                                    <div class="card">
                                                    <TABLE BORDER>
                                                        <TR>
                                                            <TH></TH><TH>Date</TH> <TH>Referencia</TH> <TH>Cliente</TH> <TH>Repartidor</TH> <TH>Direccion</TH> <TH>No.Productos</TH> <TH>Cargo</TH>
                                                        </TR>
                                                        <div id="contenedor-ordenes">
                                                            ${ordenesTabla}
                                                        </div>   
                                                    </TABLE>
                                                    </div>`;
}

var miVentanaModal = document.getElementById("miVentanaModal");

// Abre la ventana modal
function abrirVentanaModalProceso(i) {
  miVentanaModal.style.display = "block";

    document.getElementById('miVentanaModal').innerHTML = ` <div class="modal-contenido">
                                                    <span class="cerrar">&times;</span>
                                                    <h2>Delivery details</h2>
                                                    <div class="contenedor-modal">
                                                        <div class="modal-info-ordenes">
                                                            <p><samp class="span-orden">Date:${enProceso[i].date}</samp> </p>
                                                            <p><span class="span-orden">Id:</span> ${enProceso[i]._id}</p>
                                                            <p><span class="span-orden">Location:</span> ${enProceso[i].direccion}</p>
                                                            <p><span class="span-orden">Number of products: </span> ${enProceso[i].envios.length}</p>
                                                            <p><span class="span-orden">Price: </span> $${enProceso[i].precio}</p>
                                                        </div>
                                                        <div class="modal-inf-cliente">
                                                            <h3>Customer</h3>
                                                            <p><i class="fa-solid fa-user"></i> ${enProceso[i].nombreCliente}</p>
                                                            <p><i class="fa-solid fa-id-card-clip"></i> ${enProceso[i].idCliente}</p>
                                                        </div>
                                                        <div class="modal-inf-repartidor">
                                                            <h3>Dealer</h3>
                                                            <p><i class="fa-solid fa-user"></i> ${enProceso[i].nombreRepartidor}</p>
                                                            <p><i class="fa-solid fa-id-card-clip"></i> ${enProceso[i].idRepartidor}</p>
                                                        </div>
                                                        <div class="botones">
                                                            
                                                            <div>
                                                                <button>Cancel</button>
                                                            </div>
                                                            <div>
                                                                <button>Update</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`;
}

// Cierra la ventana modal cuando se hace clic afuera de ella
window.onclick = function(event) {
  if (event.target == miVentanaModal) {
    miVentanaModal.style.display = "none";
  }
}

// Cierra la ventana modal cuando se hace clic en el botón de cerrar
var botonCerrar = document.getElementsByClassName("cerrar")[0];
botonCerrar.onclick = function() {
  miVentanaModal.style.display = "none";
}
