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

        const options = document.getElementsByClassName("business");
        const node = options[0];

        changeBusinessOptions(0, node);
    }
    else if (mode == 1) {
        statsOptions.classList.add("inactive");
        businessOptions.classList.add("inactive");
        databaseOptions.classList.remove("inactive");
        
        selectMode.classList.remove("btn-positive");
        selectMode.classList.remove("btn-stats");
        selectMode.classList.add("btn-primary");
        console.log("BD");

        const options = document.getElementsByClassName("database");
        const node = options[0];

        changeDBOptions(0, node);
    }
    else if (mode == 2) {
        databaseOptions.classList.add("inactive");
        businessOptions.classList.add("inactive");
        statsOptions.classList.remove("inactive");

        selectMode.classList.remove("btn-positive");
        selectMode.classList.remove("btn-primary");
        selectMode.classList.add("btn-stats");
        console.log("Stats");

        const options = document.getElementsByClassName("stats");
        const node = options[0];

        changeStatOptions(0, node);
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

    node.classList.add("selected");
    switch(option){
        case 0: {
            console.log("Concesionarios");

            databaseAgencys();
        }break;

        case 1: {
            console.log("Encargados");

            databaseChiefs();
        }break;

        case 2: {
            console.log("Servicios");

            databaseServices();
        }break;

        case 3: {
            console.log("Trabajadores");

            databaseWorkers();
        }break;

        case 4: {
            console.log("Cargos");

            databaseOccupations();
        }break;

        case 5: {
            console.log("Especializaciones");

            databaseSpecializations();
        }break;

        case 6: {
            console.log("Modelos");

            databaseModels();
        }break;

        case 7: {
            console.log("Mantenimientos recomendados");

            databaseRecomendedMaintenances();
        }break;

        case 8: {
            console.log("Vehiculos");

            databaseVehicules();
        }break;

        case 9: {
            console.log("Clientes");

            databaseClients();
        }break;

        case 10: {
            console.log("Productos");

            databaseProducts();
        }break;

        case 11: {
            console.log("Bancos");

            databaseBanks();
        }break;

        case 12: {
            console.log("Ciudades");

            databaseCities();
        }break;

        case 13: {
            console.log("Estados");

            databaseStates();
        }break;

        case 14: {
            console.log("Ordenes");

            databaseOrders();
        }break;

        case 15: {
            console.log("Reservas");

            databaseReserves();
        }break;

        case 16: {
            console.log("Facturas");

            databaseChecks();
        }break;
    }
}

function changeStatOptions(option, node){
    const li = document.querySelector("#stats li.selected");
    li.classList.remove("selected");
    node.classList.add("selected");
    switch(option){
        case 0: {
            console.log("Modelos de Vehiculos");

            statModels();
        }break;

        case 1: {
            console.log("Personal Mecanico");

            statWorkers();
        }break;

        case 2: {
            console.log("Clientes Frecuentes");

            statFrecuentClients();
        }break;

        case 3: {
            console.log("Productos");
            
            statProducts();
        }break;

        case 4: {
            console.log("Servicios");
            
            statServices();
        }break;

        case 5: {
            console.log("Servicios por Vehiculos");

            statServicePerVehicules();
        }break;

        case 6: {
            console.log("Agencias");
            
            statAgencys();
        }break;

        case 7: {
            console.log("Reservas no usadas");

            statUnusedReserves();
        }break;

        case 8: {
            console.log("Programas de Mantenimiento?");

            statMaintenancePrograms();
        }break;
    }    
}

