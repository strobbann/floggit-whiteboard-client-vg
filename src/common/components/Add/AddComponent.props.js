import PropTypes from 'prop-types';

const props = {
  title: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
  onAddInfoListItem: PropTypes.func.isRequired,
  infoListItem: PropTypes.arrayOf(PropTypes.string),
  isEdit: PropTypes.bool,
  onRemoveInfoListItem: PropTypes.func,
  onSaveInfoListItem: PropTypes.func,
  idParams: PropTypes.string,
};

export default props;
