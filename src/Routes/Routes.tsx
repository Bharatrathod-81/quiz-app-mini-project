import { Routes , Route} from "react-router-dom"
import Home from "../pages/home-page/home-page";
import RulePage from "../pages/rules-page/rule-page";
import PlayPage from "../pages/play-page/play-page";
import ResultPage from "../pages/result-page/result-page";

const AllRoutes = () => {

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rules/:gameName' element={<RulePage />} />
            <Route path='/play-game/:gameName' element={<PlayPage />} />
            <Route path='/result/:gameName' element={<ResultPage />} />
        </Routes>
    )
}

export default AllRoutes;