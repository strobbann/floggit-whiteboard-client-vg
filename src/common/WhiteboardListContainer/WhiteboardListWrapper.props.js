import PropTypes from 'prop-types';

const props = {
  whiteboards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  isAdd: PropTypes.bool,
  isAddWhiteBoard: PropTypes.func,
  pushHistory: PropTypes.func.isRequired,
};

export default props;
