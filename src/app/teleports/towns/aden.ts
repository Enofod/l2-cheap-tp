import { TownTeleports } from "../teleports";

export const ADEN: TownTeleports = {
    teleports: [
        {
            from: 'Aden Castle Town',
            to: 'Hunter Village',
            price: 11000
        },
        {
            from: 'Aden Castle Town',
            to: 'Town of Oren',
            price: 13000
        },
        {
            from: 'Aden Castle Town',
            to: 'Rune Castle Town',
            price: 25000
        },
        {
            from: 'Aden Castle Town',
            to: 'Goddard Castle Town',
            price: 16000
        },

        // shortcut
        {
            from: 'Aden Castle Town',
            to: 'Hunter Village',
            price: 2400,
            shorcutDescription: "Anghel Waterfall ==>> SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/g2Hv0ChN/image.png'
        },
        {
            from: 'Aden Castle Town',
            to: 'Goddard Castle Town',
            price: 1400,
            shorcutDescription: "Blazing Swamp ==>> run ==>> SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/N0L5wSky/image.png'
        }
    ]
}