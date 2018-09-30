import { Tshirt } from './models/tshirt'
import { SELECT_TSHIRT, GET_TSHIRT_LIST, FILTER_TSHIRT_LIST, GET_SIZE_LIST, GET_COLOR_LIST, GET_SELECTED_SIZE_LIST, GET_SELECTED_COLOR_LIST } from './actions/types'

export interface IAppState {
  tshirtList: Tshirt[],
  tshirtListFiltered: Tshirt[],
  sizeList: String[],
  colorList: String[],
  selectedSizeList: String[],
  selectedColorList: String[],
  selectedTshirt: Tshirt
}

export const INITIAL_STATE: IAppState = {
  tshirtList: [],
  tshirtListFiltered: [],
  sizeList: [],
  colorList: [],
  selectedSizeList: [],
  selectedColorList: [],
  selectedTshirt: null
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
        default : return state
    }
}