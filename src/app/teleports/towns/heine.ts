import { TownTeleports } from "../teleports";

export const HEINE: TownTeleports = {
    
    teleports: [
        {
            from: 'Heine',
            to: 'Giran Castle Town',
            price: 9200
        },
        {
            from: 'Heine',
            to: 'Dion Castle Town',
            price: 9800
        },

        // shortcut
        {
            from: 'Heine',
            to: 'Giran Castle Town',
            price: 2400,
            shorcutDescription: "Fields of Whispers => run,swim ==>> SOE ",
            shorcutSoeNeeded: 1
        }
    ]
}