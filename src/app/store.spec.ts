import { rootReducer } from './store'
import * as types from './actions/types'

describe('CartComponent', () => {

  let initialState

  beforeEach(() => {
    initialState = {
      tshirtList: [],
      tshirtListFiltered: [],
      sizeList: [],
      colorList: [],
      selectedSizeList: [],
      selectedColorList: [],
      selectedTshirt: null,
      cart: [],
      cartQuantity: 0,
      cartPrice: 0
    }
  });

  it('should store the sizeList in the app state', () => {
    const getSelectedSizeList = {
      type: types.GET_SELECTED_SIZE_LIST,
      selectedSizeList: ['S','M','L']
    }
    expect(rootReducer(initialState, getSelectedSizeList)).toEqual({
      ...initialState,
      selectedSizeList: ['S','M','L']
    });
  });

  let stateWithTwoShirts = { 
    ...initialState,
    tshirtList : [
      {
        id: 1,
        price: 100 ,
        picture: '/dummy/black/url',
        color: 'Black',
        size: 'S',
        name: 'Black Shirt',
        quantity: 4
      },
      {
        id: 2,
        price: 200 ,
        picture: '/dummy/white/url',
        color: 'White',
        size: 'L',
        name: 'White Shirt',
        quantity: 2
      }
    ]
  }

  it('should get the list of all available sizes', () => {
    const getSelectedSizeList = {
      type: types.GET_SIZE_LIST,
    }
    expect(rootReducer(stateWithTwoShirts, getSelectedSizeList)).toEqual({
      ...initialState,
      sizeList: ['S','L']
    });
  });

});
