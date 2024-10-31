import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ADEN } from './towns/aden';
import { Teleport, Town, TownTeleports } from './teleports';
import { DARK_ELF } from './towns/dark_elf';
import { DION } from './towns/dion';
import { DWARVEN } from './towns/dwarven';
import { ELF } from './towns/elf';
import { GIRAN } from './towns/giran';
import { GLUDIN } from './towns/gludin';
import { GLUDIO } from './towns/gludio';
import { GODDARD } from './towns/goddard';
import { HEINE } from './towns/heine';
import { HUNTER } from './towns/hunter';
import { ORC } from './towns/orc';
import { OREN } from './towns/oren';
import { RUNE } from './towns/rune';
import { TALKING_ISLAND } from './towns/talking_island';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../analytics.service';

export type PricingModel = {
  price: number | null;
  totalShortcutSoeNeeded: number | null;
  path: {
    town: Town;
    price: number;
    shortcutDescription?: string;
    shortcutSoeNeeded?: number;
    shorcutLink?: string;
  }[] | null;
}

export type Path = { town: Town; price: number; shortcutDescription?: string; shortcutSoeNeeded?: number, shorcutLink?: string }

export type Graph = {
  [key: string]: Path[];
};

@Component({
  selector: 'app-teleports',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './teleports.component.html',
  styleUrl: './teleports.component.scss'
})
export class TeleportsComponent implements OnInit {

  SOE_PRICE = 440

  townOptions = [
    "Aden Castle Town",
    "Dark Elven Village",
    "Dion Castle Town",
    "Dwarven Village",
    "Elven Village",
    "Giran Castle Town",
    "Gludin Village",
    "Gludio Castle Town",
    "Goddard Castle Town",
    "Heine",
    "Hunter Village",
    "Orc Village",
    "Rune Castle Town",
    "Talking Island Village",
    "Town of Oren",
  ]

  selectedFrom?: string;
  selectedTo?: string;

  teleports: Teleport[] = [
    ...ADEN.teleports,
    ...DARK_ELF.teleports,
    ...DION.teleports,
    ...DWARVEN.teleports,
    ...ELF.teleports,
    ...GIRAN.teleports,
    ...GLUDIN.teleports,
    ...GLUDIO.teleports,
    ...GODDARD.teleports,
    ...HEINE.teleports,
    ...HUNTER.teleports,
    ...ORC.teleports,
    ...OREN.teleports,
    ...RUNE.teleports,
    ...TALKING_ISLAND.teleports
  ]

  lowestPriceShortcuts$ = new BehaviorSubject<PricingModel | undefined>(undefined)
  lowestPriceStandard$ = new BehaviorSubject<PricingModel | undefined>(undefined)

  constructor(private analyticsService: AnalyticsService) {
    this.analyticsService.trackEvent('Page Visited', 'Page Visited', 'GENERAL')
  }

  ngOnInit(): void {
    this.teleports.forEach(teleport => {
      teleport.price = teleport.price + (this.SOE_PRICE * (teleport.shorcutSoeNeeded ?? 0))
    })
  }

  onSelect() {
    if (!this.selectedFrom || !this.selectedTo) return

    const lowestPriceShortcuts = this.findLowestPriceAndPath(this.teleports, this.selectedFrom as Town, this.selectedTo as Town);
    this.lowestPriceShortcuts$.next(lowestPriceShortcuts)

    const lowestPriceStandard = this.findLowestPriceAndPath(this.teleports.filter(teleport => teleport.shorcutDescription === undefined), this.selectedFrom as Town, this.selectedTo as Town);
    this.lowestPriceStandard$.next(lowestPriceStandard)

    this.analyticsService.trackEvent('TP ' + this.selectedFrom + " to " + this.selectedTo, 'TP ' + this.selectedFrom + " to " + this.selectedTo, 'TP')
  }


  buildGraph(teleports: Teleport[]): Graph {
    const graph: Graph = {};
    for (const { from, to, price, shorcutDescription, shorcutSoeNeeded, shorcutLink } of teleports) {
      if (!graph[from]) graph[from] = [];
      graph[from].push({ town: to, price, shortcutDescription: shorcutDescription, shortcutSoeNeeded: shorcutSoeNeeded, shorcutLink: shorcutLink });
    }
    return graph;
  }

  findLowestPriceAndPath(
    teleports: Teleport[],
    start: Town,
    end: Town
  ): {
    price: number | null;
    path: { town: Town; price: number; shortcutDescription?: string; shortcutSoeNeeded?: number, shorcutLink?: string }[] | null;
    totalShortcutSoeNeeded: number | null;
  } {
    const graph = this.buildGraph(teleports);
    const prices: { [key: string]: number } = {};
    const visited: { [key: string]: boolean } = {};
    const previous: { [key: string]: { town: Town; price: number; shortcutDescription?: string; shortcutSoeNeeded?: number, shorcutLink?: string } | null } = {};

    for (const town in graph) {
      prices[town] = Infinity;
      previous[town] = null;
    }
    prices[start] = 0;

    const queue: { town: Town, price: number }[] = [{ town: start, price: 0 }];

    while (queue.length > 0) {
      queue.sort((a, b) => a.price - b.price);
      const { town, price } = queue.shift()!;

      if (town === end) {
        const path: { town: Town; price: number; shortcutDescription?: string; shortcutSoeNeeded?: number, shorcutLink?: string }[] = [];
        let totalShortcutSoeNeeded = 0;
        let at: Town | null = end;
        while (at !== null) {
          const prev = previous[at] as { town: Town; price: number; shortcutDescription?: string; shortcutSoeNeeded?: number, shorcutLink?: string } | null;
          path.push({
            town: at,
            price: prev ? prev.price : 0,  // Starting point has a price of 0
            shortcutDescription: prev?.shortcutDescription,
            shortcutSoeNeeded: prev?.shortcutSoeNeeded,
            shorcutLink: prev?.shorcutLink
          });
          if (prev?.shortcutSoeNeeded) {
            totalShortcutSoeNeeded += prev.shortcutSoeNeeded;
          }
          at = prev ? prev.town : null;
        }
        path.reverse();
        return { price, path, totalShortcutSoeNeeded };
      }

      if (visited[town]) continue;
      visited[town] = true;

      for (const { town: neighbor, price: neighborPrice, shortcutDescription, shortcutSoeNeeded, shorcutLink } of graph[town] || []) {
        const newPrice = price + neighborPrice;
        if (newPrice < prices[neighbor]) {
          prices[neighbor] = newPrice;
          previous[neighbor] = { town, price: neighborPrice, shortcutDescription, shortcutSoeNeeded, shorcutLink };
          queue.push({ town: neighbor, price: newPrice });
        }
      }
    }

    return { price: null, path: null, totalShortcutSoeNeeded: null };
  }

}
