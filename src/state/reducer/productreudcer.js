export const reducer1 = (state ="initial", action) => {
    switch (action.type) {
      case 'selectproduct':
        state = action.payload ;
        return state;
      default:
        return state;
    }
  };
  