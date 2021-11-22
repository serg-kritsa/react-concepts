import ShopActionTypes from './shop.types';

import { loadShopData } from '../../firebase/firebase.utils.js';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollections = () => {
  return async (dispatch) => {
    dispatch(fetchCollectionsStart());
    
    try {
      const collections = await loadShopData();
      dispatch(fetchCollectionsSuccess(collections));
    } catch (error) {
      dispatch(fetchCollectionsFailure(error.message));      
    }
  };
};
