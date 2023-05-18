import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');



describe('Tests for <MultipleCustomHooks /> component', () => {

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should show the default initial values in the component', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });

    render(<MultipleCustomHooks />);
    // screen.debug();

    const nextButton = screen.getByRole('button', {name: 'Next quote'});

    expect(screen.getByText('BreakingBad Quotes'));
    expect(screen.getByText('Loading...'));
    expect(nextButton.disabled).toBeTruthy();
  });

  test('Should show a quote', () => {
    useFetch.mockReturnValue({
      data: [{quote: 'Hello world', author: 'David'}],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks />);
    // screen.debug();

    const nextButton = screen.getByRole('button', {name: 'Next quote'});

    expect(screen.getByText('Hello world')).toBeTruthy();
    expect(screen.getByText('David')).toBeTruthy();
    expect(nextButton.disabled).toBeFalsy();
  });

  test('Should call the increment function', () => {
    useFetch.mockReturnValue({
      data: [{quote: 'Hello world', author: 'David'}],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', {name: 'Next quote'});
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });

});