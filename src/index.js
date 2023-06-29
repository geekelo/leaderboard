import _ from 'lodash';
import getData from './print.js';
import './style.css';
import './media-library/bg-image.jpg';
import SendData from './postData.js';

const leaderboard = new getData();
const sendData = new SendData();

export default leaderboard;
export {sendData};
