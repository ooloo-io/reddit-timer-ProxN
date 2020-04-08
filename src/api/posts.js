import axios from 'axios';
import dayjs from 'dayjs';
import config from '../constants/config';
import convertData from '../utils/convertData';

export default async (subreddit) => {
  try {
    const size = 500;
    const date = dayjs()
      .subtract(1, 'year')
      .unix();
    const query = `?subreddit=${subreddit}&size=${size}&sort=desc&sort_type=score&after=${date}`;
    const URL = `${config.BASE_URL}search/submission/${query}`;
    const res = await axios.get(URL);

    const convertedData = convertData(res.data.data);
    return convertedData;
  } catch (error) {
    return error;
  }
};
