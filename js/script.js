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