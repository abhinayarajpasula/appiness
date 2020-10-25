import axios from "axios";

export const requestDashboardData = async () => {
  const config = {
    url: "http://localhost:5000/data"
  };

  try {
    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.log(error);
  }
};
