import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';


describe('Tests for useForm custom hook', () => {

  const initialForm = {
    name: 'David',
    email: 'david@gmail.com'
  }

  test('Should return the default values', () => {
    const {result} = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    });
  });

  test('Should change the name value from the form', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const {onInputChange} = result.current;

    const newValue = 'Juan';

    const target = {name: 'name', value: newValue};

    act(() => {
      onInputChange({target});
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState).toEqual({...initialForm, name: newValue});
  });

  test('Should reset the form', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const {onInputChange, onResetForm} = result.current;

    const newValue = 'Juan';
    const target = {name: 'name', value: newValue};

    act(() => {
      onInputChange({target});
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState).toEqual(initialForm);
  });

});