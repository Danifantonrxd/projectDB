const selectMode = document.getElementById("mode");
const selectAgency = document.getElementById("agency");

selectMode.addEventListener("change", changeMode);
selectAgency.addEventListener("change", changeAgency);

function changeMode(){
    const mode = selectMode.selectedIndex;
    if(mode == 0){
        selectMode.classList.remove("btn-primary");
        selectMode.classList.add("btn-positive");
        console.log("Negocio");
    }
    else if (mode == 1) {
        selectMode.classList.remove("btn-positive");
        selectMode.classList.add("btn-primary");
        console.log("BD");
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