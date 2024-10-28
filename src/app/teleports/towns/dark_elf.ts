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
            shorcutSoeNeeded: 1
        },
        {
            from: 'Dark Elven Village',
            to: 'Elven Village',
            price: 780,
            shorcutDescription: 'Neutral Zone => Run Elven Territory => SOE',
            shorcutSoeNeeded: 1
        },
        {
            from: 'Dark Elven Village',
            to: 'Gludin Village',
            price: 1800,
            shorcutDescription: 'Spider Nest ==>> run to Windy Hill,cross the mountain ==>> SOE',
            shorcutSoeNeeded: 1
        },
        {
            from: 'Dark Elven Village',
            to: 'Rune Castle Town',
            price: 0,
            shorcutDescription: 'run Shilien Temple ==>> swim ==>> SOE',
            shorcutSoeNeeded: 1
        }
    ]
}