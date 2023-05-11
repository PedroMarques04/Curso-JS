let person = {name: 'Joshua',
sex: 'M',
weight: 85.4,
getFat(p=0){

    console.log('Engordou')
    this.weight+=p
}
}

person.getFat(2)
console.log(`${person.name} pesa ${person.weight}Kg`)

