import { createContext ,useContext, useReducer } from "react";

const scoreContext = createContext();

const ScoreContextProvider =({ children }) => {

    const scoreReducer = (state,action) => {
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

    const [score, dispatchScore] = useReducer(scoreReducer,{
        usersAns:[{name:"",answer:[]}],
        userName:"",
        id:""
    })

    return(
        <scoreContext.Provider value={{score, dispatchScore}}>
            { children }
        </scoreContext.Provider>
    )
}

const useScoreContext = () => useContext(scoreContext);

export { useScoreContext, ScoreContextProvider}