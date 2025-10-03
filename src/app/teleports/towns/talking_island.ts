import { TownTeleports } from "../teleports";

export const TALKING_ISLAND: TownTeleports = {
    teleports: [
        {
            from: 'Talking Island Village',
            to: 'Gludin Village',
            price: 18000
        },
        {
            from: 'Talking Island Village',
            to: 'Dark Elven Village',
            price: 24000
        },
        {
            from: 'Talking Island Village',
            to: 'Dwarven Village',
            price: 46000
        },
        {
            from: 'Talking Island Village',
            to: 'Elven Village',
            price: 23000
        },
        {
            from: 'Talking Island Village',
            to: 'Orc Village',
            price: 35000
        },
        // shortcut
        {
            from: 'Talking Island Village',
            to: 'Gludin Village',
            price: 0,
            shorcutDescription: 'swim ==>> SOE. If you are warrior - you need to buy few health potions to survive',
            shorcutSoeNeeded: 1,
            shorcutLink: "https://i.postimg.cc/bJBrJTL6/image.png"
        },
    ]
}