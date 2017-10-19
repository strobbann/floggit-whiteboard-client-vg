import PropTypes from 'prop-types';

const props = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    infoList: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string.isRequired,
    whiteboardId: PropTypes.string.isRequired,
  })),
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
  onAddInfoListItem: PropTypes.func,
  idParams: PropTypes.string,
};

export default props;
