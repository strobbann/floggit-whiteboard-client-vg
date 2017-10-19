import PropTypes from 'prop-types';

const props = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    infoList: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string,
  }),
  titles: PropTypes.arrayOf(PropTypes.string.isRequired),
  colors: PropTypes.arrayOf(PropTypes.string.isRequired),
  onRemove: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
};

export default props;
