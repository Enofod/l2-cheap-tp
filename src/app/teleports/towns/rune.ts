import { TownTeleports } from "../teleports";

export const RUNE: TownTeleports = {
    
    teleports: [
        {
            from: 'Rune Castle Town',
            to: 'Giran Castle Town',
            price: 23000
        },
        {
            from: 'Rune Castle Town',
            to: 'Aden Castle Town',
            price: 15000
        },
        
        // shorcut
        {
            from: 'Rune Castle Town',
            to: 'Town of Oren',
            price: 710,
            shorcutDescription: 'Swamp of Screams ==>> run,swim ==>> SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/zXMQjR29/image.png"
        }
    ]
}