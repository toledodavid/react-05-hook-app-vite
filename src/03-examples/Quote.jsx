import PropTypes from 'prop-types';

export const Quote = ({quote, author}) => {
  return (
    <figure className='text-end'>
      <blockquote className='blockquote'>
        <p>{quote}</p>
      </blockquote>
      <figcaption className='blockquote-footer'>
        <cite title='David'>{author}</cite>
      </figcaption>
    </figure>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}