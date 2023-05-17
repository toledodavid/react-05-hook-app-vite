import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';


describe('Tests for useCounter custom hook', () => {

  test('Should return the default values', () => {
    const {result} = renderHook(() => useCounter());
    const {counter, increment, decrement, reset} = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('Should return counter value with a value of 100', () => {
    const {result} = renderHook(() => useCounter(100));
    const {counter} = result.current;

    expect(counter).toBe(100);
  });

});