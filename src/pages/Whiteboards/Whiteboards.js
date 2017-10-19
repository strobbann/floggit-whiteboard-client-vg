import React from 'react';
import WhiteBoardListContainer from '../../common/WhiteboardListContainer';
import WhiteboardsProps from './Whiteboards.props';

const Whiteboards = props => (
  <WhiteBoardListContainer pushHistory={props.history.push} />
);

Whiteboards.propTypes = WhiteboardsProps;

export default Whiteboards;
