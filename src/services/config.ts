const { VITE_APP_ENV, VITE_BASE_API_URL  } = import.meta.env;

export const getToken = () => {
  const itemFound = localStorage.getItem('auth') ?? "{}";
  const { token } = JSON.parse(itemFound).data ?? "";
  return token;
}

export const baseURL = VITE_BASE_API_URL;
export const getHeaders = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  }
};