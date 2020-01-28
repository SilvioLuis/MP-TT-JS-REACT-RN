/// CRIAÇÃO DE OBJETO
/*let people = {
    nome: 'Silvio',
    idade: 22,
    robbies: ['programação', 'musica', 'futebol'],
    masculino: true,
};


function printPeople(people) {
    console.log(people);
}

let printPeople = (people) => console.log(people)

printPeople(people);

const series = [
    { name: 'GoT', epsiodes: 12, best_seller: false }, 
    { name: 'Ghotam', epsiodes: 5, best_seller: false }, 
    { name: 'Friends', epsiodes: 1, best_seller: false }, 
    { name: 'Cheers', epsiodes: 3, best_seller: false },
];

let filtered = series.map((serie) => {
    serie.best_seller = serie.epsiodes >= 5;
    return serie;
})

//let filtered = series.filter((serie) => { return serie.epsiodes >= 5 });

console.log(filtered)


const products = [
    { name: 'book', price: 20.0 }, 
    { name: 'mouse', price: 12.5 }
]

const totalPrice = products.reduce((accumulator, product) => {
    return accumulator + product.price
}, 0)


/*
products.map((product) => {
    totalPrice += product.price;
});*/



/*
let printSerie = () => {
    /*series.map((serie) => {
        
        //console.log('Silvio assistiu ' + serie.name)
        let frase = `Silvio assistiu ${serie.name}`
        console.log(frase)
    })

    series.map((serie) => {
        const { name, epsiodes, best_seller } = serie;
        let frase = `Silvio assistiu ${name}`
        console.log(frase)
    })
}

printSerie()*/

/*const series = [
    { name: 'GoT', epsiodes: 12, best_seller: false }, 
    { name: 'Ghotam', epsiodes: 5, best_seller: false }, 
    { name: 'Friends', epsiodes: 1, best_seller: false }, 
    { name: 'Cheers', epsiodes: 3, best_seller: false },
];

let addToList = (list) => {
    console.log([...series, ...list])
}

addToList([
    { name: 'Sobrenatural', epsiodes: 12, best_seller: false }, 
    { name: 'asdasd', epsiodes: 5, best_seller: false }, 
])*/

let dados = {
    nome: 'Silvio',
    profissao: 'Programador'
};

let addItems = (items) => {
    console.log({ ...dados, ...items })
}

addItems({ idade: 22, sexo: 'M', nome: 'Carlos' })





