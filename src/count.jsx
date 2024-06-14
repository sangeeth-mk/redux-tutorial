const INCREMENT_COUNT = "INCREMENT_COUNT";

const DECREMENT_COUNT = "DECREMENT_COUNT";

export const increment = ()=>{
    return {
    type:INCREMENT_COUNT
    }
}

export const decrement = ()=>{
    return{
    type:DECREMENT_COUNT
    }
}

const initialState = {
    count:0
}

const countReducer=(state=initialState,action)=>{

    switch (action.type) {
        case INCREMENT_COUNT:
            
            return {count:state.count + 1}

        case DECREMENT_COUNT:

        return{count:state.count - 1}

        default:
            return state;
    }

}

export default countReducer;

