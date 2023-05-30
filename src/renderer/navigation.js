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