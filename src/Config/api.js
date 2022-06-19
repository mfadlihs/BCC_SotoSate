import axios from 'axios';

export const Api = axios.create({
	baseURL: 'https://bcc-soto-sate.ap-southeast-1.elasticbeanstalk.com/',
});
