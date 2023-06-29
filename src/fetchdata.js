export default class GetData {
  async fetchData() {
    try {
      const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores';
      const response = await fetch(url);

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error('Retrieving data failed');
      }
    } catch (error) {
      console.error(error); // Handle or log the error
    }
  }
}
