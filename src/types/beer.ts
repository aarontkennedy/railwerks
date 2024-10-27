import Drink from "./drink";

class Beer extends Drink {
  alcoholPercent: number;

  constructor(name: string, alcoholPercent: number, description: string) {
    super(name, description);
    this.alcoholPercent = alcoholPercent;
  }
}

export default Beer;
