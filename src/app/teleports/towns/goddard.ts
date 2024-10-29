import { TownTeleports } from "../teleports";

export const GODDARD: TownTeleports = {
    
    teleports: [
        {
            from: 'Goddard Castle Town',
            to: 'Aden Castle Town',
            price: 16000
        },
        {
            from: 'Goddard Castle Town',
            to: 'Rune Castle Town',
            price: 20000
        },
        
        // shorcut
        {
            from: 'Goddard Castle Town',
            to: 'Aden Castle Town',
            price: 8500,
            shorcutDescription: 'Disciples ==>> SOE ==>> Aden',
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/NM6YhkS9/image.png"
        }
    ]
}