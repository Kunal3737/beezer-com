const initialState = {
  usersData: [],
  usersError: '',
  usersAppData: [],
  usersAppError: ''
};

const rootReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "USERS_LIST":
      return {
        ...state,
        usersData: action.payload,
      };
      case "USERS_LIST_ERROR":
        return {
          ...state,
          usersError: action.payload
        }
      case "USERS_APP_LIST":
        return {
          ...state,
          usersAppData: action.payload
        }
        case "USERS_APP_ERROR":
          return {
            ...state,
            usersAppError: action.payload
          }
          // case 'APPS_RATING':
          //   return {
          //     ...state,
          //   }
    default:
      return state;
  }
};

export default rootReducer;
