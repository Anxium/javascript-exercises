// Exercice 1
let character1 = {
    name : 'Jean',
    age : 46,
    items_to_give : ['Potion', 'Epee', 'Hache', 'Bouclier'],
    randomItem : function(){
        let nbAlea = Math.floor(Math.random()*this.items_to_give.length);
        return this.items_to_give[nbAlea];
    }
}

let giveRandomItem = () => {
    alert(`Vous recevez un(e) ${character1.randomItem()} de la part de ${character1.name}`);
}

// Exercice 2
let shop = [{
    title: 'Epee',
    physic: 8,
    magic: 0,
    minLevel: 2,
    available: true
}, {
    title: 'Hache foudroyante',
    physic: 8,
    magic: 4,
    minLevel: 11,
    available: false
}, {
    title: 'Bouclier',
    physic: 0,
    magic: 3,
    minLevel: 3,
    available: true
}, {
    title: 'Sceptre magique',
    physic: 1,
    magic: 10,
    minLevel: 2,
    available: true
}, {
    title: 'Médéric sauvage',
    physic: 1000,
    magic: 1000,
    minLevel: 21,
    available: false
}]

let allObject = () => {
    for(let i=0;i<shop.length;i++){
        let stock = "";
        for(let key in shop[i]) {
            stock += `\n${shop[i][key]}`;
        }
        alert(`Items : ${stock}`);
    }
}

let availableObject = () => {
    for(let i=0;i<shop.length;i++){
        let stock = "";
        for(let key in shop[i]) {
            if(shop[i].available == true) {
                stock += `\n${shop[i][key]}`;
            }
        }
        if (stock != "") {
            alert(`Items disponible : ${stock}`);
        }
    }
}

let minObject = () => {
    for(let i=0;i<shop.length;i++){
        let stock = "";
        for(let key in shop[i]) {
            if(shop[i].minLevel >= 10) {
                stock += `\n${shop[i][key]}`;
            }
        }
        if (stock != "") {
            alert(`Items dont le niveau minimum requis est de 10 : ${stock}`);
        }
    }
}

//Exercice 3
let mainCharacter = {
    name: 'Yannick',
    level: 10,
    life: 180,
    weapon : {
        name: 'Porte Cendres Corrompues',
        damage: 127
    }
}

let attack = () => {
    alert(`${mainCharacter.name} attaque avec ${mainCharacter.weapon.name} les dégats sont de ${mainCharacter.level * mainCharacter.weapon.damage}. Impressionnant!`)
}

// Bonus
function character(name, level, life, weaponName, weaponDamage) {
    this.name = name,
    this.level = level,
    this.life = life,
    this.weapon = {
        name : weaponName,
        damage : weaponDamage,
    },

    this.receiveDamage = function() {
        return this.level * this.weapon.damage;
    },

    this.attack = function(opponent) {
        let damage = this.receiveDamage();
        alert(`${this.name} attaque ${opponent.name} \nAvec ${this.weapon.name} et lui inflige ${damage} pts de dégats.\n${opponent.name} a maintenant ${opponent.life-damage} pts de vies.`)
    }
}

let mainCharacter2 = new character('Justine', 18, 1800, 'sa main', 10);
let opponentCharacter = new character('Jérémy', 1, 200, 'sa débilité', 1);

// mainCharacter2.attack(opponentCharacter)