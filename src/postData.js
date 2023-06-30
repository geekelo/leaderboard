export default class SendData {
  constructor() {
    this.playerName = document.querySelector('#user');
    this.playerScore = document.querySelector('#score');
    this.setupListener();
    this.postData();
  }

  async postData(playername, playerscore) {
    try {
      const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FKHju9Dj2M8LwqYT9Cgw/scores';

      const data = {
        score: playerscore,
        user: playername,
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        return result;
    } 

  } catch (error) {
      return null;
    }
  }

  setupListener() {
    const form = document.querySelector('.postForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = this.playerName.value;
      const score = this.playerScore.value;
      await this.postData(user, score);
      form.reset();
    });
  }
}

