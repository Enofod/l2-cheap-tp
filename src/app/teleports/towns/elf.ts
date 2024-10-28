import { TownTeleports } from "../teleports";

export const ELF: TownTeleports = {
    
    teleports: [
        {
            from: 'Elven Village',
            to: 'Gludin Village',
            price: 6400
        },
        {
            from: 'Elven Village',
            to: 'Gludio Castle Town',
            price: 3700
        },
        
        // shorcut
        {
            from: 'Elven Village',
            to: 'Gludio Castle Town',
            price: 740,
            shorcutDescription: ' Neutral Zone ==>> SOE',
            shorcutSoeNeeded: 1
        },
        {
            from: 'Elven Village',
            to: 'Dark Elven Village',
            price: 740,
            shorcutDescription: ' Neutral Zone ==>> run Dark Elven Territory ==>> SOE',
            shorcutSoeNeeded: 1
        }
    ]
}