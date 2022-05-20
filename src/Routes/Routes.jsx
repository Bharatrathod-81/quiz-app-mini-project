import { Routes , Route} from "react-router-dom"
import Home from "../pages/home-page/home-page";
import RulePage from "../pages/rules-page/rule-page";

const AllRoutes = () => {

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rules/:gameNameId' element={<RulePage />} />
        </Routes>
    )
}

export default AllRoutes;