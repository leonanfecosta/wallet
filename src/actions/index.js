export const SET_EMAIL = 'SET_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    payload: email,
  };
}

export function setCurrencies(currencies) {
  return {
    type: SET_CURRENCIES,
    payload: currencies,
  };
}

export const fetchCurrencies = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');
    dispatch(setCurrencies(currencies));
  } catch (error) {
    console.log(error);
  }
};
