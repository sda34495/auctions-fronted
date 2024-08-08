import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getData = async (endpoint: string, token: string) => {
  try {
    if (!token) return;
    const response = await axiosInstance.get(endpoint, {
      headers: {
        Authorization: `Bearer ` + token,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (endpoint: string, data: object, token: string) => {
  try {
    if (!token) return;
    const response = await axiosInstance.post(endpoint, data, {
      headers: {
        Authorization: `Bearer ` + token,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
const patchBase64Image = async (endpoint: string, data, token: string) => {
  if (!token) return;
  try {
    const response = await axiosInstance.patch(endpoint, data, {
      headers: {
        Authorization: `Bearer ` + token,
        "Content-Type": "text/plain",
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
const patchData = async (endpoint: string, data) => {
  const token = localStorage.getItem("token");
  if (!token) return;
  try {
    const response = await axiosInstance.patch(endpoint, data, {
      headers: {
        Authorization: `Bearer ` + JSON.parse(token),
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export { getData, patchBase64Image, postData, patchData };
