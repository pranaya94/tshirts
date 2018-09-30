import { Tshirt } from './models/tshirt'
import { Cart } from './models/cart'
import { 
  SELECT_TSHIRT,
  GET_TSHIRT_LIST,
  FILTER_TSHIRT_LIST,
  GET_SIZE_LIST,
  GET_COLOR_LIST,
  GET_SELECTED_SIZE_LIST,
  GET_SELECTED_COLOR_LIST,
  ADD_ITEM_TO_CART,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM_QTY } from './actions/types'

export interface IAppState {
  tshirtList: Tshirt[],
  tshirtListFiltered: Tshirt[],
  sizeList: String[],
  colorList: String[],
  selectedSizeList: String[],
  selectedColorList: String[],
  selectedTshirt: Tshirt,
  cart: Cart[],
  cartQuantity: number,
  cartPrice: number
}

export const INITIAL_STATE: IAppState = {
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

function findUnique(field,array){
  let uniqueList = []
  for(let item of array){
    if(!uniqueList.includes(item[field])){
      uniqueList.push(item[field])
    }      
  }
  return(uniqueList)
}

export function rootReducer(state: IAppState, action): IAppState {
    let cart
    let cartQuantity
    let cartPrice
    switch (action.type) {
        case GET_TSHIRT_LIST:
            return({
              ...state,
              tshirtList: action.tshirtList,
              tshirtListFiltered: action.tshirtList
            })
        case SELECT_TSHIRT:
            let index = state.tshirtList.findIndex(tshirt => tshirt.id === Number(action.id))
            return({
              ...state,
              selectedTshirt: state.tshirtList[index]
            })
        case GET_SIZE_LIST:
            return({
              ...state,
              sizeList: findUnique('size',state.tshirtList)
            })
        case GET_COLOR_LIST:
            return({
              ...state,
              colorList: findUnique('color',state.tshirtList)
            })
        case GET_SELECTED_SIZE_LIST:
            return({
              ...state,
              selectedSizeList: action.selectedSizeList
            })
        case GET_SELECTED_COLOR_LIST:
            return({
              ...state,
              selectedColorList: action.selectedColorList
            })
        case FILTER_TSHIRT_LIST:
            let tshirtListFiltered = state.tshirtList.filter(tshirt => 
              state.selectedSizeList.length === 0 || state.selectedSizeList.includes(tshirt.size) //get item if no size is selected or if it matches the size in filter
            )
            tshirtListFiltered = tshirtListFiltered.filter(tshirt => 
              state.selectedColorList.length === 0 || state.selectedColorList.includes(tshirt.color) //ditto
            )
            return({
              ...state,
              tshirtListFiltered
            })
        case ADD_ITEM_TO_CART:
            cart = state.cart.map(item => ({...item}))
            let indexCart = cart.findIndex(item => item.id === state.selectedTshirt.id)
            if(indexCart !== -1){ //if is already in cart increase buyQuantity
              cart[indexCart].buyQuantity++
            } else {
              cart.push({...state.selectedTshirt, buyQuantity: 1})
            }             
            cartQuantity = cart.reduce((acc,item) => acc + item.buyQuantity,0)
            cartPrice = cart.reduce((acc,item) => acc + Number(item.price)*item.buyQuantity,0)
            return({
              ...state,
              cart,
              cartQuantity,
              cartPrice
            })
        case REMOVE_CART_ITEM:
            cart = state.cart.filter(item => item.id !== action.id)
            cartQuantity = cart.reduce((acc,item) => acc + item.buyQuantity,0)
            cartPrice = cart.reduce((acc,item) => acc + Number(item.price)*item.buyQuantity,0)
            return({
              ...state,
              cart,
              cartQuantity,
              cartPrice
            })
        case UPDATE_CART_ITEM_QTY:        
            cart = state.cart.map(item => {
              if(item.id === action.updates.id){
                console.log({...item, buyQuantity: action.updates.qty})
                return({...item, buyQuantity: action.updates.qty})
              }
              return({...item})
            })
            console.log('cart after ',cart)
            cartQuantity = cart.reduce((acc,item) => acc + item.buyQuantity,0)
            cartPrice = cart.reduce((acc,item) => acc + Number(item.price)*item.buyQuantity,0)
            return({
              ...state,
              cart,
              cartQuantity,
              cartPrice
            })

        default : return state
    }
}