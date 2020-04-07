import elReino from './elReino';
import elDuende from './elDuende';

// const getItems = async searchTerm => {

//   const items = [];

//   return items;
// };

const getItems = async item => {
  const items = await elReino(item);

  return items;
};

export default getItems;