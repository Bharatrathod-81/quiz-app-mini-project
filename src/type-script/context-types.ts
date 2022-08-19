import { type } from "os";

type ReactChildren = {
    children: React.ReactNode;
};


type QuesAndAns = {
    question:string,
    options:string[],
    answer:string
};

type Data = {
    gameName :string,
    image:string,
    questionAndAnswer:QuesAndAns[]
};

type dataContextType = {
    dataBaseArray:Data[]
};

// for score context
type UsersAns = {
    name:string,
    answer:string[],
    id:string
};

type ScoreType = {
    usersAns: UsersAns[],
    userName: string;
    id: string;
};

type ScoreActionType = 
| {
    type: "USER NAME",
    payload:{name:string,id:string}
}|{
    type: "ANSWER",
    payload:{id:string,name:string,answer:string[]}
};

type scoreReducerType = {
    score:ScoreType;
    dispatchScore: React.Dispatch<ScoreActionType>;
};
export type { ReactChildren, QuesAndAns, Data, dataContextType,
ScoreActionType, scoreReducerType, ScoreType, UsersAns }