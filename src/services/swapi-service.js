export default class swapiService {
  async getBooks() {
    let res = await fetch('./users');
    return  await res.json();
  }
}
