import { Outlet } from "react-router";
import Menu from "../components/Menu.jsx";
import Header from "../components/Header.jsx";

const ProtectedLayout = () => {
    return(
        <main>
        <Header/>
        <Outlet/>
        <Menu/>
        </main>
    )
}

export default ProtectedLayout