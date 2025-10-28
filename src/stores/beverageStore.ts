import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

type Beverage = {
  name: string;
  temperature: string;
  base: any;
  creamer: any;
  syrup: any;
};


export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    recipes: [] as Beverage[],
    currentBeverageName: "",
  }),

  actions: {
    makeBeverage() {
      const newBeverage: Beverage = {
        name: this.currentBeverageName,
        temperature: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };

      this.recipes.push(newBeverage);
    },
    showBeverage(recipe:Beverage | null) {
      this.currentBeverageName = recipe!.name
      this.currentTemp = recipe!.temperature;
      this.currentBase = recipe!.base;
      this.currentCreamer = recipe!.creamer;
      this.currentSyrup = recipe!.syrup;
    },
  },
  persist: true,
});