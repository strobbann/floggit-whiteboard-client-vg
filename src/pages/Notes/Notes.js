import React from 'react';

import NoteContainer from '../../common/NoteContainer';
import NotesProps from './Notes.props';

const Notes = props => (
  <NoteContainer idParams={props.match.params.id} />
);

Notes.propTypes = NotesProps;

export default Notes;
