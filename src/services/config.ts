const { VITE_APP_ENV, VITE_BASE_API_URL  } = import.meta.env;

export const getToken = () => {
  const { token } = JSON.parse(localStorage.getItem("auth") ?? "").data ?? "";
  return token;
}

export const baseURL = VITE_BASE_API_URL;
export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
};