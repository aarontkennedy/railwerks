class Drink {
  name: string;
  description: string;
  alcoholPercent: number | null;

  constructor(
    name: string,
    description: string,
    alcoholPercent: number | null = null
  ) {
    this.name = name;
    this.description = description;
    this.alcoholPercent = alcoholPercent;
  }
}

export default Drink;
