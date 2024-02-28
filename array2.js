const marvel_heros = ["ironman", "thor", "hulk", "natasha"]
//console.log(marvel_heros)

const dc_heros = ["superman", "flash", "Batman"]
//console.log(dc_heros)

// const all_heros = marvel_heros + dc_heros;
// console.log(all_heros)

//marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][2])

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

//use splash for the concate

const another_array = [1,2,3,[4,5,6],[7,8,9]]
console.log(another_array.flat())

//flat is use for combine or concat more than one array
console.log(Array.of(another_array))
//.from
//.of 
// these are majorly use for the combine the array