import axios from 'axios';

const fetch = async url => {
  const response = await axios.get(url);
  return response.data;
};

export default fetch;
