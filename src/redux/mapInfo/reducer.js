import { USER_SEARCH_INFO } from './types';

const initState = {
  userSearchResults: [],
};

const stepfirstSuccess = (state, data) => {
    console.log('stepfirstSuccess', data)
    return {
        ...state,
        userSearchResults: data,
      };
};

const mapInfoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_SEARCH_INFO: {
      return stepfirstSuccess(state, payload);
    }
    default:
      return state;
  }
};

export default mapInfoReducer;
