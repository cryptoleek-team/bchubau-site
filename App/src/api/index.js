import axios from "axios";

export const getEventsData = async () => {
  const url = "http://127.0.0.1:5000/events";

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};