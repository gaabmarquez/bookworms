export class Book {
  constructor(
    public id: string,
    public name: string,
    public author: string,
    public img: string,
    public notes?: string
  ) { }
}
