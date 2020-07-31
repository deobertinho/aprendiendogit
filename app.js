var carlos = {
    nombre: 'Carlos',
    apellido: 'Cordova',
    edad: 36
}

var jorge = {
    nombre: 'jorge',
    apellido: 'Cordova',
    edad: 11
}

function imprimirNombreEnMayusculas(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(carlos)
imprimirNombreEnMayusculas(jorge)

function cumpleanos (persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

var x = 4
var y = '4'