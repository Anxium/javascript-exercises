let character = {
    name : 'Jean',
    age : 46,
    items_to_give : ['Potion', 'Epee', 'Hache', 'Bouclier'],
    randomItem : function(){
        let nbAlea = Math.floor(Math.random()*this.items_to_give.length);
        return this.items_to_give[nbAlea];
    }
}

alert(`Vous recevez un(e) ${character.randomItem()} de la part de ${character.name}`)

let shop = [{
    title: 'Epee',
    physic: 8,
    magic: 0,
    minLevel: 1,
    available: true
}, {
    title: 'Hache foudroyante',
    physic: 4,
    magic: 4,
    minLevel: 4,
    available: false
}, {
    title: 'Bouclier',
    physic: 0,
    magic: 3,
    minLevel: 2,
    available: true
}, {
    title: 'Sceptre magique',
    physic: 1,
    magic: 10,
    minLevel: 1,
    available: true
}, {
    title: 'Médéric sauvage',
    physic: 1000,
    magic: 1000,
    minLevel: 1,
    available: false
}]

let object = () => {
    for(let i=0;i<shop.length;i++){
        for(let key in shop) {
            alert(object[i][key])
        }
    }
}

object()
