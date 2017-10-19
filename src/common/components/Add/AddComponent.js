import React from 'react';
import addComponentProps from './AddComponent.props';

const Add = (props) => {
  let inputTitle;
  let inputItem;
  let inputValues = [];
  const handleClick = () => {
    props.onAdd({ title: inputTitle.value, infoList: props.infoListItems, color: 'primary', whiteboardId: props.idParams });
    inputItem.value = '';
    inputTitle.value = '';
  };
  const handleClickInfoList = () => {
    props.onAddInfoListItem({ title: inputTitle.value, infoListItem: inputItem.value });
    inputItem.value = '';
    inputItem.focus();
  };

  const handleOnRemoveInfoListItem = index => () => {
    props.onRemoveInfoListItem(index);
  };

  const handleOnSaveInfoListItem = (index, values) => () => {
    props.onSaveInfoListItem(index, values);
  };
  return (
    <div className="add-component note">
      <input
        className="add-component-title"
        type="text"
        placeholder="Title"
        defaultValue={props.title}
        ref={(c) => { inputTitle = c; }}
      />
      <button className="add-btn" onClick={handleClick}>Save</button>
      <input
        className="add-component-item"
        type="text"
        placeholder="Add new item..."
        name="inputItem"
        ref={(c) => { inputItem = c; }}
      />
      <button className="add-info-item-btn" onClick={handleClickInfoList}>+</button>
      <ul className="edit-note">
        {props.infoListItems.map((infoItem, index) => {
          if (props.isEdit) {
            return (<div>
              <input
                defaultValue={infoItem}
                // eslint-disable-next-line
                key={infoItem+index}
                ref={c => inputValues.push(c)}
                type="text"
              />
              <button
                className="add-info-item-btn"
                onClick={handleOnSaveInfoListItem(index, inputValues)}
              >+</button>
              <button className="remove-btn" onClick={handleOnRemoveInfoListItem(index)}>-</button>
            </div>
            );
          }
          return (<div>
            <input
              key={infoItem}
              defaultValue={infoItem}
              ref={(c) => { inputValues = c; }}
              readOnly="readonly"
            />
            <button className="remove-btn" onClick={handleOnRemoveInfoListItem(index)}>-</button>
          </div>);
        },
        )
        }
      </ul>
    </div>
  );
};

Add.propTypes = addComponentProps;

export default Add;
