import React from 'react';

import noteListProps from './NoteList.props';
import Note from './components/Note';

const NoteList = props => (
  <ul className="notes">
    {
      props.notes.filter(item => (props.idParams === item.whiteboardId))
        .map(note => (
          <Note
            key={note.id}
            note={note}
            onRemove={props.onRemove}
            onSave={props.onSave}
            onChangeColor={props.onChangeColor}
            onAddInfoListItem={props.onAddInfoListItem}
            idParams={props.idParams}
          />
        ))
    }
  </ul>
);
NoteList.propTypes = noteListProps;


export default NoteList;
