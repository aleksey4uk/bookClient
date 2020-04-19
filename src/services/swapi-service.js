export default class swapiService {
  async getBooks() {
    let res = await fetch('http://localhost:3000/users');
    return  await res.json();
  }
}
