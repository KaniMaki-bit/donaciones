import axios from 'axios';

const backendUrl = process.env.PG_HOST;
const port = process.env.PG_PORT;


export const getHistorialDonaciones = async (id_organizacion) => {
    try {
      const options = {
        method: "get",
        url: `http://${backendUrl}:${port}/recordDonatives?idOrg=${id_organizacion}`
      };
  
      const response = await axios(options);
      const info = response.json();
  
      return info;
    } catch (error) {
      throw error;
    }
  };