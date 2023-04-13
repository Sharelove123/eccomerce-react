export const reducer4 = (state = false, action) => {
    switch (action.type) {
      case 'showsnackbarstate':
        state = action.payload ;
        return state;
      default:
        return state;
    }
  };