import { GlobalState } from '../context/GlobalState';
import { isBrowser } from './isBrowser';

export const LOCALSTORAGE_GLOBAL_STATE = 'LOCALSTORAGE_GLOBAL_STATE';

const storeStateIntoLocalstorage = (state: GlobalState) => {
  if (isBrowser) {
    localStorage.setItem(LOCALSTORAGE_GLOBAL_STATE, JSON.stringify(state));
  }
};

const loadStateFromLocalstorage = () => {
  if (isBrowser) {
    const data = localStorage.getItem(LOCALSTORAGE_GLOBAL_STATE);
    if (data) {
      const state: GlobalState = JSON.parse(data);
      return state;
    }
  }
};

export { storeStateIntoLocalstorage, loadStateFromLocalstorage };
