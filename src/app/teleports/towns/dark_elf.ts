import { TownTeleports } from "../teleports";

export const DARK_ELF: TownTeleports = {

    teleports: [
        {
            from: 'Dark Elven Village',
            to: 'Gludin Village',
            price: 6400
        },
        {
            from: 'Dark Elven Village',
            to: 'Gludio Castle Town',
            price: 4300
        },

        // Shortcuts
        {
            from: 'Dark Elven Village',
            to: 'Gludio Castle Town',
            price: 780,
            shorcutDescription: 'Neutral Zone => SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/762h5zcw/image.png'
        },
        {
            from: 'Dark Elven Village',
            to: 'Elven Village',
            price: 780,
            shorcutDescription: 'Neutral Zone => Run Elven Territory => SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/vTwBfBF9/image.png'
        },
        {
            from: 'Dark Elven Village',
            to: 'Gludin Village',
            price: 1800,
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