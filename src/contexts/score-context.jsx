import { createContext ,useContext, useReducer } from "react";

const scoreContext = createContext();

const ScoreContextProvider =({ children }) => {

    const scoreReducer = (state,action) => {
        switch (action.type) {
            case "ANSWER" :
                return{...state,usersAns:[...state.usersAns,action.payload]};
            
            default:
                return state;
        }
    }

    const [score, dispatchScore] = useReducer(scoreReducer,{
        usersAns:[],
    })

    return(
        <scoreContext.Provider value={{score, dispatchScore}}>
            { children }
        </scoreContext.Provider>
    )
}

const useScoreContext = () => useContext(scoreContext);

export { useScoreContext, ScoreContextProvider}