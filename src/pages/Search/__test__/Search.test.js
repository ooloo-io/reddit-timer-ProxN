import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import {
  render,
  cleanup,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import axiosMock from 'axios';
import Search from '../index';
import Theme from '../../../styles/theme';

jest.mock('axios');
afterEach(cleanup);

const renderWithRouter = (component, subreddit) => ({
  ...render(
    <ThemeProvider theme={Theme}>
      <MemoryRouter initialEntries={[`/search/${subreddit}`]}>
        <Route path="/search/:subreddit">{component}</Route>
      </MemoryRouter>
    </ThemeProvider>,
  ),
});

const fakeData = () => {
  const post = {
    title: 'testing',
    full_link: 'link',
    created_utc: 1586823316,
    score: 50,
    num_comments: 50,
    author: 'Ayoub',
  };
  const hours = Array.from({ length: 24 }, (v, i) => [i === 0 ? post : { i }]);
  const data = Array.from({ length: 7 }, () => hours);
  return data;
};

it('Should show javascript on search input', async () => {
  const { getByTestId } = renderWithRouter(<Search />, 'javascript');

  const input = getByTestId('search-input');

  expect(input.value).toBe('javascript');

  await waitForElementToBeRemoved(() => getByTestId('loader'));
});

it('Should load data and remove loader', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: fakeData(),
  });

  const { getByTestId } = renderWithRouter(<Search />, 'javascript');

  await waitForElementToBeRemoved(() => getByTestId('loader'));
  const heatmap = getByTestId('heatmap');

  expect(heatmap).toHaveTextContent('All times are shown in your timezone');
  expect(axiosMock.get).toHaveBeenCalledTimes(2);
});

it('Should update url on button click and load data', async () => {
  axiosMock.get.mockResolvedValue({
    data: fakeData(),
  });

  const { getByTestId } = renderWithRouter(<Search />, 'javascript');

  await waitForElementToBeRemoved(() => getByTestId('loader'));

  const input = getByTestId('search-input');
  fireEvent.change(input, { target: { value: 'reactjs' } });
  expect(input.value).toBe('reactjs');
  fireEvent.click(getByTestId('search-button'));

  await waitForElementToBeRemoved(() => getByTestId('loader'));
  const heatmap = getByTestId('heatmap');

  expect(heatmap).toHaveTextContent('All times are shown in your timezone');
  expect(axiosMock.get).toHaveBeenCalledTimes(4);
});

it('Should show table when box clicked', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: fakeData(),
  });

  const { getByTestId } = renderWithRouter(<Search />, 'javascript');

  await waitForElementToBeRemoved(() => getByTestId('loader'));

  fireEvent.click(getByTestId('0-0'));

  expect(getByTestId('table')).toHaveTextContent('testing');
  expect(axiosMock.get).toHaveBeenCalledTimes(5);
});

it('Should show error if there no data', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [],
  });

  const { getByTestId } = renderWithRouter(<Search />, 'javascript');

  await waitForElementToBeRemoved(() => getByTestId('loader'));

  expect(getByTestId('error')).toHaveTextContent('javascript');
  expect(axiosMock.get).toHaveBeenCalledTimes(6);
});
