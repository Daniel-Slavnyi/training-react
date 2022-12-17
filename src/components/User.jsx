import PropTypes from 'prop-types';
import defaultIm from './defaultIm.jpg';

export default function User({
  url = defaultIm,
  name = 'userName',
  title,
  price,
}) {
  return (
    <div>
      <img src={url} alt={name} width="430" />
      <h2>User: {name}</h2>
      <p>Position: {title}</p>
      <p>Price: {price} dol</p>
    </div>
  );
}

User.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};
