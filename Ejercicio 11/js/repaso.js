let pokemons = [
    /* objetos del arreglo*/  {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30}, // name -> atributo , charmander -> valor del atributo (value)
      {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},                           // [] -> corchetes , arreglo
      {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},                           // {} -> llaves, objetos que contengan atrubito:valor
      {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
      {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
      {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
      {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
      {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
      {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
      {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
  ]

  //1. Ordernar los pokemons por base_damage de menor a mayor.

    function ordenarPorBaseDamage(){
        return pokemons.sort(((a,b) => a.base_damage - b.base_damage));
    }
    console.log(ordenarPorBaseDamage());


//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

function ordenarPorArgumento (atribute){
    return pokemons.sort((a,b) => {return (a[atribute] - b[atribute])});
}
console.log(ordenarPorArgumento ("speed"));

