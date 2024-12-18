import { TownTeleports } from "../teleports";

export const GLUDIN: TownTeleports = {
    
    teleports: [
        {
            from: 'Gludin Village',
            to: 'Talking Island Village',
            price: 18000
        },
        {
            from: 'Gludin Village',
            to: 'Elven Village',
            price: 6400
        },
        {
            from: 'Gludin Village',
            to: 'Dark Elven Village',
            price: 3700
        },
        {
            from: 'Gludin Village',
            to: 'Gludio Castle Town',
            price: 2900
        },
        {
            from: 'Gludin Village',
            to: 'Orc Village',
            price: 6000
        },
        {
            from: 'Gludin Village',
            to: 'Dwarven Village',
            price: 6000
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
            price: 900,
            shorcutDescription: "Abandoned Camp ==>> run,cross the mountain ==>> SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/nzjjqgs8/image.png',
        },
        {
            from: 'Gludin Village',
            to: 'Dark Elven Village',
            price: 1000,
            shorcutDescription: "Fellmere Harvest Grounds ==>> run ==>> SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/6Qh0SVLW/image.png',
        }
    ]
}