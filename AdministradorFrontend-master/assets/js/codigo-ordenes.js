function mostrarOrdenes(){
    document.getElementById("seccion-ordenes").style.display = "block";
    document.getElementById("seccion-entregas").style.display = "none";
    document.getElementById("seccion-cancelado").style.display = "none";

    document.getElementById("boton-ordenes").style.background = "#bfb9f6"
    document.getElementById("boton-entregas").style.background = "#fff"
    document.getElementById("boton-cacelados").style.background = "#fff"

    // obtenerOrdenes();

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
    fetch(`http://localhost:3000/client/order`, {
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

// obtenerOrdenes();

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
    fetch(`http://localhost:3000/client/order`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then((respuesta) => respuesta.json())
  .then(async (result) => {
    entregas = result;
    console.log(entregas);
    renderizarEntregas(entregas);
  }); 
}

function renderizarEntregas(entrega){
    let ordenesTabla =  ``;
    document.getElementById("seccion-entregas").innerHTML = ``;

    for(let i=0; i<entrega.length; i++){
        ordenesTabla += `<TR class="detalles-tabla" onclick="abrirVentanaModalEntregas(${i})">
                            <TD class="checkbox-tama"><div class="checkbox-apple"><input class="yep" id="check-apple" type="checkbox"><label for="check-apple"></label></div></TD><TD>${entregas[i].date}</TD> <TD>${entregas[i].id}</TD> <TD><div class="tabla-usuario" style="text-align: center;"><p>${entregas[i].client.name}</p></div></TD><TD><div class="tabla-repartidor" style="text-align: center;"><p>${entregas[i].dealer.name}</p></div></TD> <TD>${entregas[i].products.length}</TD><TD>$${entregas[i].total}</TD>                        
                        </TR>`;
    }

    

    document.getElementById("seccion-entregas").innerHTML += `
                                                    <div class="card">
                                                    <TABLE BORDER>
                                                        <TR>
                                                            <TH></TH><TH>Date</TH> <TH>Referencia</TH> <TH>Cliente</TH> <TH>Repartidor</TH> <TH>No.Productos</TH> <TH>Cargo</TH>
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
                                                              <p><span class="span-orden">Id:</span> ${entregas[i].id}</p>
                                                              <p><span class="span-orden">Number of products: </span> ${entregas[i].products.length}</p>
                                                              <p><span class="span-orden">Price: </span> $${entregas[i].total}</p>
                                                          </div>
                                                          <div class="modal-inf-cliente">
                                                              <h3>Customer</h3>
                                                              <p><i class="fa-solid fa-user"></i> ${entregas[i].client.name}</p>
                                                              <p><i class="fa-solid fa-id-card-clip"></i> ${entregas[i].client.id}</p>
                                                              <p><i class="fa-solid fa-envelope"></i> ${entregas[i].client.email}</p>
                                                          </div>
                                                          <div class="modal-inf-repartidor">
                                                              <h3>Dealer</h3>
                                                              <p><i class="fa-solid fa-user"></i> ${entregas[i].dealer.name}</p>
                                                              <p><i class="fa-solid fa-id-card-clip"></i> ${entregas[i].dealer.id}</p>
                                                              <p><i class="fa-solid fa-envelope"></i> ${entregas[i].dealer.email}</p>
                                                              <p><i class="fa-solid fa-phone"></i>${entregas[i].dealer.tel}</p>
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
    fetch(`http://localhost:3000/client/order/pending`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((respuesta) => respuesta.json())
      .then(async (result) => {
        enProceso = result;
        console.log(enProceso);
        renderizarEnCamino(enProceso);
      }); 
}


function renderizarEnCamino(enProces){
    let ordenesTabla =  ``;
    document.getElementById("seccion-cancelado").innerHTML = ``;

    for(let i=0; i<enProces.length; i++){
        ordenesTabla += `<TR class="detalles-tabla" onclick="abrirVentanaModalEntregas(${i})">
                            <TD class="checkbox-tama"><div class="checkbox-apple"><input class="yep" id="check-apple" type="checkbox"><label for="check-apple"></label></div></TD><TD>${enProces[i].date}</TD> <TD>${enProces[i].id}</TD> <TD><div class="tabla-usuario" style="text-align: center;"><p>${enProces[i].client.name}</p></div></TD><TD><div class="tabla-repartidor" style="text-align: center;"><p>${enProces[i].dealer.name}</p></div></TD> <TD>${enProces[i].products.length}</TD><TD>$${enProces[i].total}</TD>                        
                        </TR>`;
    }

    

    document.getElementById("seccion-entregas").innerHTML += `
                                                    <div class="card">
                                                    <TABLE BORDER>
                                                        <TR>
                                                            <TH></TH><TH>Date</TH> <TH>Referencia</TH> <TH>Cliente</TH> <TH>Repartidor</TH> <TH>No.Productos</TH> <TH>Cargo</TH>
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
                                                                <p><samp class="span-orden">Date:</samp> ${enProceso[i].date}</p>
                                                                <p><span class="span-orden">Id:</span> ${enProceso[i].id}</p>
                                                                <p><span class="span-orden">Number of products: </span> ${enProceso[i].products.length}</p>
                                                                <p><span class="span-orden">Price: </span> $${enProceso[i].total}</p>
                                                            </div>
                                                            <div class="modal-inf-cliente">
                                                                <h3>Customer</h3>
                                                                <p><i class="fa-solid fa-user"></i> ${enProceso[i].client.name}</p>
                                                                <p><i class="fa-solid fa-id-card-clip"></i> ${enProceso[i].client.id}</p>
                                                                <p><i class="fa-solid fa-envelope"></i> ${enProceso[i].client.email}</p>
                                                            </div>
                                                            <div class="modal-inf-repartidor">
                                                                <h3>Dealer</h3>
                                                                <p><i class="fa-solid fa-user"></i> ${enProceso[i].dealer.name}</p>
                                                                <p><i class="fa-solid fa-id-card-clip"></i> ${enProceso[i].dealer.id}</p>
                                                                <p><i class="fa-solid fa-envelope"></i> ${enProceso[i].dealer.email}</p>
                                                                <p><i class="fa-solid fa-phone"></i>${enProceso[i].dealer.tel}</p>
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
