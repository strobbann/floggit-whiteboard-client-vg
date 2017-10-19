import React from 'react';
import whiteboardListWrapperProps from './WhiteboardListWrapper.props';

const WhiteboardListWrapper = (props) => {
  let input;
  const handleClick = () => {
    props.handleAddWhiteboard({ name: input.value });
  };
  const handleOnRedirect = id => () => {
    props.pushHistory(`whiteboards/${id}`);
  };
  const handleOnAddWhiteboard = () => {
    props.isAddWhiteBoard();
  };

  return (
    <div>
      <ul>
        {props.whiteboards.map(whiteboard =>
          (<button
            key={whiteboard.name}
            onClick={handleOnRedirect(whiteboard.id)}
          >
            {whiteboard.name}
          </button>
          ))}
      </ul>
      {props.isAdd === false &&
      <button
        className="button-add-whiteboard"
        onClick={handleOnAddWhiteboard}
      >
        Add Whiteboard
      </button>
      }
      { props.isAdd &&
        <div>
          <input ref={(c) => { input = c; }} />
          <button onClick={handleClick}>Add</button>
        </div>
      }
    </div>
  );
};

WhiteboardListWrapper.propTypes = whiteboardListWrapperProps;

export default WhiteboardListWrapper;
