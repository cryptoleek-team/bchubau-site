import axios from "axios";

export const getEventsData = async () => {
  const url = "/events";

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};