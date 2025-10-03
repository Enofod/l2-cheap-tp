import { TownTeleports } from "../teleports";

export const DARK_ELF: TownTeleports = {

    teleports: [
        {
            from: 'Dark Elven Village',
            to: 'Gludio Castle Town',
            price: 10000
        },
        {
            from: 'Dark Elven Village',
            to: 'Dwarven Village',
            price: 22000
        },
        {
            from: 'Dark Elven Village',
            to: 'Talking Island Village',
            price: 24000
        },
        {
            from: 'Dark Elven Village',
            to: 'Orc Village',
            price: 13000
        },

        // Shortcuts
        {
            from: 'Dark Elven Village',
            to: 'Gludio Castle Town',
            price: 1700,
            shorcutDescription: 'Neutral Zone => SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/762h5zcw/image.png'
        },
        {
            from: 'Dark Elven Village',
            to: 'Elven Village',
            price: 1700,
            shorcutDescription: 'Neutral Zone => Run Elven Territory => SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/vTwBfBF9/image.png'
        },
        {
            from: 'Dark Elven Village',
            to: 'Gludin Village',
            price: 3600,
            shorcutDescription: 'Spider Nest ==>> run to Windy Hill,cross the mountain ==>> SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/gkdj0nKb/image.png'
        },
        {
            from: 'Dark Elven Village',
            to: 'Rune Castle Town',
            price: 0,
            shorcutDescription: 'run Shilien Temple ==>> swim ==>> SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/SxxKW35Z/image.png'
        }
    ]
}