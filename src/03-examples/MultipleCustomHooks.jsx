import { useCounter, useFetch } from '../hooks';
import { Loading, Quote } from './';



export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter(1);

  const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  // console.log({data, isLoading, hasError});
  const {quote, author} = !!data && data[0];


  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        (isLoading) ?
          <Loading />
        :
          <Quote quote={quote} author={author} />
      }


      <button className='btn btn-primary' disabled={isLoading} onClick={() => increment()}>Next quote</button>

    </>
  );
}