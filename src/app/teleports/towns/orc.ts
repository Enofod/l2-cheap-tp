import { TownTeleports } from "../teleports";

export const ORC: TownTeleports = {
    teleports: [
        {
            from: 'Orc Village',
            to: 'Gludio Castle Town',
            price: 23000
        },
        {
            from: 'Orc Village',
            to: 'Town of Schuttgart',
            price: 13000
        },
        {
            from: 'Orc Village',
            to: 'Dark Elven Village',
            price: 13000
        },
        {
            from: 'Orc Village',
            to: 'Dwarven Village',
            price: 17000
        },
        {
            from: 'Orc Village',
            to: 'Talking Island Village',
            price: 35000
        },
        {
            from: 'Orc Village',
            to: 'Elven Village',
            price: 18000
        },

        // shorcut
        {
            from: 'Orc Village',
            to: 'Town of Schuttgart',
            price: 1500,
            shorcutDescription: 'Cave of Trials ==>> run ==>> SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/K8pxnf3Y/image.png"
        }
    ]
}