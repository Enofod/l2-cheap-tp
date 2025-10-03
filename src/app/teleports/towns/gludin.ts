import { TownTeleports } from "../teleports";

export const GLUDIN: TownTeleports = {
    
    teleports: [
        {
            from: 'Gludin Village',
            to: 'Gludio Castle Town',
            price: 7300
        },
        {
            from: 'Gludin Village',
            to: 'Talking Island Village',
            price: 9400
        },
        {
            from: 'Gludin Village',
            to: 'Elven Village',
            price: 16000
        },
        {
            from: 'Gludin Village',
            to: 'Dark Elven Village',
            price: 16000
        },
        {
            from: 'Gludin Village',
            to: 'Dwarven Village',
            price: 38000
        },
        {
            from: 'Gludin Village',
            to: 'Orc Village',
            price: 26000
        },

        // shortcut
        {
            from: 'Gludin Village',
            to: 'Talking Island Village',
            price: 0,
            shorcutDescription: "swim ==>> SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/gchLj9F8/image.png'
        },
        {
            from: 'Gludin Village',
            to: 'Gludio Castle Town',
            price: 1200,
            shorcutDescription: "Abandoned Camp ==>> run,cross the mountain ==>> SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/nzjjqgs8/image.png',
        },
        {
            from: 'Gludin Village',
            to: 'Dark Elven Village',
            price: 1400,
            shorcutDescription: "Fellmere Harvest Grounds ==>> run ==>> SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/6Qh0SVLW/image.png',
        }
    ]
}