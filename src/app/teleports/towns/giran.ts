import { TownTeleports } from "../teleports";

export const GIRAN: TownTeleports = {
    
    teleports: [
        {
            from: 'Giran Castle Town',
            to: 'Dion Castle Town',
            price: 8100
        },
        {
            from: 'Giran Castle Town',
            to: 'Town of Oren',
            price: 11000
        },
        {
            from: 'Giran Castle Town',
            to: 'Hunter Village',
            price: 9400
        },
        {
            from: 'Giran Castle Town',
            to: 'Heine',
            price: 9200
        },

        // shortcut
        {
            from: 'Giran Castle Town',
            to: 'Dion Castle Town',
            price: 0,
            shorcutDescription: "run towards Execution Grounds ==>> SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/6596XF99/image.png"
        },
        {
            from: 'Giran Castle Town',
            to: 'Heine',
            price: 0,
            shorcutDescription: "run towards Fields of Silence ==>> SOE",
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/RVXSVGFw/image.png"
        },
        {
            from: 'Giran Castle Town',
            to: 'Town of Oren',
            price: 5300,
            shorcutDescription: "Hardins ==>> run ==>> SOE ",
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/13dyDtDt/image.png"
        }
    ]
}