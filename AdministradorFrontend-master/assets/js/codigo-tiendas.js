
var tiendas = []

fetch(`http://localhost:3000/client/allStores`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then((respuesta) => respuesta.json())
  .then(async (result) => {
    tiendas = result;
    console.log(tiendas);
    mostrarTiendas(tiendas);
}); 

function mostrarTiendas(stores){
    let tabla = ``;
  
    for(let i=0; i<stores.length; i++){

        tabla += ` <TR class="detalles-tabla" onclick="abrirVentanaModal(${i})">
                    <TD class="checkbox-tama"><div class="checkbox-apple"><input class="yep" id="check-apple" type="checkbox"><label for="check-apple"></label></div></TD><TD>${stores[i]._id}</TD><TD><p>${stores[i].name}</p></TD><TD><p>${stores[i].idCategoria}</p></TD><TD><p>${stores[i].productos.length}</p></TD>
                 </TR>`;                 
    }

    document.getElementById("seccion-repartidores").innerHTML = ` <div class="card">    
                                                                <TABLE BORDER>
                                                                    <TR class="detalles-tabla">
                                                                        <TH></TH><TH>ID</TH> <TH>Name</TH> <TH>Id Category</TH> <TH>Quantity of Products</TH>
                                                                    </TR>
                                                                    ${tabla} 
                                                                </TABLE> 
                                                            </div>`;
}

var miVentanaModal = document.getElementById("miVentanaModal");

// Abre la ventana modal
function abrirVentanaModal(id) {
  miVentanaModal.style.display = "block";
  var produtos = []

  for(let i=0; i<tiendas[id].productos.length; i++){
      produtos +=  ` <div class="grid-item">
                      <h2>${tiendas[id].productos[i].name}</h2>
                      <img src="${tiendas[id].productos[i].imagen}" alt="">
                      <p>${tiendas[id].productos[i].descripcion}</p>
                      <p>$10</p>
                  </div>`
  }



  document.getElementById('miVentanaModal').innerHTML = `<div class="modal-contenido">
                                                        <span class="cerrar">&times;</span>
                                                          <h2>Company details</h2>
                                                          <div class="contenedor-modal">
                                                              <div class="modal-img">
                                                                  <img src="${tiendas[id].imagen}" alt="">
                                                                  <div class="modal-inf">
                                                                      <p><i class="fa-solid fa-building"></i> ${tiendas[id].name}</p>
                                                                      <p><i class="fa-solid fa-id-card-clip"></i> ${tiendas[id]._id}</p>
                                                                  </div>
                                                                  <div class="botones">
                                                                      <div>
                                                                          <button onclick="abrirVentanaModalProducto()">Add product</button>
                                                                      </div>
                                                                      <div>
                                                                          <button>Delete</button>
                                                                      </div>
                                                                      <div>
                                                                          <button>Update</button>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="modal-productos">
                                                                  <div class="grid-container">

                                                                     ${produtos}
                                                                     
                                                                    </div>
                                                                    
                                                              </div>
                                                              
                                                          </div>
                                                      </div>`


}

// Cierra la ventana modal cuando se hace clic afuera de ella
window.onclick = function(event) {
  if (event.target == miVentanaModal) {
    miVentanaModal.style.display = "none";
  }
}

// Cierra la ventana modal cuando se hace clic en el botón de cerrar
var botonCerrar1 = document.getElementsByClassName("cerrar")[0];
botonCerrar1.onclick = function() {
  miVentanaModal.style.display = "none";
}

// modal  para agragar producto

var miVentanaModalProducto = document.getElementById("miVentanaModalProducto");

// Abre la ventana modal
function abrirVentanaModalProducto() {
  miVentanaModalProducto.style.display = "block";
  console.log('abrir modal');
}

// Cierra la ventana modal cuando se hace clic afuera de ella
window.onclick = function(event) {
  if (event.target == miVentanaModalProducto) {
    miVentanaModalProducto.style.display = "none";
  }
}

// Cierra la ventana modal cuando se hace clic en el botón de cerrar
var botonCerrar = document.getElementsByClassName("cerrar-1")[0];
botonCerrar.onclick = function() {
  miVentanaModalProducto.style.display = "none";
}

// modal  para agragar empresa

var miVentanaModalEmpresa = document.getElementById("miVentanaModalEmpresa");

// Abre la ventana modal
function abrirVentanaModalEmpresa() {
  miVentanaModalEmpresa.style.display = "block";
  console.log('abrir modal');
}

// Cierra la ventana modal cuando se hace clic afuera de ella
window.onclick = function(event) {
  if (event.target == miVentanaModal) {
    miVentanaModal.style.display = "none";
  }
  if (event.target == miVentanaModalProducto) {
    miVentanaModalProducto.style.display = "none";
  }
  if (event.target == miVentanaModalEmpresa) {
    miVentanaModalEmpresa.style.display = "none";
  }
}

// Cierra la ventana modal cuando se hace clic en el botón de cerrar
var botonCerrar = document.getElementsByClassName("cerrar-2")[0];
botonCerrar.onclick = function() {
  miVentanaModalEmpresa.style.display = "none";
}


// para agragar una imagen al producto
const inputImagen = document.getElementById("imagen");
const imagenPreview = document.getElementById("preview");

inputImagen.addEventListener("change", function() {
  const reader = new FileReader();

  reader.onload = function() {
    imagenPreview.src = reader.result;
    imagenPreview.style.display = "block";
  };

  reader.readAsDataURL(this.files[0]);
});
