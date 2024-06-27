class Event {
  name: string;
  date: string;
  time: string;
  url: string;

  constructor(name: string, date: string, time: string, url: string) {
    this.name = name;
    this.date = date;
    this.time = time;
    this.url = url;
  }
}

export default Event;
