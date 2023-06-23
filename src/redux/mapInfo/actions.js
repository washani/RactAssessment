import { USER_SEARCH_INFO } from './types';

export const serUserSearchInfo = (payload) => {
    console.log('serUserSearchInfo', payload)
  return {
    type: USER_SEARCH_INFO,
    payload,
  };
};