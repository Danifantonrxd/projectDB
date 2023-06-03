const mainPane = document.getElementById("main-pane");

/*----------------------------------------------------*/
/* Business                                           */
/*----------------------------------------------------*/

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

        <div>
            <button type="button" class="btn btn-primary btn-large btn-send">Registrar</button>
        </div>
    </form>
    `;

    mainPane.innerHTML = html;
}

function businessOrder(){
    const html = `
    <form class="form-sm">
        <h1>Crear Orden de Servicio</h1>

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
            <label for="">Servicios</label>
            <div class="error-message">Debe seleccionar un servicio</div>
            <div class="error-message">Hacer que con el codigo de la reserva funcione esto</div>
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
            <label for="">Analista</label>
            <div class="error-message">Debe seleccionar un analista</div>
            <div class="select-service">
                <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                    <option value="0">Seleccione ...</option>
                    <option value="1">Juan López</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label for="">Mecánico</label>
            <div class="error-message">Debe seleccionar un mecánico</div>
            <div class="select-service">
                <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                    <option value="0">Seleccione ...</option>
                    <option value="1">Pedro Pérez</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label>Consideraciones</label>
            <textarea class="form-control" rows="3"></textarea>
        </div>

        <div>
            <button type="button" class="btn btn-primary btn-large btn-send">Registrar</button>
        </div>
    </form>
    `;

    mainPane.innerHTML = html;
}

function businessCheck(){
    const html = `
<form class="form-sm">
    <h1>Facturar Servicios</h1>

    <div class="form-group">
        <label>Orden de Servicio</label>
        <div class="error-message">Debe ingresar un numero de orden</div>
        <div class="form-grid">
            <input type="search" class="form-control" placeholder="Cédula">
            <button type="button" class="btn btn-default btn-form btn-large">Buscar</button>
        </div>

        <div class="group-info">
            <div class="form-info not-found">Daniel Rodriguez</div>

            <div class="inactive form-info form-info-extended found">Detalles de Servicios</div>

            <div class="inactive form-info form-info-extended found">Productos Utilizados</div>

            <div class="table-info">
                <label class="">Detalle de Servicios</label>
                <table class="table-striped">
                    <thead>
                        <tr>
                            <th>Servicio</th>
                            <th>Precio Unitario</th>
                            <th>Cantidad</th>
                            <th>Sub-total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cambio de Aceite</td>
                            <td>25$</td>
                            <td>2</td>
                            <td>50$</td>
                        </tr>
                        <tr>
                            <td>Pulir carroceria</td>
                            <td>400$</td>
                            <td>1</td>
                            <td>400$</td>
                        </tr>
                        <tr>
                            <td>Instalar sistema de gas</td>
                            <td>1200$</td>
                            <td>1</td>
                            <td>1200$</td>
                        </tr>
                        <tr>
                            <td>Lavado</td>
                            <td>20$</td>
                            <td>1</td>
                            <td>20$</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="bold">1670$</td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio Unitario</th>
                            <th>Cantidad</th>
                            <th>Sub-total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aceite 2T</td>
                            <td>5$</td>
                            <td>6</td>
                            <td>30$</td>
                        </tr>
                        <tr>
                            <td>Pulidor</td>
                            <td>100$</td>
                            <td>3</td>
                            <td>300$</td>
                        </tr>
                        <tr>
                            <td>Bombonas</td>
                            <td>800$</td>
                            <td>1</td>
                            <td>800$</td>
                        </tr>
                        <tr>
                            <td>Champu</td>
                            <td>5$</td>
                            <td>1</td>
                            <td>5$</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="bold">1135$</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th class="bold">Total</th>
                            <th class="bold">2805$</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>

        <div class="form-group">
            <label for="">Modalidad de Pago</label>
            <div class="error-message">Debe seleccionar una modalidad</div>
            <div class="select-service">
                <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                    <option value="0">Seleccione ...</option>
                    <option value="1">Transferencia</option>
                </select>
                <div class="quit-select">Quitar modalidad</div>
                <div class="add-select">Agregar otra modalidad</div>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label>Monto pagado</label>
        <div class="error-message">Debe ingresar un monto</div>
        <input type="number" class="form-control" placeholder="Monto $">
    </div>

    <div class="form-group">
        <label>Numero de la tarjeta</label>
        <div class="error-message">Debe ingresar una tarjeta</div>
        <input type="number" class="form-control" placeholder="Tarjeta">
    </div>

    <div class="form-group">
        <label for="">Banco Usado</label>
        <div class="error-message">Debe seleccionar un Banco</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Transferencia</option>
            </select>
        </div>
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Generar Factura</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

/*----------------------------------------------------*/
/* Database                                           */
/*----------------------------------------------------*/

function databaseAgencys(){
    const html = `
<form class="form-sm">
    <h1>Registrar Concesionario</h1>

    <div class="form-group">
        <label>RIF</label>
        <div class="error-message">Debe ingresar un RIF válido</div>
        <input type="number" class="form-control" placeholder="Nro RIF">
    </div>

    <div class="form-group">
        <label>Razón Social</label>
        <div class="error-message">Debe ingresar una razon social</div>
        <input type="text" class="form-control" placeholder="Razon social">
    </div>

    <div class="form-group">
        <label for="">Estado</label>
        <div class="error-message">Debe seleccionar un estado</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Bolivar</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label for="">Ciudad</label>
        <div class="error-message">Debe seleccionar una ciudad</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Guayana</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label for="">Encargado</label>
        <div class="error-message">Debe seleccionar un encargado</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">30001938 Daniel Rodriguez</option>
                <option value="1">9949295 Orlando Rodriguez</option>
            </select>
        </div>
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Concesionario</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseChiefs(){
    const html = `
<form class="form-sm">
    <h1>Registrar Encargado</h1>

    <div class="form-group">
        <label>Cédula</label>
        <div class="error-message">Debe ingresar una cédula</div>
        <input type="number" class="form-control" placeholder="cédula">
    </div>

    <div class="form-group">
        <label>Nombre Completo</label>
        <div class="error-message">Debe ingresar un nombre</div>
        <input type="text" class="form-control" placeholder="nombre">
    </div>

    <div class="form-group">
        <label>Dirección</label>
        <div class="error-message">Debe ingresar una dirección</div>
        <input type="text" class="form-control" placeholder="dirección">
    </div>

    <div class="form-group">
        <label>Telefono Principal</label>
        <div class="error-message">Debe ingresar un telefono</div>
        <input type="text" class="form-control" placeholder="telefono">
    </div>

    <div class="form-group">
        <label>Telefono Secundario</label>
        <div class="error-message">Debe ingresar un telefono</div>
        <input type="text" class="form-control" placeholder="telefono">
    </div>

    <div class="form-group">
        <label>Email</label>
        <div class="error-message">Debe ingresar un email</div>
        <input type="text" class="form-control" placeholder="email">
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Encargado</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseServices(){
    const html = `
<form class="form-sm">
    <h1>Registrar Servicio</h1>

    <div class="form-group">
        <label>Nombre</label>
        <div class="error-message">Debe ingresar un nombre</div>
        <div class="error-message">Ese servicio ya existe</div>
        <input type="text" class="form-control" placeholder="nombre del servicio">
    </div>

    <div class="form-group">
        <label>Descripción</label>
        <div class="error-message">Debe ingresar una descripción</div>
        <textarea class="form-control" rows="3"></textarea>
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Servicio</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseServiceActivities(){
    const html = `
<form class="form-sm">
    <h1>Registrar Actividad de Servicio</h1>

    <div class="form-group">
        <label for="">Servicio</label>
        <div class="error-message">Debe seleccionar un servicio</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Cambio de aceite</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label>Descripción</label>
        <div class="error-message">Debe ingresar una descripción</div>
        <textarea class="form-control" rows="3"></textarea>
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Actividad</button>
    </div>
</form>    
    `;

    mainPane.innerHTML = html;
}

function databaseServiceOffered(){
    const html = `
<form class="form-sm">
    <h1>Registrar Servicio Ofrecido</h1>

    <div class="form-group">
        <label for="">Servicio</label>
        <div class="error-message">Debe seleccionar un servicio</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Cambio de Aceite</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label>Costo Hora / Hombre</label>
        <div class="error-message">Debe ingresar una ciudad</div>
        <input type="number" class="form-control" placeholder="coste">
    </div>

    <div class="form-group">
        <label for="">Coordinador</label>
        <div class="error-message">Debe seleccionar un coodinador</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">30012654 Maria Peña</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label>Tiempo de Espera</label>
        <div class="error-message">Debe ingresar un Tiempo</div>
        <input type="number" class="form-control" placeholder="Número de dias">
    </div>

    <div class="form-group">
        <label>Capacidad</label>
        <div class="error-message">Debe ingresar una capacidad</div>
        <input type="number" class="form-control" placeholder="Número de vehiculos">
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Servicio</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseWorkers(){
    const html = `
<form class="form-sm">
    <h1>Registrar Trabajador</h1>

    <div class="form-group">
        <label>Cédula</label>
        <div class="error-message">Debe ingresar una cédula</div>
        <input type="number" class="form-control" placeholder="cédula">
    </div>

    <div class="form-group">
        <label>Nombre Completo</label>
        <div class="error-message">Debe ingresar un nombre</div>
        <input type="text" class="form-control" placeholder="nombre">
    </div>

    <div class="form-group">
        <label>Dirección</label>
        <div class="error-message">Debe ingresar una dirección</div>
        <input type="text" class="form-control" placeholder="dirección">
    </div>

    <div class="form-group">
        <label>Telefono Principal</label>
        <div class="error-message">Debe ingresar un telefono</div>
        <input type="text" class="form-control" placeholder="telefono">
    </div>

    <div class="form-group">
        <label for="">Cargo Ocupado</label>
        <div class="error-message">Debe seleccionar un cargo</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">LavaCarros Principal</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label>Sueldo</label>
        <div class="error-message">Debe ingresar un sueldo</div>
        <input type="number" class="form-control" placeholder="sueldo">
    </div>

    <div class="form-group">
        <label for="">Especializaciones</label>
        <div class="error-message">Debe seleccionar una especilización</div>
        <div class="error-message">No puede repetir la especilización</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Cambio de aceite</option>
            </select>
        </div>
        <div class="quit-select">Quitar especilización</div>
        <div class="add-select" href="/">Agregar otra especilización</div>
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Trabajador</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseOccupations(){
    const html = `
<form class="form-sm">
    <h1>Registrar Cargo</h1>

    <div class="form-group">
        <label>Nombre</label>
        <div class="error-message">Debe ingresar un nombre</div>
        <div class="error-message">Ese cargo ya existe</div>
        <input type="text" class="form-control" placeholder="nombre del cargo">
    </div>

    <div class="form-group">
        <label>Descripción</label>
        <div class="error-message">Debe ingresar una descripción</div>
        <textarea class="form-control" rows="3"></textarea>
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Cargo</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseSpecializations(){
    const html = `
<form class="form-sm">
    <h1>Registrar Especialización</h1>

    <div class="form-group">
        <label>Nombre</label>
        <div class="error-message">Debe ingresar un nombre</div>
        <div class="error-message">Esa especialización ya existe</div>
        <input type="text" class="form-control" placeholder="nombre de la especialización">
    </div>

    <div class="form-group">
        <label>Descripción</label>
        <div class="error-message">Debe ingresar una descripción</div>
        <textarea class="form-control" rows="3"></textarea>
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Especialización</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseModels(){
    const html = `
<form class="form-sm">
    <h1>Registrar Modelo de Vehiculo</h1>

    <div class="form-group">
        <label>Nombre</label>
        <div class="error-message">Debe ingresar un nombre</div>
        <input type="text" class="form-control" placeholder="nombre">
    </div>

    <div class="form-group">
        <label>Descripción</label>
        <textarea class="form-control" rows="3"></textarea>
    </div>

    <div class="form-group">
        <label>Cantidad de puestos</label>
        <div class="error-message">Debe ingresar una cantidad</div>
        <input type="number" class="form-control" placeholder="cantidad">
    </div>

    <div class="form-group">
        <label>Peso en Kg</label>
        <div class="error-message">Debe ingresar un peso</div>
        <input type="number" class="form-control" placeholder="peso">
    </div>

    <div class="form-group">
        <label for="">Tipo de aceite</label>
        <div class="error-message">Debe seleccionar un tipo</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Sintetico 4T</option>
                <option value="2">Semisintetico 2T</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label for="">Tipo de aceite de la caja</label>
        <div class="error-message">Debe seleccionar un tipo</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Sintetico 8T</option>
                <option value="2">Semisintetico 12T</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label for="">Tipo de refrigerante</label>
        <div class="error-message">Debe seleccionar un tipo</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Con sal</option>
                <option value="2">Sin sal</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label>Gasolina Recomendada ( Octanaje )</label>
        <div class="error-message">Debe ingresar un peso</div>
        <input type="number" class="form-control" placeholder="Octanaje">
    </div>

    <div class="form-group">
        <label for="">Mantenimientos Recomendados</label>
        <div class="error-message">Debe seleccionar un Mantenimiento</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Cambio de aceite</option>
            </select>
        </div>
        <div class="quit-select">Quitar Mantenimiento</div>
        <div class="add-select">Agregar otro Mantenimiento</div>
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Modelo</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseRecomendedMaintenances(){
    const html = `
<form class="form-sm">
    <h1>Registrar Mantenimiento Recomendado</h1>

    <div class="form-group">
        <label for="">Modelo</label>
        <div class="error-message">Debe seleccionar un modelo</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Camaro</option>
                <option value="2">Tesla Model S</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label for="">Servicio</label>
        <div class="error-message">Debe seleccionar un servicio</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Cambio de aceite</option>
                <option value="2">Lavado</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label>Cada X Kilometraje</label>
        <div class="error-message">Debe ingresar un color</div>
        <input type="number" class="form-control" placeholder="kilometraje">
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Mantenimiento</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseVehicules(){
    const html = `
<form class="form-sm">
    <h1>Registrar Vehiculo</h1>

    <div class="form-group">
        <label>Placa</label>
        <div class="error-message">Debe ingresar una placa valida</div>
        <input type="text" class="form-control" placeholder="placa">
    </div>

    <div class="form-group">
        <label for="">Modelo</label>
        <div class="error-message">Debe seleccionar un modelo</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Camaro</option>
                <option value="2">Tesla Model S</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label for="">Concesionario Vendedor</label>
        <div class="error-message">Debe seleccionar un Concesionario</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">RIF: 0912</option>
                <option value="2">RIF: 1234</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label>Año del vehiculo</label>
        <div class="error-message">Debe ingresar un año</div>
        <input type="number" class="form-control" placeholder="año">
    </div>

    <div class="form-group">
        <label>Número Serial</label>
        <div class="error-message">Debe ingresar un serial</div>
        <input type="text" class="form-control" placeholder="serial">
    </div>

    <div class="form-group">
        <label>Número Motor</label>
        <div class="error-message">Debe ingresar un numero de motor</div>
        <input type="text" class="form-control" placeholder="nro motor">
    </div>

    <div class="form-group">
        <label>Color del vehiculo</label>
        <div class="error-message">Debe ingresar un color</div>
        <input type="text" class="form-control" placeholder="color">
    </div>

    <div class="form-group">
        <label>Info extra</label>
        <textarea class="form-control" rows="3"></textarea>
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Vehiculo</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseClients(){
    const html = `
<form class="form-sm">
    <h1>Registrar Cliente</h1>

    <div class="form-group">
        <label>Cédula</label>
        <div class="error-message">Debe ingresar una cédula</div>
        <input type="number" class="form-control" placeholder="cédula">
    </div>

    <div class="form-group">
        <label>Nombre Completo</label>
        <div class="error-message">Debe ingresar un nombre</div>
        <input type="text" class="form-control" placeholder="nombre">
    </div>

    <div class="form-group">
        <label>Dirección</label>
        <div class="error-message">Debe ingresar una dirección</div>
        <input type="text" class="form-control" placeholder="dirección">
    </div>

    <div class="form-group">
        <label>Telefono Principal</label>
        <div class="error-message">Debe ingresar un telefono</div>
        <input type="text" class="form-control" placeholder="telefono">
    </div>

    <div class="form-group">
        <label>Telefono Secundario</label>
        <div class="error-message">Debe ingresar un telefono</div>
        <input type="text" class="form-control" placeholder="telefono">
    </div>

    <div class="form-group">
        <label>Email</label>
        <div class="error-message">Debe ingresar un email</div>
        <input type="text" class="form-control" placeholder="email">
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Cliente</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseProducts(){
    const html = `
<form class="form-sm">
    <h1>Registrar Producto</h1>

    <div class="form-group">
        <label>Nombre</label>
        <div class="error-message">Debe ingresar un nombre</div>
        <input type="text" class="form-control" placeholder="nombre">
    </div>

    <div class="form-group">
        <label>Descripción</label>
        <textarea class="form-control" rows="3"></textarea>
    </div>

    <div class="form-group">
        <label for="">Tipo de producto ( linea de producción )</label>
        <div class="error-message">Debe seleccionar un tipo</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Sintetico 4T</option>
                <option value="2">Semisintetico 2T</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label for="">¿Es Ecológico? </label>
        <div class="error-message">Debe seleccionar una opción</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">SI</option>
                <option value="2">NO</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label>Precio</label>
        <div class="error-message">Debe ingresar una cantidad</div>
        <input type="number" class="form-control" placeholder="precio">
    </div>

    <div class="form-group">
        <label for="">Proovedor</label>
        <div class="error-message">Debe seleccionar un proovedor</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Sintetico 4T</option>
                <option value="2">Semisintetico 2T</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label>Cantidad en Almacen</label>
        <div class="error-message">Debe ingresar una cantidad</div>
        <input type="number" class="form-control" placeholder="cantidad">
    </div>

    <div class="form-group">
        <label>Cantidad mínima en almacen</label>
        <div class="error-message">Debe ingresar una cantidad</div>
        <input type="number" class="form-control" placeholder="cantidad">
    </div>

    <div class="form-group">
        <label>Cantidad máxima en almacen</label>
        <div class="error-message">Debe ingresar una cantidad</div>
        <input type="number" class="form-control" placeholder="cantidad">
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Producto</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseBanks(){
    const html = `
<form class="form-sm">
    <h1>Registrar Banco</h1>

    <div class="form-group">
        <label>Nombre</label>
        <div class="error-message">Debe ingresar un banco</div>
        <input type="text" class="form-control" placeholder="nombre">
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Banco</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseCities(){
    const html = `
    <form class="form-sm">
    <h1>Registrar Ciudad</h1>

    <div class="form-group">
        <label>Nombre de la ciudad</label>
        <div class="error-message">Debe ingresar una ciudad</div>
        <input type="text" class="form-control" placeholder="Nombre">
    </div>

    <div class="form-group">
        <label for="">Estado</label>
        <div class="error-message">Debe seleccionar un estado</div>
        <div class="select-service">
            <select id="" class="btn btn-large btn-positive btn-dropdown" style="width: 100%;">
                <option value="0">Seleccione ...</option>
                <option value="1">Bolivar</option>
            </select>
        </div>
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Ciudad</button>
    </div>
</form>    
    `;

    mainPane.innerHTML = html;
}

function databaseStates(){
    const html = `
<form class="form-sm">
    <h1>Registrar Estado</h1>

    <div class="form-group">
        <label>Nombre del estado</label>
        <div class="error-message">Debe ingresar un estado</div>
        <input type="text" class="form-control" placeholder="Nombre">
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Estado</button>
    </div>
</form>    
    `;

    mainPane.innerHTML = html;
}

function databaseMotorOil(){
    const html = `
<form class="form-sm">
    <h1>Registrar Aceite Motor</h1>

    <div class="form-group">
        <label>Tipo</label>
        <div class="error-message">Debe ingresar un tipo</div>
        <input type="text" class="form-control" placeholder="2 tiempos, 4 tiempos, etc.">
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Tipo</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseBoxOil(){
    const html = `
<form class="form-sm">
    <h1>Registrar Aceite de Caja</h1>

    <div class="form-group">
        <label>Tipo</label>
        <div class="error-message">Debe ingresar un tipo</div>
        <input type="text" class="form-control" placeholder="2 tiempos, 4 tiempos, etc.">
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Tipo</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseRefrigerant(){
    const html = `
<form class="form-sm">
    <h1>Registrar Refrigerante</h1>

    <div class="form-group">
        <label>Tipo</label>
        <div class="error-message">Debe ingresar un tipo</div>
        <input type="text" class="form-control" placeholder="Con sal, sin sal, etc.">
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Tipo</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseProductType(){
    const html = `
<form class="form-sm">
    <h1>Registrar Tipo de Producto</h1>

    <div class="form-group">
        <label>Tipo</label>
        <div class="error-message">Debe ingresar un tipo</div>
        <input type="text" class="form-control" placeholder="linea de producción">
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Tipo</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseSupplier(){
    const html = `
<form class="form-sm">
    <h1>Registrar Proveedor</h1>

    <div class="form-group">
        <label>Nombre</label>
        <div class="error-message">Debe ingresar un proveedor</div>
        <input type="text" class="form-control" placeholder="DHL, DIESEL, etc.">
    </div>

    <div>
        <button type="button" class="btn btn-primary btn-large btn-send">Registrar Proveedor</button>
    </div>
</form>
    `;

    mainPane.innerHTML = html;
}

function databaseOrders(){
    const html = `Ordenes`;

    mainPane.innerHTML = html;
}

function databaseReserves(){
    const html = `Reservas`;

    mainPane.innerHTML = html;
}

function databaseChecks(){
    const html = `Facturas`;

    mainPane.innerHTML = html;
}

/*----------------------------------------------------*/
/* Stats                                              */
/*----------------------------------------------------*/

function statModels(){
    const html = `Modelos de Vehiculos que mas se atendieron`;

    mainPane.innerHTML = html;
}

function statWorkers(){
    const html = `Personal mecanico que mas servicios realizó`;

    mainPane.innerHTML = html;
}

function statFrecuentClients(){
    const html = `Lista ordenada de clientes frecuentes`;

    mainPane.innerHTML = html;
}

function statProducts(){
    const html = `Estadisticas de los productos`;

    mainPane.innerHTML = html;
}

function statServices(){
    const html = `Los servicios mas solicitados`;

    mainPane.innerHTML = html;
}

function statServicePerVehicules(){
    const html = `Historico de uso de servicios`;

    mainPane.innerHTML = html;
}

function statAgencys(){
    const html = `Los concesionarios que mas facturan`;

    mainPane.innerHTML = html;
}

function statUnusedReserves(){
    const html = `Reservas no utilizadas por clientes`;

    mainPane.innerHTML = html;
}

function statMaintenancePrograms(){
    const html = `Revisar esto, porque creo que ya está`;

    mainPane.innerHTML = html;
}
