import { TownTeleports } from "../teleports";

export const DION: TownTeleports = {

    teleports: [
        {
            from: 'Dion Castle Town',
            to: 'Gludio Castle Town',
            price: 4100
        },
        {
            from: 'Dion Castle Town',
            to: 'Giran Castle Town',
            price: 8100
        },
        {
            from: 'Dion Castle Town',
            to: 'Heine',
            price: 9800
        },

        // shortcut
        {
            from: 'Dion Castle Town',
            to: 'Gludio Castle Town',
            price: 0,
            shorcutDescription: "run to west -> Ruins of Despair (cross river) ==>> SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/yNwYCdN5/image.png'
        },
        {
            from: 'Dion Castle Town',
            to: 'Giran Castle Town',
            price: 1900,
            shorcutDescription: "Partisan Hideway ==>> run ==>> SOE ",
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/26yBgWbD/image.png'
        },
        {
            from: 'Dion Castle Town',
            to: 'Town of Oren',
            price: 1900,
            shorcutDescription: "Partisan Hideway ==>> run ==>> SOE ",
            shorcutSoeNeeded: 1,
            shorcutLink: 'https://i.postimg.cc/59HsCYPT/image.png'
        }
    ]
}