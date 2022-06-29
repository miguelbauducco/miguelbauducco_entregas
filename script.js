class Producto{
    constructor(valor,articulo){
        this.valor=valor;
        this.articulo=articulo;
    }

    iva(){
        this.valor=this.valor*1.21;
    }


}

const productos = [new Producto( 50000, "tv"),
                new Producto( 80000, "pc"),
                new Producto( 40000, "celular"),
                new Producto(20000, "tablet")];


for (const producto of productos){
    producto.iva();
}



console.log(productos[parseInt(prompt("Ingrese 0 si desea TV, 1 para PC, 2 CELULAR y 3 TABLET"))]);



let cuotas = parseInt(prompt("Ingrese cantidad de cuotas: "));
let precioFinal;



function calculadoraDeCuotas(cantidadDeCuotas,monto,total){

        switch(cantidadDeCuotas){         
            case 3: 
            total=Math.round(monto/cantidadDeCuotas);
            break;

            case 6: 
            total=Math.round(monto/cantidadDeCuotas);
            break;

            case 12: 
            total=Math.round(monto/cantidadDeCuotas);
            break;

            case 18: 
            total=Math.round(monto/cantidadDeCuotas);
            break;

            case 24: 
            total=Math.round(monto/cantidadDeCuotas);
            break;

            default:
            return 0;
    }

return total;
}


console.log("Debe abonar "+cuotas+" cuotas de ");
console.log(calculadoraDeCuotas(cuotas, productos.valor,precioFinal)+" pesos");