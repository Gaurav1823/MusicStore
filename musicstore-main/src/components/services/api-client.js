// import axios from 'axios'
// export async function getSongs(artistName){
//     const URL=`https://itunes.apple.com/search?term=${artistName}&country=in`
//     const response=await axios.get(URL)
//     console.log(response.data);
//     return response.data.results

// }
import axios from "axios";
//http call (http methods)
//get - read
//post - write
//put - update
//delete - remove
//crud operations
export const networkoperations = {
  async getSongs(artistName) {
    const URL = `https://itunes.apple.com/search?term=${artistName}&country=in`;
    const response = await axios.get(URL);
    console.log(response.data);
    return response.data.results;
  },
  async get(URL) {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (err) {
      throw err;
    }
  },
  async post(URL, data) {
    try {
      const response = await axios.post(URL, data);
      return response;
    } catch (err) {
      throw err;
    }
  },

};
