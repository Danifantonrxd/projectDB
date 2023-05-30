const mainPane = document.getElementById("main-pane");

function businessReserve(){
    const html = `
    <form class="form-sm">
        <h1>Reservar un servicio</h1>
        <div class="form-group">
            <label>Cliente</label>
            <div class="form-grid">
                <input type="search" class="form-control" placeholder="Cédula">
                <button type="button" class="btn btn-default btn-form btn-large">Buscar</button>
            </div>

            <div class="form-grid">
                <div class="form-info not-found">Daniel Rodriguez</div>
            
                <button type="button" class="btn btn-default btn-form btn-large">Registrar</button>
            </div>
        </div>

        <div class="form-group">
            <label for="">Servicios</label>
            <div class="error-message">Debe seleccionar un servicio</div>
            <div class="select-service">
                <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                    <option value="0">Seleccione ...</option>
                    <option value="1">Cambio de aceite</option>
                </select>
            </div>
            <div class="quit-select">Quitar servicio</div>
            <div class="add-select" href="/">Agregar otro servicio</div>
        </div>

        <div class="form-group">
            <label>Vehiculo</label>
            <div class="form-grid">
                <input type="search" class="form-control" placeholder="Placa">
                <button type="button" class="btn btn-default btn-form btn-large">Buscar</button>
            </div>

            <div class="form-grid">
                <div class="form-info found">Daniel Rodriguez</div>
            
                <button type="button" class="btn btn-default btn-form btn-large">Registrar</button>
            </div>
        </div>

        <div class="form-group">
            <label for="">Modelo de Vehiculo</label>
            <div class="error-message inactive">Debe seleccionar un modelo</div>
            <select id="car-model" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Porche</option>
            </select>
        </div>
    </form>
    `;

    mainPane.innerHTML = html;
}

function businessOrder(){
    mainPane.innerHTML = "";
}

function businessCheck(){
    mainPane.innerHTML = "";
}