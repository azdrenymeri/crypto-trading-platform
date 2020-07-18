import axios from '../index';

const getAllAssets = async () => {
 return await axios.get('https://api.coincap.io/v2/assets', {
    params: {
      limit: 30
    }
  });
};


export { getAllAssets };