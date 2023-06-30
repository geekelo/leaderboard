export default class GetData {
  constructor() {
    this.fetchData(); // Use 'this' keyword to call the fetchData method
  }

  async fetchData() {
    try {
      const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FKHju9Dj2M8LwqYT9Cgw/scores';
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      return null;
    }
  }
}
