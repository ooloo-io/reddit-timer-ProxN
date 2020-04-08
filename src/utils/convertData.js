import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import config from '../constants/config';

const { days } = config;
dayjs.extend(isBetween);

const getTime = (date) => {
  const time = date.set('m', 0);
  return time.format('H');
};

const groupByDay = (posts) => {
  const results = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const post of posts) {
    const date = dayjs.unix(post.created_utc);
    const day = days[date.get('d')];
    const time = getTime(date);

    if (!results[day] || !results[day][time]) {
      results[day] = { ...results[day], [time]: [] };
    }

    results[day][time].push(post);
  }

  return results;
};

const sort2 = (posts) => {
  const sortedPosts = { ...posts };
  Object.keys(sortedPosts).sort((a, b) => a - b);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 24; i++) {
    if (!sortedPosts[i]) {
      sortedPosts[i] = [];
    }
  }

  return sortedPosts;
};

export default (posts) => {
  const groupedPosts = groupByDay(posts);

  const sorted = {};
  Object.keys(groupedPosts)
    .sort((a, b) => days.indexOf(a) - days.indexOf(b))
    .forEach((key) => {
      sorted[key] = sort2(groupedPosts[key]);
    });
  return sorted;
};
