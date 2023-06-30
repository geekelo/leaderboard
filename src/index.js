import GetData from './print.js';
import './style.css';
import './media-library/bg-image.jpg';
import SendData from './postData.js';

const leaderboard = new GetData();
const sendData = new SendData();

export default leaderboard;
export { sendData };
