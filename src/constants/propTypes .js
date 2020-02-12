import PropTypes from 'prop-types'

export const childrenPropType = PropTypes.oneOfType({
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      size: PropTypes.arrayOf(PropTypes.string),
      images: PropTypes.arrayOf(PropTypes.node),
      rating: PropTypes.number,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      color: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
})
