class Beer {
  name: string;
  alcoholPercent: number;
  description: string;

  constructor(name: string, alcoholPercent: number, description: string) {
    this.name = name;
    this.alcoholPercent = alcoholPercent;
    this.description = description;
  }
}

export default Beer;
