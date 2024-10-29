import { TownTeleports } from "../teleports";

export const GLUDIO: TownTeleports = {
    teleports: [
        {
            from: 'Gludio Castle Town',
            to: 'Elven Village',
            price: 3700
        },
        {
            from: 'Gludio Castle Town',
            to: 'Dark Elven Village',
            price: 3700
        },
        {
            from: 'Gludio Castle Town',
            to: 'Gludin Village',
            price: 2900
        },
        {
            from: 'Gludio Castle Town',
            to: 'Dion Castle Town',
            price: 4100
        },
        {
            from: 'Gludio Castle Town',
            to: 'Orc Village',
            price: 6000
        },
        {
            from: 'Gludio Castle Town',
            to: 'Dwarven Village',
            price: 6000
        },

        // shortcut
        {
            from: 'Gludio Castle Town',
            to: 'Dion Castle Town',
            price: 0,
            shorcutDescription: "run to Cruma Marshland (cross river) ==>> SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/NMqYPzJv/image.png"
        }
    ]
}