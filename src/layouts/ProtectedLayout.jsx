import { Outlet } from "react-router";
import Menu from "../components/Menu.jsx";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";

const ProtectedLayout = () => {
    return(
        <main>
            <Header/>
            <Navbar/>
            <section className="grid lg:grid-cols-[1fr_4fr]">
                <Menu/>
                <Outlet/>
            </section>
        </main>
    )
}

export default ProtectedLayout