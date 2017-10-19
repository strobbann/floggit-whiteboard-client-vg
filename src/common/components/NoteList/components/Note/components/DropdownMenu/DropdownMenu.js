import React from 'react';

import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import dropdownMenuProps from './DropdownMenu.props';

const DropdownMenu = (props) => {
  const handleClick = (info) => {
    switch (info.key) {
      case 'edit':
        props.isEdit();
        break;
      case 'remove':
        props.onRemove(props.note.id);
        break;
      case 'primary':
        props.onChangeColor({ id: props.note.id, title: props.note.title, infoList: props.note.infoList, color: 'primary', whiteboardId: props.note.whiteboardId });
        break;
      case 'secondary':
        props.onChangeColor({ id: props.note.id, title: props.note.title, infoList: props.note.infoList, color: 'secondary', whiteboardId: props.note.whiteboardId });
        break;
      case 'tertiary':
        props.onChangeColor({ id: props.note.id, title: props.note.title, infoList: props.note.infoList, color: 'tertiary', whiteboardId: props.note.whiteboardId });
        break;
      case 'quaternary':
        props.onChangeColor({ id: props.note.id, title: props.note.title, infoList: props.note.infoList, color: 'quaternary', whiteboardId: props.note.whiteboardId });
        break;
      default:
        break;
    }
  };
  return (
    <div className="dropDown">
      <Menu
        openSubMenuOnMouseEnter={false}
        multiple
        onClick={handleClick}
      >
        <SubMenu>
          {props.titles.map((title) => {
            if (title.includes('color')) {
              return (
                <SubMenu className="color-sub-menu" key={title} title={title}>
                  {props.colors.map(color => (
                    <MenuItem key={color} className={`${color} coloritem`} />
                  ))}
                </SubMenu>
              );
            }
            return (
              <MenuItem key={title}>{title}</MenuItem>
            );
          })}
        </SubMenu>
      </Menu>
    </div>
  );
};

DropdownMenu.propTypes = dropdownMenuProps;

export default DropdownMenu;
