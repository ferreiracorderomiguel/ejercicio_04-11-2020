/*
Registro del material en stock en una tienda de muebles.
*/
db.inventory.drop()

db.inventory.insertMany([
    { objeto: "Sofá", almacen: "Murcia", stock: 450, dimensiones: {ancho: 2, alto: 0.5, profundo: 1}, dim_cm: [ 2, 0.5 ], color: "blanco" },
    { objeto: "Sillón", almacen: "Algodonales", stock: 1350, dimensiones: {ancho: 0.75, alto: 1.25, profundo: 1}, dim_cm: [ 0.75, 1.25 ], color: "camel" },
    { objeto: "Mesa de salón", almacen: "Marismillas", stock: 300, dimensiones: {ancho: 1.25, alto: 0.25, profundo: 0.6}, dim_cm: [ 1.25, 0.25 ], color: "negro" },
    { objeto: "Estantería", almacen: "Jerez", stock: 15000, dimensiones: {ancho: 0.75, alto: 2, profundo: 0.25}, dim_cm: [ 0.75, 2 ], color: "marrón" },
    { objeto: "Mueble para TV", almacen: "Sevilla", stock: 23400, dimensiones: {ancho: 2.3, alto: 0.3, profundo: 0.4}, dim_cm: [ 2.3, 0.3 ], color: "crema" },
    { objeto: "Escritorio", almacen: "Lebrija", stock: 413, dimensiones: {ancho: 1.75, alto: 0.7, profundo: 0.8}, dim_cm: [ 1.75, 0.7 ], color: "gris claro" }
 ]);