import { act, renderHook } from '@testing-library/react';
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

  test('Should increment the counter value', () => {
    const {result} = renderHook(() => useCounter(100));
    const {increment} = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  });

  test('Should decrement the counter value', () => {
    const {result} = renderHook(() => useCounter(100));
    const {decrement} = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test('Should reset value to the initial value', () => {
    const {result} = renderHook(() => useCounter(100));
    const {increment, reset} = result.current;

    act(() => {
      increment(2);
      reset();
    });

    expect(result.current.counter).toBe(100);
  });

});