import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/homePage"
import { InitialPage } from "../pages/initialPage"

export const RoutesMain = ()=>{
    return(
        <Routes>
            <Route path="/" element={<InitialPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
        </Routes>
    )
}