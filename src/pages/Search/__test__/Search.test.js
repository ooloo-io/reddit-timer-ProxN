import React from 'react';
import timezone from 'timezone-mock';
import { Route, MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import axiosMock from 'axios';
import Search from '../index';
import Theme from '../../../styles/theme';
import posts from './posts.json';
import convertData from '../../../utils/convertData';

afterEach(cleanup);
beforeEach(() => {
  timezone.register('UTC');
});
jest.mock('axios');

const renderWithRouter = (component, subreddit) => render(
  <ThemeProvider theme={Theme}>
    <MemoryRouter initialEntries={[`/search/${subreddit}`]}>
      <Route path="/search/:subreddit">
        {component}
        &gt;
      </Route>
    </MemoryRouter>
  </ThemeProvider>,
);

it('Should show javascript on search input', async () => {
  const { getByTestId, findByTestId } = renderWithRouter(
    <Search />,
    'javascript',
  );

  const input = getByTestId('search-input');

  expect(input.value).toBe('javascript');

  await findByTestId('loader');
});

it('Should load data and check all boxes in heatmap', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: posts,
  });
  const convertedPosts = convertData(posts.data);

  const fakePostsCounts = [];
  convertedPosts.forEach((el) => {
    el.forEach((elm) => fakePostsCounts.push(elm.length));
  });

  const { findByTestId, findAllByTestId } = renderWithRouter(
    <Search />,
    'javascript',
  );

  const heatmap = await findByTestId('heatmap');

  const boxes = await findAllByTestId(/box-/);

  const boxesCounts = boxes.map((el) => +el.textContent);

  expect(boxesCounts).toEqual(fakePostsCounts);
  expect(heatmap).toHaveTextContent('All times are shown in your timezone');
  expect(axiosMock.get).toHaveBeenCalledTimes(2);
});

it('Should update url on button click and load data', async () => {
  axiosMock.get.mockResolvedValue({
    data: posts,
  });

  const { findByTestId, getByTestId } = renderWithRouter(
    <Search />,
    'javascript',
  );

  const input = await getByTestId('search-input');
  fireEvent.change(input, { target: { value: 'reactjs' } });
  expect(input.value).toBe('reactjs');
  fireEvent.click(getByTestId('search-button'));

  const heatmap = await findByTestId('heatmap');

  expect(heatmap).toHaveTextContent('All times are shown in your timezone');
  expect(axiosMock.get).toHaveBeenCalledTimes(4);
});

it('Should show table when box clicked', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: posts,
  });

  const { findByTestId, getByTestId } = renderWithRouter(
    <Search />,
    'javascript',
  );

  const box = await findByTestId('box-0-0');
  fireEvent.click(box);

  expect(getByTestId('table')).toHaveTextContent('JS13k Results');
  expect(axiosMock.get).toHaveBeenCalledTimes(5);
});

it('Should show error if there no data', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [],
  });

  const { findByTestId } = renderWithRouter(<Search />, 'javascript');

  const error = await findByTestId('error');

  expect(error).toHaveTextContent('javascript');
  expect(axiosMock.get).toHaveBeenCalledTimes(6);
});
