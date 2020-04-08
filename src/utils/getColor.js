const colors = {
  0: '#e0e592',
  1: '#aed396',
  2: '#a9d194',
  3: '#a0ce93',
  4: '#99cd94',
  5: '#8cc894',
  6: '#5eb391',
  7: '#5db492',
  8: '#5cb391',
  9: '#5aad8c',
  10: '#3984a3',
};

export default (totalPosts) => (totalPosts >= 10 ? colors[10] : colors[totalPosts]);
