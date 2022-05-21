import { Routes , Route} from "react-router-dom"
import Home from "../pages/home-page/home-page";
import RulePage from "../pages/rules-page/rule-page";
import PlayPage from "../pages/play-page/play-page";

const AllRoutes = () => {

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rules/:gameName' element={<RulePage />} />
            <Route path='/play-game/:gameName' element={<PlayPage />} />
        </Routes>
    )
}

export default AllRoutes;