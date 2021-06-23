const initialState = {
    categorie: 0,
    goods: [],
    basket: {},
    delivery: 0
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORIE':
            return {...state, categorie: action.payload}
        case 'GET_GOODS':
            return {...state, goods: action.payload}
        case 'UPDATE_GOODS':{
           let arr = {}
            const newItems = state.goods.map((items)=>{
                return {...items, products: items.products.map((item)=>{
                    if(item.id === action.payload.id){
                        arr[action.payload.id] = {...item, count: item.count + 1, price: item.price * (1 + item.count)}
                        return {...item, count: item.count + 1}
                    }else{
                        return item
                    }
                })}
            })
            
            const changeItemInBasket = () => {
                const id = arr.id
                
                return state.basket[id] = arr
            }
            
            const updateItem = changeItemInBasket()
            delete state.basket[undefined]
            return {...state, goods: newItems , basket: {...state.basket, ...updateItem}}
        }

        case 'DELETE_GOODS':{
            let arr = {}
            const newItems = state.goods.map((items)=>{
                return {...items, products: items.products.map((item)=>{
                    if(item.id === action.payload.id){
                        arr[action.payload.id] = {...item, count: item.count - 1, price: item.price * (item.count-1)}
                        return {...item, count: item.count - 1}
                    }else{
                        return item
                    }
                })}
            })
            
            let id = action.payload.id
            
            const changeItemInBasket = () => {
                if(state.basket[id].count === 1){
                    delete state.basket[id]
                }else{
                return state.basket[id] = arr
            }}
            
            const updateItem = changeItemInBasket()


            delete state.basket[undefined]
            return {...state, goods: newItems , basket: {...state.basket, ...updateItem}}
        }
        case 'CHANGE_DELIVERY':{
            return {...state, delivery: action.payload}
        }
        case 'CLEAR_BASKET':{
            return {...state, basket: {}}
        }
        case 'ADRESS_DELIVERY':{
            return {...state, adressDelivery: action.payload}
        }
        case 'CLEAR_GOODS':{
            const oldGoods = state.goods.map((item)=>{
                return {...item, products: item.products.map((item)=>{
                    return {...item, count: 0}
                })}
            })
            return {...state, goods: oldGoods}
        }
        default:
            return state
    }
}