
const redux=require('redux');
const createStore=redux.createStore;
const combineReducers=redux.combineReducers;


// action part
const CAKE_ORDERED='CAKE_ORDERED'
const CAKE_RESTOCKED='CAKE_RESTOCKED'



const orderCake=()=>{
    return{
        type:CAKE_ORDERED,
        payload:1
    }
    
}

const restockCake=(qty)=>{
    return{
        type:CAKE_RESTOCKED,
        payload:qty
    }
}

const cakeInitialState={
    noOfCakes:7
}

const cakeReducer=(state=cakeInitialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
        return {
            ...state,
            noOfCakes:state.noOfCakes-1
        }
        case CAKE_RESTOCKED: 
        return {
            ...state,
            noOfCakes:state.noOfCakes+action.payload
        }
        
        default:
            return state
    }
}


const ICECREAM_ORDERED='ICECREAM_ORDERED'
const ICECREAM_RESTOCKED='ICECREAM_RESTOCKED'

const orderIcecream=()=>{
    return{
        type:ICECREAM_ORDERED,
        payload:1
    }
}

const restockIcecream=(qty)=>{
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
}

const icecreamInitialState={
    noOfIcecream:10
}


const icecreamReducer=(state=icecreamInitialState,action)=>{
    switch(action.type){
        case ICECREAM_ORDERED:
            return{
                ...state,
                noOfIcecream:state.noOfIcecream-action.payload
            }
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                noOfIcecream:state.noOfIcecream+action.payload
            }    
            default:
            return state
    }
}

// reducer part


// store part
const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})
const store=createStore(rootReducer)
console.log('Initial state', store.getState())
const unsubscribe=store.subscribe=(()=>console.log('Updated state', store.getState()))
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(5))


store.dispatch(orderIcecream())
store.dispatch(restockIcecream(2))
unsubscribe()

