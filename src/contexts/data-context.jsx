import { createContext, useContext } from "react";

const dataContext = createContext();

const DataBaseProvider = ({ children }) => {

    const dataBasearr =[
        {
            gameName:"javaScript",
            image:"/images/javaScript-icon.png",
            questionAndAnswer:[
                {
                    question:"JavaScript is a ___ -side programming language.?",
                    options: ["Client","Server","Both"],
                    answer: "Both"
                },
                {
                    question:"How do you find the minimum of x and y using JavaScript?",
                    options: ["min(x,y)","Math.min(x,y)","Math.min(xy)"],
                    answer: "Math.min(x,y)"
                },
                {
                    question:"Which JavaScript label catches all the values, except for the ones specified?",
                    options: ["catch","try","default"],
                    answer: "default"
                },
                {
                    question:"Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
                    options: ["if(x = 2)","if(x 2)","if(x == 2)"],
                    answer: "if(x == 2)"
                },
                {
                    question:"Which of the following is the correct syntax to print a page using JavaScript?",
                    options: ["window.print();","browser.print();","navigator.print();"],
                    answer: "window.print();"
                }
            ]
        },
        {
            gameName:"React",
            image:"/images/react-icon.jpg",
            questionAndAnswer:[
                {
                    question:"What is ReactJS?",
                    options: ["Framework","User-interface framework","JavaScript library"],
                    answer: "JavaScript library"
                },
                {
                    question:"Everything in React is a ______?",
                    options: ["Module","Component","Package"],
                    answer: "Component"
                },
                {
                    question:"Which of the following is a way to handle data in React.js ?",
                    options: ["State & Props","Services & Components","State & Services"],
                    answer: "State & Props"
                },
                {
                    question:"Which of the following is must for the API in React.js ?",
                    options: ["SetinitialComponent","renderComponent","render"],
                    answer: "renderComponent"
                },
                {
                    question:"Which of the following is used to render components in web pages ?",
                    options: ["DOM_render()","render()","ReactDOM_render()"],
                    answer: "DOM_render()"
                }
            ]
        }
    ];

    return(
        <dataContext.Provider value={{ dataBasearr }}>
            {children}
        </dataContext.Provider>
    )
};

const useDataContext = () => useContext(dataContext);

export {useDataContext, DataBaseProvider};