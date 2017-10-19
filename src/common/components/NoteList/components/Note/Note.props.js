import PropTypes from 'prop-types';

const props = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    infoList: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string,
    whiteboardId: PropTypes.string.isRequired,
  }),
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  onAddInfoListItem: PropTypes.func,
};

export default props;
