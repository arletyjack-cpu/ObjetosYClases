let ponies = [
    {
        id: 1,
        name: "Twilight",
        type: "Unicorn",
    },
    {
        id: 2,
        name: "Rainbow Dash",
        type: "Pegasus",
    },
    {
        id: 3,
        name: "Pinkie Pie",
        type: "Earth Pony",
    },
    {
        id: 4,
        name: "Applejack",
        type: "Earth Pony",
    },
    {
        id: 5,
        name: "Fluttershy",
        type: "Pegasus",
    },
    {
        id: 6,
        name: "Rarity",
        type: "Unicorn",
    }
]

console.log(ponies[0].name);
console.log(ponies[3]);
console.log("El pony de en medio es de tipo: " + ponies[Math.floor((ponies.length-1)/2)].type);

//----------------------------------------------------------------------------------------for each

getHighestId();

function getHighestId() {
    let highestId = ponies.reduce((max, pony) => pony.id > max ? pony.id : max, ponies[0].id);
    return highestId;
}

//-----------------------------------CREATE

function addPony(pony, type) {

    if (checkForPony(pony)) {
        console.log("Se encontró a " + pony +", no se agregará");
    } else {
        console.log("No se encontró a " + pony +", se agregará a la lista");
        
        ponies.push(
            {
                id: getHighestId() + 1,
                name: pony,
                type: type,
            }
        )
    }
}

//-----------------------------------READ

function listAllPonies() {
    ponies.forEach((pony) => {
        console.log("id: " + pony.id + " - " + pony.name);
    });
}

function checkForPony(pony) {
    return ponies.find((existingPony) => existingPony.name === pony);
}

function filterPoniesBytype(type) {
    let poniesByType = ponies.filter(pony => pony.type === type);
    console.log(poniesByType);
}


//--------------------------------------------------------------------------------------subconjunto de elementos .map()

function updateIdNumbers() {
    ponies = ponies.map((pony, index) => {
        return { ...pony, id: index + 1 };
    });
}

//-----------------------------------UPDATE

function updatePony(number, newName, newType) {
    let ponyToUpdate = ponies[number - 1];
    if (ponyToUpdate){
        ponyToUpdate.name = newName;
        ponyToUpdate.type = newType;
        console.log("Se actualizó el pony numero: " + number);
    } else {
        console.log("No se encontró el pony numero: " + number);
    }
}

function changePonyPosition(number, newPosition) {
    let ponyToMove = ponies[number - 1];
    if (ponyToMove) {
        ponies.splice(number - 1, 1);
        ponies.splice(newPosition - 1, 0, ponyToMove);
        console.log("Se movió el pony numero: " + number + " a la posición: " + newPosition);
    } else {
        console.log("No se encontró el pony numero: " + number);
    }
}

function insertPonyAtPosition(pony, type, position) {
    if (checkForPony(pony)) {
        console.log("Se encontró a " + pony +", no se agregará");
    } else {
        console.log("No se encontró a " + pony +", se agregará a la lista");
        ponies.splice(position - 1, 0, { id: getHighestId() + 1, name: pony, type: type });
    }
}

//-----------------------------------DELETE

function deletePony(number) {
    if (ponies[number - 1]) {
        ponies = ponies.filter((pony, index) => index !== number - 1);
        console.log("Se eliminó el pony numero: " + number);
    } else {
        console.log("No se encontró el pony numero: " + number);
    }
}