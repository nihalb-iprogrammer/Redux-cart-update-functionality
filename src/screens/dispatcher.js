
import { setProducts } from './action';

export const manageCount = () => {
  return async (dispatch) => {
    try {
      // Static product data
      const result = [
        { id: 1, name: 'Goldstar', image: require('../assets/Golddstar.jpeg') ,price:120},
        { id: 2, name: 'Nike', image: require('../assets/Nike.jpeg'),price:122 },
        { id: 3, name: 'Puma', image: require('../assets/puma.jpeg'), price:124},
        { id: 4, name: 'Reebok', image: require('../assets/Reebok.jpeg'),price:126 },
        { id: 5, name: 'Mochi', image: require('../assets/mochi.jpeg'),price:128 },
      ];

      // Dispatch the static products to the store
      dispatch(setProducts(result));
    } catch (error) {
      console.log("error", error);
    }
  };
};
