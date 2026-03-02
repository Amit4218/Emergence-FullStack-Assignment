import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const sendContactMessage = async (
  name: string,
  email: string,
  message: string,
) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/api/projects/message`, {
      name,
      email,
      message,
    });
    return res.data.status;
  } catch (error) {
    console.error(error);
    return;
  }
};
