const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],

    villains:[
        {
            id: 1,
            name: "SuperBro",
            power: "unlimted drinking"},
        {
            id: 2,
            name: "Manic",
            power: "Hypnosis"},

           { id: 3,
            name: "Crawl",
            power: "Super sticky skin"},
    
    
    ]

}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}