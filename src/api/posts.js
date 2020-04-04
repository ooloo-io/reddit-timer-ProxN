import axios from 'axios';
import dayjs from 'dayjs';
import config from '../constants/config';

export default async (subreddit) => {
  try {
    const size = 500;
    const date = dayjs()
      .subtract(1, 'year')
      .unix();
    const query = `?subreddit=${subreddit}&size=${size}&sort=desc&sort_type=score&after=${date}`;
    const URL = `${config.BASE_URL}search/submission/${query}`;
    const res = await axios.get(URL);
    return res.data;
  } catch (error) {
    return error;
  }
};
