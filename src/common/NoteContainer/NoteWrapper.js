import React from 'react';

import NoteList from '../components/NoteList';
import WhiteboardWrapperProps from './NoteWrapper.props';
import InfoComponent from '../components/Info';
import AddComponent from '../components/Add';

const NoteWrapper = props => (
  <div className="NoteContainer-wrapper">
    <InfoComponent header="Floggit Whiteboard" logo="" user={'username'} department={'DreamierTeam'} />
    <AddComponent
      onAdd={props.handleAdd}
      onAddInfoListItem={props.handleOnAddInfoListItem}
      infoListItems={props.infoListItems}
      isEdit={false}
      onRemoveInfoListItem={props.handleOnRemoveInfoListItem}
      idParams={props.idParams}
    />
    <NoteList
      notes={props.notes}
      onRemove={props.handleRemove}
      onSave={props.handleUpdateText}
      onChangeColor={props.handleUpdateColor}
      onAddInfoListItem={props.handleOnAddInfoListItem}
      idParams={props.idParams}
    />
  </div>
);

NoteWrapper.propTypes = WhiteboardWrapperProps;

export default NoteWrapper;
