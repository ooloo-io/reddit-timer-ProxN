import axios from 'axios';
import dayjs from 'dayjs';
import config from '../constants/config';
import convertData from '../utils/convertData';

export default async (subreddit) => {
  try {
    const size = 500;
    const date = dayjs().subtract(1, 'year').unix();
    const query = `?subreddit=${subreddit}&size=${size}&sort=desc&sort_type=score&after=${date}`;
    const URL = `${config.BASE_URL}search/submission/${query}`;
    const res = await axios.get(URL);

    if (res.data.length > 0) return res.data;
    if (res.data.data && res.data.data.length > 0) {
      return convertData(res.data.data);
    }
    throw new Error(`No subreddit found with the name: ${subreddit}`);
  } catch (error) {
    throw new Error(error.message);
  }
};
