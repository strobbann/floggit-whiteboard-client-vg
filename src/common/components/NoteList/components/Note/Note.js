import React from 'react';

import noteProps from './Note.props';
import DropdownMenu from './components/DropdownMenu';
import AddComponent from '../../../Add';

class Note extends React.Component {
  static generateNote(note, onRemove, onChangeColor, onIsEdit) {
    return (
      <div className="notecontainer">
        <div className={`${note.color} note`}>
          <h3>
            {note.title}
          </h3>
          <DropdownMenu titles={['edit', 'remove', 'change color']} colors={['primary', 'secondary', 'tertiary', 'quaternary']} note={note} isEdit={onIsEdit} onRemove={onRemove} onChangeColor={onChangeColor} />
          <ul className="note-infolist">
            {note.infoList.map(info => (
              <li className="note-infoitem" key={info}>
                {info}
              </li>))}
          </ul>
        </div>
      </div>
    );
  }
  constructor() {
    super();
    this.state = {
      isEdit: false,
    };
    this.handleOnAdd = this.handleOnAdd.bind(this);
    this.handleOnRemoveInfoListItem = this.handleOnRemoveInfoListItem.bind(this);
    this.handleOnSaveInfoListItem = this.handleOnSaveInfoListItem.bind(this);
    this.handleIsEdit = this.handleIsEdit.bind(this);
    this.handleOnAddInfoListItem = this.handleOnAddInfoListItem.bind(this);
  }

  handleOnAddInfoListItem(values) {
    this.props.onSave({ id: this.props.note.id,
      title: this.props.note.title,
      infoList: [...this.props.note.infoList,
        values.infoListItem],
      whiteboardId: this.props.note.whiteboardId });
  }

  handleOnAdd(values) {
    this.props.onSave({ id: this.props.note.id,
      title: values.title,
      infoList: values.infoList,
      color: this.props.note.color,
      whiteboardId: this.props.note.whiteboardId });
    this.setState({ isEdit: false });
  }

  handleOnRemoveInfoListItem(indexValue) {
    const newInfoList = this.props.note.infoList.filter((item, index) => (index !== indexValue));
    this.props.onSave({ id: this.props.note.id,
      title: this.props.note.title,
      infoList: newInfoList,
      whiteboardId: this.props.note.whiteboardId });
  }

  handleOnSaveInfoListItem(indexValue, value) {
    const newInfoList = value.map((item, index) => ((index === indexValue) ?
      item.value : item.value));
    this.props.onSave({ id: this.props.note.id,
      title: this.props.note.title,
      infoList: newInfoList,
      whiteboardId: this.props.note.whiteboardId });
  }

  generateEditableNote(note,
    onAddInfoListItem,
    onAdd,
    onRemoveInfoListItem,
    onSaveInfoListItem) {
    return (
      <AddComponent
        className="note"
        title={note.title}
        infoListItems={note.infoList}
        onAdd={onAdd}
        onAddInfoListItem={onAddInfoListItem}
        isEdit={this.state.isEdit}
        onRemoveInfoListItem={onRemoveInfoListItem}
        onSaveInfoListItem={onSaveInfoListItem}
      />
    );
  }
  handleIsEdit() {
    this.setState({ isEdit: true });
  }
  render() {
    return (<div>
      <div>{this.state.isEdit}</div>
      {
        this.state.isEdit ? this.generateEditableNote(this.props.note,
          this.handleOnAddInfoListItem,
          this.handleOnAdd,
          this.handleOnRemoveInfoListItem,
          this.handleOnSaveInfoListItem) :
          Note.generateNote(this.props.note,
            this.props.onRemove,
            this.props.onChangeColor,
            this.handleIsEdit)
      }
    </div>
    );
  }
}
Note.propTypes = noteProps;

export default Note;
