const array = [
    {
        username: 'john',
        team: 'red',
        score: 5,
        items:['ball','book','pen']
    },
    {
        username: 'becky',
        team: 'blue',
        score: 10,
        items:['tape','backpack','pen']
    },
    {
        username: 'susy',
        team: 'red',
        score: 55,
        items:['ball','eraser','pen']
    },
    {
        username: 'tyson',
        team: 'green',
        score: 1,
        items:['book','pen']
    }
];


let temp = []
array.forEach((user) =>{
    let name = user.username;
    name = name + '!';
    temp.push(name);
})
console.log(temp);


let mapTemp = array.map(user =>  user.username +'?')
console.log(mapTemp)

let filterTemp = array.filter(user =>{
    return user.team === 'red';
})
console.log(filterTemp);

const reduceTemp = array.reduce((acc,user) =>{
    return acc + user.score;    
},0)

let finalProject = array.map(user =>{
    user.items = user.items.map(item =>{
        return item + '!';
    })
    return user;
})

console.log(finalProject);

class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    intro(){
        console.log(`My name is ${this.name} and my type is ${this.type}`)
    }
}

const player1 = new Player('Injeel','Trader');
console.log(player1.intro());


class Wizard extends Player{
    constructor(name, type){
        super(name,type)
    }

    play(){
        console.log(`I am ${this.name} and I like playing`)
    }
}

const wizard1 = new Wizard('Yatin','Koodi');

console.log(wizard1.play());

const basket = ['apple','orange','watermellon']

basket.forEach(item =>{
    console.log(item);
})

for (item in basket){
    console.log(item);
}

const detailedBasket = {
    apples : 5,
    orange : 10,
    red : 1000
}

for ( item in detailedBasket) {
    console.log(item.value);
}