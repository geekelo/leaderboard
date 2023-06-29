import GetData from "./fetchdata";

export default class PrintMe {
  constructor () {
    this.container = document.querySelector('.scoreDetailsContainer');
    this.fetchedData = new GetData();
    this.onLoad();
    this.setupEvent();
  }

  create(item) {
    const scoreDetails = document.createElement('p');
    scoreDetails.className = 'scoreDetails';
    scoreDetails.innerHTML = `<span class="fetchedData">${item.user}</span><span class="fetchedData">${item.score}</span>`;
    this.container.appendChild(scoreDetails);
  }

  display(result) {
    this.container.innerHTML = '';
    result.forEach(each => {
      this.create(each);
    });
  }

  async onLoad() {
    const result = await this.fetchedData.fetchData();
    this.display(result.result);
  }

  setupEvent() {
    document.querySelector('.refreshBtn').addEventListener('submit', (e) =>
    {
      e.preventDefault();
      console.log('working');
      this.onLoad();
    }
    )
  }
}
