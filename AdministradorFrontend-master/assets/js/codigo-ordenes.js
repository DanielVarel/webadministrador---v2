function mostrarOrdenes(){
    document.getElementById("seccion-ordenes").style.display = "block";
    document.getElementById("seccion-entregas").style.display = "none";
    document.getElementById("seccion-cancelado").style.display = "none";

    document.getElementById("boton-ordenes").style.background = "#bfb9f6"
    document.getElementById("boton-entregas").style.background = "#fff"
    document.getElementById("boton-cacelados").style.background = "#fff"

    renderizarOrdenes();

}

function mostrarEntegas(){
    document.getElementById("seccion-ordenes").style.display = "none";
    document.getElementById("seccion-entregas").style.display = "block";
    document.getElementById("seccion-cancelado").style.display = "none";

    document.getElementById("boton-ordenes").style.background = "#fff"
    document.getElementById("boton-entregas").style.background = "#bfb9f6"
    document.getElementById("boton-cacelados").style.background = "#fff"

    renderizarEntregas();
}

function mostrarCanceladas(){
    document.getElementById("seccion-ordenes").style.display = "none";
    document.getElementById("seccion-entregas").style.display = "none";
    document.getElementById("seccion-cancelado").style.display = "block";

    document.getElementById("boton-ordenes").style.background = "#fff"
    document.getElementById("boton-entregas").style.background = "#fff"
    document.getElementById("boton-cacelados").style.background = "#bfb9f6"

    renderizarCancelados();
}


var ordenes = [
    {
        date: "1/23/2023, 10:34:21",
        id: "1233552",
        imgCustomer: "assets/img/usuario1.jpeg",
        nameCustomer: "Daniel Avila",
        imgDealers: "assets/img/repartidor1.jpeg",
        nameDealers: "Javier Perez",
        direccion: "Tegucigalpa, Los Pinos",
        quantityProducts:  "2",
        price: "$45.4"
    },
    {
        date: "1/23/2023, 10:34:21",
        id: "1233552",
        imgCustomer: "assets/img/usuario1.jpeg",
        nameCustomer: "Daniel Avila",
        imgDealers: "assets/img/repartidor1.jpeg",
        nameDealers: "Javier Perez",
        direccion: "Tegucigalpa, Los Pinos",
        quantityProducts:  "2",
        price: "$45.4"
    },
    {
        date: "1/23/2023, 10:34:21",
        id: "1233552",
        imgCustomer: "assets/img/usuario1.jpeg",
        nameCustomer: "Daniel Avila",
        imgDealers: "assets/img/repartidor1.jpeg",
        nameDealers: "Javier Perez",
        direccion: "Tegucigalpa, Los Pinos",
        quantityProducts:  "2",
        price: "$45.4"
    }
]



function renderizarOrdenes(){
    let ordenesTabla =  ``;
    document.getElementById("seccion-ordenes").innerHTML = ``

    for(let i=0; i<ordenes.length; i++){
        ordenesTabla += `<TR class="detalles-tabla" onclick="abrirVentanaModal()"s>
                            <TD class="checkbox-tama"><div class="checkbox-apple"><input id="check-apple" type="checkbox"><label for="check-apple"></label></div></TD><TD>${ordenes[i].date}</TD> <TD>${ordenes[i].id}</TD> <TD><div class="tabla-usuario"><img class="img-usuario" src="${ordenes[i].imgCustomer}"><p>${ordenes[i].nameCustomer}</p></div></TD><TD><div class="tabla-repartidor"><img src="${ordenes[i].imgDealers}" class="img-repartidor"><p>${ordenes[i].nameDealers}</p></div></TD><TD>${ordenes[i].direccion}</TD> <TD>${ordenes[i].quantityProducts}</TD><TD>${ordenes[i].price}</TD>
                        </TR>`;
    }

    

    document.getElementById("seccion-ordenes").innerHTML += `
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

renderizarOrdenes();


var entregas = [
    {
        date: "1/23/2023, 10:34:21",
        id: "1233552",
        imgCustomer: "assets/img/usuario1.jpeg",
        nameCustomer: "Daniel Avila",
        imgDealers: "assets/img/repartidor1.jpeg",
        nameDealers: "Javier Perez",
        direccion: "Tegucigalpa, Los Pinos",
        quantityProducts:  "2",
        price: "$45.4"
    },
    {
        date: "1/23/2023, 10:34:21",
        id: "1233552",
        imgCustomer: "assets/img/usuario1.jpeg",
        nameCustomer: "Daniel Avila",
        imgDealers: "assets/img/repartidor1.jpeg",
        nameDealers: "Javier Perez",
        direccion: "Tegucigalpa, Los Pinos",
        quantityProducts:  "2",
        price: "$45.4"
    },
    {
        date: "1/23/2023, 10:34:21",
        id: "1233552",
        imgCustomer: "assets/img/usuario1.jpeg",
        nameCustomer: "Daniel Avila",
        imgDealers: "assets/img/repartidor1.jpeg",
        nameDealers: "Javier Perez",
        direccion: "Tegucigalpa, Los Pinos",
        quantityProducts:  "2",
        price: "$45.4"
    }
]


function renderizarEntregas(){
    let ordenesTabla =  ``;
    document.getElementById("seccion-entregas").innerHTML = ``;

    for(let i=0; i<entregas.length; i++){
        ordenesTabla += `<TR class="detalles-tabla" onclick="abrirVentanaModal()">
                            <TD class="checkbox-tama"><div class="checkbox-apple"><input class="yep" id="check-apple" type="checkbox"><label for="check-apple"></label></div></TD><TD>${entregas[i].date}</TD> <TD>${entregas[i].id}</TD> <TD><div class="tabla-usuario"><img class="img-usuario" src="${entregas[i].imgCustomer}"><p>${entregas[i].nameCustomer}</p></div></TD><TD><div class="tabla-repartidor"><img src="${entregas[i].imgDealers}" class="img-repartidor"><p>${entregas[i].nameDealers}</p></div></TD><TD>${entregas[i].direccion}</TD> <TD>${entregas[i].quantityProducts}</TD><TD>${entregas[i].price}</TD>
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

var ordenesCanceladas = [
    {
        date: "1/23/2023, 10:34:21",
        id: "1233552",
        imgCustomer: "assets/img/usuario1.jpeg",
        nameCustomer: "Daniel Avila",
        imgDealers: "assets/img/repartidor1.jpeg",
        nameDealers: "Javier Perez",
        direccion: "Tegucigalpa, Los Pinos",
        quantityProducts:  "2",
        price: "$45.4"
    }
]

function renderizarCancelados(){
    let ordenesTabla =  ``;
    document.getElementById("seccion-cancelado").innerHTML = ``;

    for(let i=0; i<ordenesCanceladas.length; i++){
        ordenesTabla += `<TR class="detalles-tabla" onclick="abrirVentanaModal()">
                            <TD class="checkbox-tama"><div class="checkbox-apple"><input class="yep" id="check-apple" type="checkbox"><label for="check-apple"></label></div></TD><TD>${ordenesCanceladas[i].date}</TD> <TD>${ordenesCanceladas[i].id}</TD> <TD><div class="tabla-usuario"><img class="img-usuario" src="${ordenesCanceladas[i].imgCustomer}"><p>${ordenesCanceladas[i].nameCustomer}</p></div></TD><TD><div class="tabla-repartidor"><img src="${ordenesCanceladas[i].imgDealers}" class="img-repartidor"><p>${ordenesCanceladas[i].nameDealers}</p></div></TD><TD>${ordenesCanceladas[i].direccion}</TD> <TD>${ordenesCanceladas[i].quantityProducts}</TD><TD>${ordenesCanceladas[i].price}</TD>
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
