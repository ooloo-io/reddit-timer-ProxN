import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import {
  render,
  cleanup,
  waitForElementToBeRemoved,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import axiosMock from 'axios';
import Search from '../index';
import Theme from '../../../styles/theme';
import posts from './posts.json';

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

it('Should show javascript on search input', async () => {
  const { getByTestId } = renderWithRouter(<Search />, 'javascript');

  const input = getByTestId('search-input');

  expect(input.value).toBe('javascript');

  await waitForElementToBeRemoved(() => getByTestId('loader'));
});

it('Should load data and show heatmap', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: posts,
  });

  const { getByTestId } = renderWithRouter(<Search />, 'javascript');

  const heatmap = await waitFor(() => getByTestId('heatmap'));

  expect(heatmap).toHaveTextContent('All times are shown in your timezone');
  expect(axiosMock.get).toHaveBeenCalledTimes(2);
});

it('Should update url on button click and load data', async () => {
  axiosMock.get.mockResolvedValue({
    data: posts,
  });

  const { getByTestId } = renderWithRouter(<Search />, 'javascript');

  const input = await getByTestId('search-input');
  fireEvent.change(input, { target: { value: 'reactjs' } });
  expect(input.value).toBe('reactjs');
  fireEvent.click(getByTestId('search-button'));

  const heatmap = await waitFor(() => getByTestId('heatmap'));

  expect(heatmap).toHaveTextContent('All times are shown in your timezone');
  expect(axiosMock.get).toHaveBeenCalledTimes(4);
});

it('Should show table when box clicked', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: posts,
  });

  const { getByTestId } = renderWithRouter(<Search />, 'javascript');

  const box = await waitFor(() => getByTestId('0-0'));
  fireEvent.click(box);

  expect(getByTestId('table')).toHaveTextContent('Flood fill');
  expect(axiosMock.get).toHaveBeenCalledTimes(5);
});

it('Should show error if there no data', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [],
  });

  const { getByTestId } = renderWithRouter(<Search />, 'javascript');

  const error = await waitFor(() => getByTestId('error'));
  expect(error).toHaveTextContent('javascript');
  expect(axiosMock.get).toHaveBeenCalledTimes(6);
});
