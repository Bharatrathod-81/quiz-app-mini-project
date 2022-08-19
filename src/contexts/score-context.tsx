import { createContext ,useContext, useReducer } from "react";
import { ScoreActionType, scoreReducerType, ReactChildren , ScoreType} from "../type-script/context-types"; 

const scoreContext = createContext({} as scoreReducerType);

const ScoreContextProvider =({ children }: ReactChildren) => {
    
    const scoreReducer = (state:ScoreType, action:ScoreActionType) => {
        switch (action.type) {
            case "USER NAME":
                return{...state,userName:action.payload.name,id:action.payload.id}
            case "ANSWER" :
                if (state.usersAns.some(item => item.id === action.payload.id)){
                     return{...state};
                }else{
                    return{...state,usersAns:[...state.usersAns,{...action.payload}]};
                };
            default:
                return state;
        }
    }
    
    const initialValue: ScoreType = {
        usersAns:[{name:"",answer:[],id:""}],
        userName:"",
        id:""
    }
    const [score, dispatchScore] = useReducer(scoreReducer,initialValue)

    return(
        <scoreContext.Provider value={{score, dispatchScore}}>
            { children }
        </scoreContext.Provider>
    )
}

const useScoreContext = () => useContext(scoreContext);

export { useScoreContext, ScoreContextProvider}