import PropTypes from "prop-types";

const Products = ({ pokemon, error, loading }) => {
  if (error)
    return (
      <div>
        <p>Loading error!</p>
      </div>
    );

  if (loading)
    return (
      <div>
        <p>Loading info...</p>
      </div>
    );

  return (
    <div>
      <p>This is the products route!</p>
      <p>Pokemon have been loaded!</p>
      {pokemon.map((mon) => (
        <p key={mon.id}>{mon.name}</p>
      ))}
    </div>
  );
};

Products.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.instanceOf(Error),
  loading: PropTypes.bool.isRequired,
};

export default Products;
