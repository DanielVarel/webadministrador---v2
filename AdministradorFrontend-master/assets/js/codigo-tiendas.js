
var empresas = [
    {
        id: "1234567",
        name: "Bigos", 
        email: "bigos@gmail.com",
        categoria: "comida",
        phoneNumber: "123456789",
    },{
        id: "2234568",
        name: "Pizza Hub", 
        categoria: "comida",
        email: "hub.pizaa@gmail.com", 
        phoneNumber: "123409987",
    }
];



function mostrarRepartidores(){
    let tabla = ``;
    let verificado = true;

    for(let i=0; i<empresas.length; i++){

        tabla += ` <TR class="detalles-tabla" onclick="abrirVentanaModal()">
                    <TD class="checkbox-tama"><div class="checkbox-apple"><input class="yep" id="check-apple" type="checkbox"><label for="check-apple"></label></div></TD><TD>${empresas[i].id}</TD><TD><p>${empresas[i].name}</p></TD><TD><p>${empresas[i].categoria}</p></TD><TD>${empresas[i].email}</TD> <TD>${empresas[i].phoneNumber}</TD>
                 </TR>`;                 
    }

    document.getElementById("seccion-repartidores").innerHTML = ` <div class="card">    
                                                                <TABLE BORDER>
                                                                    <TR class="detalles-tabla">
                                                                        <TH></TH><TH>ID</TH> <TH>Name</TH> <TH>Category</TH> <TH>Email</TH> <TH>Phone number</TH>
                                                                    </TR>
                                                                    ${tabla} 
                                                                </TABLE> 
                                                            </div>`;
}

mostrarRepartidores();


var miVentanaModal = document.getElementById("miVentanaModal");

// Abre la ventana modal
function abrirVentanaModal() {
  miVentanaModal.style.display = "block";
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


// para agragar una imagen al produco
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
