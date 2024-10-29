import { TownTeleports } from "../teleports";

export const HUNTER: TownTeleports = {
    
    teleports: [
        {
            from: 'Hunter Village',
            to: 'Giran Castle Town',
            price: 9400
        },
        {
            from: 'Hunter Village',
            to: 'Town of Oren',
            price: 4900
        },
        {
            from: 'Hunter Village',
            to: 'Aden Castle Town',
            price: 11000
        },

        // shortcut
        {
            from: 'Hunter Village',
            to: 'Giran Castle Town',
            price: 4100,
            shorcutDescription: "Hardins ==>> SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/BnRGXzGP/image.png"
        },
        {
            from: 'Hunter Village',
            to: 'Aden Castle Town',
            price: 3700,
            shorcutDescription: "North EV ==>> run - SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/KzDXpv3t/image.png"
        },
        {
            from: 'Hunter Village',
            to: 'Town of Oren',
            price: 0,
            shorcutDescription: "run toward Plains of Lizardman ==>>  SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/6qMkwj03/image.png"
        }
    ]
}