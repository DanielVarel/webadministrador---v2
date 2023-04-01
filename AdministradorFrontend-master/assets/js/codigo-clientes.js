
var usuarioRegistrados = [
    {
        id: "1234567",
        name: "Daniel Avila", 
        email: "daniel.avila.a.v.2000@gmail.com",
        password: "12",
        phoneNumber: "123456789",
        verificado: true 
    },{
        id: "2234568",
        name: "Alejandro Avila", 
        email: "alejandro.2000@gamil.com",
        password: "23",
        phoneNumber: "123409987",
        verificado:  false
    }
];



function mostrarRepartidores(){
    let tabla = ``;
    let verificado = true;

    for(let i=0; i<usuarioRegistrados.length; i++){

        tabla += ` <TR class="detalles-tabla" onclick="abrirVentanaModal()">
                    <TD class="checkbox-tama"><div class="checkbox-apple"><input class="yep" id="check-apple" type="checkbox"><label for="check-apple"></label></div></TD><TD>${usuarioRegistrados[i].id}</TD><TD><p>${usuarioRegistrados[i].name}</p></TD><TD>${usuarioRegistrados[i].email}</TD> <TD>${usuarioRegistrados[i].phoneNumber}</TD><TD class="botones" id="botones"><i class="fa-solid fa-check"></i></TD>
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
var botonCerrar = document.getElementsByClassName("cerrar")[0];
botonCerrar.onclick = function() {
  miVentanaModal.style.display = "none";
}
