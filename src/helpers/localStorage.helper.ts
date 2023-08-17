const LS_KEY = 'hacc_token';

export const getTokenFromLocalStorage = (): string => {
  const data = localStorage.getItem(LS_KEY);
  const token: string = data ? JSON.parse(data) : '';

  return token;
};

export const setTokenToLocalStorage = (token: string): void => {
  localStorage.setItem(LS_KEY, JSON.stringify(token));
};

export const removeTokenFromLocalStorage = (): void => {
  localStorage.removeItem(LS_KEY);
};
