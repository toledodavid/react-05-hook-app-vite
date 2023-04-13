import { useFetch } from '../hooks/useFetch';



export const MultipleCustomHooks = () => {

  const {data, isLoading, hasError} = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/1');

  // console.log({data, isLoading, hasError});

  const {quote, author} = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        (isLoading) ?
          (
            <div className='alert alert-info text-center'>
              Loading...
            </div>
          )
          :
          (
            <figure className='text-end'>
              <blockquote className='blockquote'>
                <p>{quote}</p>
              </blockquote>
              <figcaption className='blockquote-footer'>
                <cite title='David'>{author}</cite>
              </figcaption>
            </figure>
          )
      }


      <button className='btn btn-primary'>Next quote</button>

    </>
  );
}