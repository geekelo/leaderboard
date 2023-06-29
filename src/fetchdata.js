export default class GetData {
  async fetchData() {
    try {
      const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores';
      const response = await fetch(url);

        const result = await response.json();
        return result;
    
    } catch (error) {
      console.error(error); // Handle or log the error
    }
  }
}
