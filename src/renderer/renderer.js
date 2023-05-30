//Selects
const selectMode = document.getElementById("mode");
const selectAgency = document.getElementById("agency");

selectMode.addEventListener("change", changeMode);
selectAgency.addEventListener("change", changeAgency);

//Options
const businessOptions = document.getElementById("business");
const databaseOptions = document.getElementById("database");
const statsOptions = document.getElementById("stats");

function addOptionEvents(className){
    const options = document.getElementsByClassName(className);

    for(let i = 0; i < options.length; i++){
        options[i].addEventListener("click", () => {
            if(className == "business"){
                return changeBusinessOptions(i, options[i]);
            }
            else if(className == "database"){
                return changeDBOptions(i, options[i])
            }
            else if(className == "stats"){
                return changeStatOptions(i, options[i])
            }
        });
    }
}

addOptionEvents("business");
addOptionEvents("database");
addOptionEvents("stats");

function changeMode(){
    const mode = selectMode.selectedIndex;
    if(mode == 0){
        databaseOptions.classList.add("inactive");
        statsOptions.classList.add("inactive");
        businessOptions.classList.remove("inactive");

        selectMode.classList.remove("btn-primary");
        selectMode.classList.remove("btn-stats");
        selectMode.classList.add("btn-positive");

        alert("Negocio");
        console.log("Negocio");
    }
    else if (mode == 1) {
        statsOptions.classList.add("inactive");
        businessOptions.classList.add("inactive");
        databaseOptions.classList.remove("inactive");
        
        selectMode.classList.remove("btn-positive");
        selectMode.classList.remove("btn-stats");
        selectMode.classList.add("btn-primary");
        console.log("BD");
    }
    else if (mode == 2) {
        databaseOptions.classList.add("inactive");
        businessOptions.classList.add("inactive");
        statsOptions.classList.remove("inactive");

        selectMode.classList.remove("btn-positive");
        selectMode.classList.remove("btn-primary");
        selectMode.classList.add("btn-stats");
        console.log("Stats");
    }
}

function changeAgency(){
    const agencyName = document.getElementById("agency-name");
    const agency = selectAgency.selectedIndex;

    if(agency == 0){
        agencyName.classList.remove("btn-warning");
        agencyName.classList.add("btn-negative");
    }
    else {
        agencyName.classList.remove("btn-negative");
        agencyName.classList.add("btn-warning");
    }
}

function changeBusinessOptions(option, node){
    const li = document.querySelector("#business li.selected");
    li.classList.remove("selected");
    node.classList.add("selected");
    switch(option){
        case 0: {
            console.log("Reserva");

            businessReserve();
        }break;

        case 1: {
            console.log("Orden");

            businessOrder();
        }break;

        case 2: {
            console.log("Factura");

            businessCheck();
        }break;
    }
}

function changeDBOptions(option, node){
    const li = document.querySelector("#database li.selected");
    li.classList.remove("selected");
    switch(option){
        case 0: {
            console.log("Concesionarios");
            node.classList.add("selected");
        }break;

        case 1: {
            console.log("Servicios");
            node.classList.add("selected");
        }break;

        case 2: {
            console.log("Trabajadores");
            node.classList.add("selected");
        }break;

        case 3: {
            console.log("Ordenes");
            node.classList.add("selected");
        }break;

        case 4: {
            console.log("Reservas");
            node.classList.add("selected");
        }break;

        case 5: {
            console.log("Modelos");
            node.classList.add("selected");
        }break;

        case 6: {
            console.log("Vehiculos");
            node.classList.add("selected");
        }break;

        case 7: {
            console.log("Clientes");
            node.classList.add("selected");
        }break;

        case 8: {
            console.log("Productos");
            node.classList.add("selected");
        }break;

        case 9: {
            console.log("Facturas");
            node.classList.add("selected");
        }break;
    }
}

function changeStatOptions(option, node){
    const li = document.querySelector("#stats li.selected");
    li.classList.remove("selected");
    switch(option){
        case 0: {
            console.log("Modelos de Vehiculos");
            node.classList.add("selected");
        }break;

        case 1: {
            console.log("Personal Mecanico");
            node.classList.add("selected");
        }break;

        case 2: {
            console.log("Clientes Frecuentes");
            node.classList.add("selected");
        }break;

        case 3: {
            console.log("Productos");
            node.classList.add("selected");
        }break;

        case 4: {
            console.log("Servicios");
            node.classList.add("selected");
        }break;

        case 5: {
            console.log("Servicios por Vehiculos");
            node.classList.add("selected");
        }break;

        case 6: {
            console.log("Agencias");
            node.classList.add("selected");
        }break;

        case 7: {
            console.log("Reservas no usadas");
            node.classList.add("selected");
        }break;

        case 8: {
            console.log("Programas de Mantenimiento?");
            node.classList.add("selected");
        }break;
    }    
}

