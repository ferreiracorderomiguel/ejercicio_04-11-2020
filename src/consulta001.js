/*
Hacer consultas donde salgan los siguientes comandos:
$eq, $gt, $gte, $in, $lt, $lte, $ne, $nin, $and, $not, $nor, $or y $regex
*/

//Todos los documentos de la colección inventory
db.inventory.find( {} )

//Todos los documentos de la colección inventory presentados con otra estructura
db.inventory.find( {} ).pretty()

db.inventory.find()

//Para ver en el inventario todos los Sofás con un stock de 450 unidades. (Uso de $eq).
db.inventory.find( { objeto: { $eq: "Sofá"}, stock: { $eq: 450 } }).pretty()

//Para un stock mayor a 750 unidades. (Uso de $gt).
db.inventory.find({stock: {$gt: 750}})

//Para un mueble con un ancho mayor o igual a 1 m, y que me los cuente. (Uso de $gte).
db.inventory.find({ ancho: {$gte: 1}}).count()

//Ver objetos almacenados específicamente en Murcia y Sevilla. (Uso de $in).
db.inventory.find({ almacen: { $in: [ "Murcia", "Sevilla" ]}})

//Para ver los muebles con una profundidad menor a 0.7 m.(Uso de $lt).
db.inventory.find({profundo: {$lt: 0.7}})

//Para ver los muebles con una altura igual o menor a 0.3 m.(Uso de $lte).
db.inventory.find({profundo: {$lte: 0.3} } )

//Para valores no igual al indicado. (uso de $ne).
db.inventory.find({objeto: {$ne: "Sofá"} } )

//Valores que no encajan en un array. (Uso de $nin).
db.inventory.find({dim_cm: {$nin: [1, 3]} } )

/*Para que me mustre todos los sofás y los objetos que tengan un stock
mayor a 10000 unidades.(Uso de $and).*/
db.inventory.find({$and: [{objeto: "Sofá"}, {stock: {$gt: 10000}}]})

/*Para que muestre todo menos las mesas del salón ni
los productos almacenados en Lebrija.(Uso de $not).*/
db.inventory.find({$not: [{objeto: "Mesa de salón"}, {almacen: "Lebrija"}]})

/*Devuelve todos los productos que no sean mayores a 1 metro de alto
ni tengan un stock mayor a 777 unidades(Uso de $nor).*/
db.inventory.find({$nor: [{stock: {$gt: 777}}, {alto: {$gt: 1}}]} )

/*Muestra aquellos productos que sus dimensiones sean de 0.75x1.25 y 
sea de color gris claro.(Uso de $or).*/
db.inventory.find({$or: [{dim_cm: [0.75, 1.25]}, {color: "gris claro"}]})

//(Uso de $regex).
//Para productos que terminen con la letra n  termina en 
db.products.find({objeto: {$regex: /"$n"/}})

//Para productos que empiecen por la letra "s", sin distinguir entre mayúsculas o minúsculas.
db.products.find({objeto: {$regex: /"^s"/i }})
