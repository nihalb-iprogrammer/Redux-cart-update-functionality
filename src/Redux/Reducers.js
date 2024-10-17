import {combineReducers} from 'redux';
import cartReducer from '../screens/reducer';


const appReducer = combineReducers({
    cartReducer: cartReducer,

  
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;