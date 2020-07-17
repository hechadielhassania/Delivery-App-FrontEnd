const ID_API_TOKEN = "token";

export const getToken = () => {
  return localStorage.getItem(ID_API_TOKEN);
};

export const setToken = token => {
  localStorage.setItem(ID_API_TOKEN, token);
};

export const unsetToken = () => {
  localStorage.removeItem(ID_API_TOKEN);
};

export default { getToken, setToken, unsetToken };
