export default class GetData {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FKHju9Dj2M8LwqYT9Cgw/scores';
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch(this.url);
      const result = await response.json();
      return result;
    } catch (error) {
      return null;
    }
  }
}
