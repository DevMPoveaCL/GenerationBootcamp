const ingresos = [
    new Ingreso('Sueldo', 2150),
    new Ingreso('Venta', 1900),

];

const egresos = [
    new Egreso('Arriendo', 900),
    new Egreso('Ropa', 400),
    /*  new Egreso('ariel chcupapi', 400) */
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};

let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        console.log(ingreso)
        totalIngreso += ingreso.valor;
    };
    return totalIngreso;
};

let totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        console.log(egreso)
        totalEgreso += egreso.valor;
    };
    return totalEgreso;
};

let cargarCabecero = () => {
    let presupuesto = (totalIngresos() - totalEgresos());
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 2 });
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-CL', { style: 'percent', minimumFractionDigits: 1 })
}

const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    };
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML
};

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"></ion-icon> 
            </button>
        </div>
    </div>
</div>
`;
    return ingresoHTML;
};

const cargarEgresos = () => {
    let egresoHTML = '';
    for (let egreso of egresos) {
        egresoHTML += crearEgreso(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresoHTML;
}

const crearEgreso = (egreso) => {
    let egresoHTML = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>`;
    return egresoHTML
};