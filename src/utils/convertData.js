import dayjs from 'dayjs';

const getHour = (date) => parseInt(date.format('H'), 10);

const groupByDay = (posts) => {
  const results = [];

  posts.forEach((post) => {
    const date = dayjs.unix(post.created_utc);
    const day = date.get('d');
    const hour = getHour(date);

    if (!results[day]) {
      results[day] = Array.from({ length: 24 }, () => []);
    }

    results[day][hour].push(post);
  });

  return results;
};

export default (posts) => groupByDay(posts);
