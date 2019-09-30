import axios from 'axios';
import { proxy } from '../config';

export default class List {
	constructor() {
	}
	async getList() {
		try {
			const res = await axios(`https://www.scorebat.com/video-api/v1/`);
			this.result = res.data;
		} catch (error) {
			console.log(error);
		}
	}
}
