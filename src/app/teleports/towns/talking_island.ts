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
            price: 18000,
            shorcutDescription: 'swim ==>> SOE',
            shorcutSoeNeeded: 1
        },
    ]
}