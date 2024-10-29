import { TownTeleports } from "../teleports";

export const OREN: TownTeleports = {
    teleports: [
        {
            from: 'Town of Oren',
            to: 'Giran Castle Town',
            price: 11000
        },
        {
            from: 'Town of Oren',
            to: 'Hunter Village',
            price: 4900
        },
        {
            from: 'Town of Oren',
            to: 'Aden Castle Town',
            price: 13000
        },
        
        // shorcut
        {
            from: 'Town of Oren',
            to: 'Giran Castle Town',
            price: 2700,
            shorcutDescription: 'Plains of Lizardmen ==>> run ==>> SOE ',
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/CL63Q25r/image.png"
        },
        {
            from: 'Town of Oren',
            to: 'Dion Castle Town',
            price: 2700,
            shorcutDescription: 'Plains of Lizardmen ==>> run ==>> SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/6QCFT50F/image.png"
        },
        {
            from: 'Town of Oren',
            to: 'Aden Castle Town',
            price: 4400,
            shorcutDescription: 'Ivory Tower ==>> run ==>> SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/sxHNbBjG/image.png"
        }
    ]
}