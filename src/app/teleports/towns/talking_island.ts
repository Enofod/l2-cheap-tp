import { TownTeleports } from "../teleports";

export const TALKING_ISLAND: TownTeleports = {
    teleports: [
        {
            from: 'Talking Island Village',
            to: 'Gludin Village',
            price: 18000
        },
        // shortcut
        {
            from: 'Talking Island Village',
            to: 'Gludin Village',
            price: 0,
            shorcutDescription: 'swim ==>> SOE',
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/bJBrJTL6/image.png"
        },
    ]
}