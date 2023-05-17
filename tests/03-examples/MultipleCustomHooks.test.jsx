import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';

describe('Tests for <MultipleCustomHooks /> component', () => {

  test('Should show the default initial values in the component', () => {
    render(<MultipleCustomHooks />);
    // screen.debug();

    const nextButton = screen.getByRole('button', {name: 'Next quote'});

    expect(screen.getByText('BreakingBad Quotes'));
    expect(screen.getByText('Loading...'));
    expect(nextButton.disabled).toBeTruthy();
  });

});