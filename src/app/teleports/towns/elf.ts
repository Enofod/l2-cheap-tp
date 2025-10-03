import { TownTeleports } from "../teleports";

export const ELF: TownTeleports = {
    
    teleports: [
        {
            from: 'Elven Village',
            to: 'Gludio Castle Town',
            price: 9200
        },
        {
            from: 'Elven Village',
            to: 'Dwarven Village',
            price: 23000
        },
        {
            from: 'Elven Village',
            to: 'Talking Island Village',
            price: 23000
        },
        {
            from: 'Elven Village',
            to: 'Orc Village',
            price: 18000
        },
        
        // shorcut
        {
            from: 'Elven Village',
            to: 'Gludio Castle Town',
            price: 1700,
            shorcutDescription: 'Neutral Zone ==>> SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/gjKYhHKF/image.png'
        },
        {
            from: 'Elven Village',
            to: 'Dark Elven Village',
            price: 1700,
            shorcutDescription: 'Neutral Zone ==>> run Dark Elven Territory ==>> SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/bY0Y4qfC/image.png'
        }
    ]
}