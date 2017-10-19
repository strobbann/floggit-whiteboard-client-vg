const ADD_WHITEBOARD = 'ADD_WHITEBOARD';
const IS_ADD = 'IS_ADD';
const IS_ADDED = 'IS_ADDED';

const initalstate = {
  whiteboards: [],
  isAdd: false,
};

const reducer = (state = initalstate, action) => {
  switch (action.type) {
    case ADD_WHITEBOARD:
      return { ...state,
        whiteboards: [...state.whiteboards, {
          id: String(state.whiteboards.length + 1),
          name: action.data.name }] };
    case IS_ADD:
      return { ...state, isAdd: true };
    case IS_ADDED:
      return { ...state, isAdd: false };
    default:
      break;
  }
  return state;
};

const addWhiteBoard = whiteBoard => ({
  type: ADD_WHITEBOARD,
  data: {
    name: whiteBoard.name,
  },
});

const isAdd = () => ({
  type: IS_ADD,
});

const isAdded = () => ({
  type: IS_ADDED,
});

export { addWhiteBoard, isAdd, isAdded };
export default reducer;
