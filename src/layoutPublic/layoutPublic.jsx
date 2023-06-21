import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

const LayoutPublic = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    );
};

export default LayoutPublic;
