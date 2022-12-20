let products = [
    { id: 1, name: "tv", description: "TV 55 Pulgadas", brand: "chanchum", type: "tech" },
    { id: 2, name: "cellphone", description: "Androy 6/128GB", brand: "chaiomi", type: "tech" },
    { id: 3, name: "tv", description: "TV 55 Pulgadas", brand: "elyi", type: "tech" },
    { id: 4, name: "tv", description: "TV 65 Pulgadas", brand: "panachonic", type: "tech" },
    { id: 5, name: "cellphone", description: "Aifon 6/256GB", brand: "apol", type: "tech" },
    { id: 6, name: "bed", description: "KingSize", brand: "paiso", type: "home" },
    { id: 7, name: "bed", description: "QueenSize", brand: "rochen", type: "home" },
    { id: 8, name: "washing machine", description: "12Lt", brand: "elyi", type: "home" },
    { id: 9, name: "washing machine", description: "10Lt", brand: "panachonic", type: "home" },
    { id: 10, name: "tv", description: "TV 75 Pulgadas", brand: "chanchum", type: "tech" },
]
 
//1. Cerar una función que permita filtrar el arreglo de productos por cada atributo.

    //function FiltrarProducts (atribute, value){ // atribute que me funciona para los arreglos y value para validar el arreglo 
        // return products.filter(products => products[atribute] === value)
   // }
   // console.log( FiltrarProducts("name","brand"))

    function filterProductsBy(atribute, value){
        const validAtributes = Object.keys(products[0])
        if (validAtributes.includes(atribute)){
            return products.filter(product => product[atribute] === value)
        } else {
            return "El atributo ingresado no existe"
        }
    }
 
    //console.log(filterProductsBy("price", 1))
 
//2. Crear una función que permita ordenar el arreglo de productos por cada atributo (en orden alfabetico).

function ordenarProductosPorAtributo(atributo){
    if (typeof products[0][atributo] === "string"){
        return products.sort((a,b) => {return a[atributo].localeCompare(b[atributo])})
    } else if (typeof products[0][atributo] === "number"){
        return products.sort((a,b) => {return a[atributo] - b[atributo]})
    } else {
        return "Por favor utiliza un atributo válido"
    }
}

 
//3. Crear una función que permita imprimir en pantalla los datos del objeto.
    //El name, brand y type deben imprimirse en formato Capitalizado.
 
    function capitalizarFrase(string){
        let palabras = string.split(" ") // split corta la palabra en este caso por espacios 
        let palabrasCapitalizadas = palabras.map(palabra => {return capitalizarPalabra(palabra)})
        return palabrasCapitalizadas.join(" ")
    }
 
    function capitalizarPalabra(palabra){
        return palabra.charAt(0).toUpperCase() + palabra.slice(1) // CharArt contabiliza  el orden de los caracteres en este caso de la palabra
    }
   
    function imprimirDatosDeObjeto(objeto){
        let arreglo = ["name", "type", "brand"]
        for(const prop in objeto){
            if (arreglo.includes(prop)){ // prop es una propiedad que viene con el for, en este caso el prop pertenece al objeto
                console.log(`${prop} : ${capitalizarFrase(objeto[prop])}`)
            } else {
                console.log(`${prop} : ${objeto[prop]}`)
            }
        }
    }
 
    imprimirDatosDeObjeto(products[0])


//4. Añadir el atributo price a cada objeto. Para añadirlo utilizar un numero aleatorio entre 500 y 1500 para cada uno.



//5. Crear una función que me permita filtrar productos por precio, permitiendome filtrar aquellos que son menores
//   a un valor que yo ingrese.
 
//CRUD -> CREATE READ UPDATE DELETE
 
//CREATE comment
 
//READ comment
 
//UPDATE comment
 
//DELETE comment


function filtrarProductosPorPrecio(maxPrice){
    addPrice()
    return products.filter(product => product.price <= maxPrice)
}


    /*function FiltrarProductsporPrecio(products,maxPrice){
        addprice()
       return products.filter()
    }*/


 
//6. Crear una función que me permita crear un nuevo objeto, ingresando los datos con formularios. Cuando se cree un nuevo
//   objeto, el id no debe repetirse.
 
//7. Crear una función que me permita modificar los atributos de un objeto que haya seleccionado.
 
//8. Crear una función que me permita borrar uno o varios productos de mi arreglo según los valores de sus atributos.
