
var chaine = "abcdefgh"
function egleb(chaine) {
    let chaineReverse = ""
    for (i = 0; i < chaine.length; i++) {
        chaineReverse = chaine[i] + chaineReverse
    }
    console.log(chaineReverse)
}
egleb("abcdefgh")
egleb("alaya")
egleb("gomycode")

chaineReverse = chaine[i]

function capitalize(jomla) {
    jomla = jomla.replace(jomla[0], jomla[0].toUpperCase())
    for (let i = 0; i < jomla.length; i++) {
        if (jomla[i] === " ")
            jomla = jomla.replace(" " + jomla[i + 1], " " + jomla[i + 1].toUpperCase())
    }
    console.log(jomla)
}

capitalize("lore,m ipsum hanen congratulation alaya dhia mouhamed")
const numbers = [-3, -2, 0, 1, 3, 6, 9, -15, 9, 8]
function sum(arr) {
    let somme = 0
    for (let i = 0; i < arr.length; i++) {
        somme = arr[i] + somme
    }
    console.log(somme)
}
sum(numbers)

function factorilize(number) {
    let fact = 1
    for (i = 1; i <= number; i++) {
        fact = i * fact
    }
    console.log(fact)
}
factorilize(10)
factorilize(20)
factorilize(5)


function Isprimaire(number) {
    for (let i = 2; i < number; i++) {
        {
            if (number % i === 0) {
                return false
            }
        }
    }
    return true
}
console.log(Isprimaire(13))
console.log(Isprimaire(29))
console.log(Isprimaire(25))
console.log(Isprimaire(27))



const notes = [
    {
        "subject": "Mathematics",
        "mark": 17
    },
    {
        "subject": "English",
        "mark": 14
    },
    {
        "subject": "History",
        "mark": 19
    },
    {
        "subject": "Biology",
        "mark": 12
    },
    {
        "subject": "Physics",
        "mark": 16
    },
    {
        "subject": "Chemistry",
        "mark": 15
    },
    {
        "subject": "Geography",
        "mark": 13
    },
    {
        "subject": "Art",
        "mark": 18
    },
    {
        "subject": "Music",
        "mark": 11
    }
]

function mention(notet) {
    let somme1 = 0

    let moyen = 0
    for (let i = 0; i < notet.length; i++) {
        somme1 = notet[i].mark + somme1
        moyen = somme1 / notet.length
    }
    console.log(moyen)

    if (moyen > 17.5)
        return ("tres bien")
    else if (moyen > 15)
        return ("bien")
    else if (moyen > 12.5)
        return ("assez bien")
    else if (moyen > 10)
        return ("passable")
    else
        return ("refusé")
}
console.log(mention(notes))
