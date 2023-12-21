const ERROR_FETCHING_GREETING = 'ERROR_FETCHING_GREETING';
export const GET_RANDOM_GREETING = 'GET_RANDOM_GREETING';

export function getRandomGreeting() {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/random');
      const data = await response.json();
      dispatch({ type: GET_RANDOM_GREETING, payload: data.content });
    } catch (error) {
      dispatch({ type: ERROR_FETCHING_GREETING, payload: error.message });
    }
  };
}
