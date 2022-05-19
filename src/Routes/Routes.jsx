import { Routes , Route} from "react-router-dom"
import Home from "../pages/home-page/home-page";

const AllRoutes = () => {

    return(
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default AllRoutes;