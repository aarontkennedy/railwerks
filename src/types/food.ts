class Food {
  name: string;
  description: string;
  staticImage: JSX.Element | null;

  constructor(
    name: string,
    description: string = "",
    staticImage: JSX.Element | null = null
  ) {
    this.name = name;
    this.description = description;
    this.staticImage = staticImage;
  }
}

export default Food;
