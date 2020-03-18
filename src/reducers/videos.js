function videos(state = {}, action) {
  // console.log('action.payload', action.payload);
  // console.log('action.type', action.type);
  switch (action.type) {
    case 'SET_CATEGORY_LIST':
      return {...state, ...action.payload};
    case 'SET_SUGGESTION_LIST':
      return {...state, ...action.payload};
    case 'SET_SELECTED_MOVIE':
      return {...state, selectedMovie: action.payload};
    default:
      return state;
  }
}
export default videos;
