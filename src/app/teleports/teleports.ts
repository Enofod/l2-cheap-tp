export type TownTeleports = {
    teleports: Teleport[]
}

export type Teleport = {
    from: Town,
    to: Town
    price: number,
    shorcutDescription?: string
    shorcutSoeNeeded?: number
    shorcutLink?: string
}

export type Town =
    "Talking Island Village" |
    "Elven Village" |
    "Dark Elven Village" |
    "Orc Village" |
    "Dwarven Village" |
    "Gludin Village" |
    "Gludio Castle Town" |
    "Dion Castle Town" |
    "Giran Castle Town" |
    "Hunter Village" |
    "Town of Oren" |
    "Aden Castle Town" |
    "Heine" |
    "Rune Castle Town" |
    "Goddard Castle Town" |
    "Town of Schuttgart" |
    "Hunters Village"
