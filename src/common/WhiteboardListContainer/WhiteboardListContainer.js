import { connect } from 'react-redux';

import WhiteboardListWrapper from './WhiteboardListWrapper';

import { addWhiteBoard, isAdd, isAdded } from '../../reduxStore/config/whiteboards';

const mapStateToProps = state => ({
  whiteboards: state.whiteboards.whiteboards,
  isAdd: state.whiteboards.isAdd,
});

const mapDispatchToProps = dispatch => ({
  handleAddWhiteboard: (whiteboard) => {
    dispatch(addWhiteBoard(whiteboard));
    dispatch(isAdded());
  },
  isAddWhiteBoard: () => {
    dispatch(isAdd());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardListWrapper);
