import axios from "axios";

export const fetchPlanets = async () => {
    try {
      const BASE_URL = import.meta.env.VITE_APP_BASE_URL + "/planets";
      const response = await axios.get(BASE_URL);
      console.log("planets_url:", BASE_URL);
      if (response.status === 200) {
        console.log("Planets loaded:",response.data.length);
        // loadPlanets(response.data);
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
