const pizzas = [
    {
        id: 1, 
        nombre: "napolitana",
        ingredientes: ["harina","levadura","salsa","muzzarella","tomate"],
        precio: 900
    },
    {
        id: 2, 
        nombre: "muzzarella",
        ingredientes: ["harina","levadura","salsa","muzzarella"],
        precio: 1000
    },
    {
        id: 3, 
        nombre: "comun",
        ingredientes: ["harina","levadura","salsa","queso fresco"],
        precio: 1900
    },
    {
        id: 4, 
        nombre: "4 quesos",
        ingredientes: ["harina","levadura","salsa","muzzarella","queso fontina","queso parmesano","queso gorgonzola"],
        precio: 1200
    },
    {
        id: 5, 
        nombre: "de chocolate",
        ingredientes: ["harina","levadura","chocolate"],
        precio: 400
    },
    {
        id: 6, 
        nombre: "con fritas",
        ingredientes: ["harina","levadura","salsa","muzzarella", "papaFritas"],
        precio: 200
    }
]

//a) pizzas con id impar
console.log("Punto A");

let pizzasImpar = pizzas.filter(unaPizza => unaPizza.id % 2 != 0)

console.log("Las pizzas con id impar son:");
pizzasImpar.forEach(pizza => console.log(pizza.nombre));

console.log();

//b) pizzas que valgan menos de 600 pesos
console.log("Punto B");

console.log("Hay alguna pizza que cueste menos de 600 pesos?");
console.log(pizzas.some(pizza => pizza.precio < 600) ? "Si, hay pizzas que cuestan menos de 600 pesos" : "No, no hay pizzas que cuestan menos de 600 pesos")

console.log();

let pizzasBaratas = pizzas.filter(pizza => pizza.precio < 600)

console.log("Las pizzas que cuestan menos de 600 pesos son:")
pizzasBaratas.forEach(pizza => console.log(pizza.nombre));

console.log();

// c) Nombre de la pizza con sus precios
console.log("Punto C");

pizzas.forEach( pizza =>  {
    console.log(`nombre: ${pizza.nombre }`); 
    //console.log('nombre: ' + pizza.nombre);
    console.log(`precio: ${pizza.precio }`);
})

console.log();

//d) ingredientes de la pizza
console.log("Punto D");

pizzas.forEach( pizza => {

    console.log();
    console.log(`Los ingredientes de la pizza ${pizza.nombre} son: `);

    pizza.ingredientes.forEach( ingrediente => console.log(ingrediente));

}

)