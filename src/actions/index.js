import cities from '../cities';

export function setCities() {
  // simulate a DB

  return {
    type: 'SET_CITIES',
    payload: cities
  };
};
