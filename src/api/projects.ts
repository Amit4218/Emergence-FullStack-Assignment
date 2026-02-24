import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getProjects = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/projects/`);
    if (response.status == 200) {
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
    return;
  }
};

export const getChatBotResponse = async (question: string) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/chatbot/`, {
      question: question,
    });
    if (response.status == 200) {
      return response.data.data.response;
    }
  } catch (error) {
    console.error(error);
    return;
  }
};
