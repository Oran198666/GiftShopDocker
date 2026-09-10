import { Navigate, Route, Routes } from "react-router-dom";
import { Gifts } from "../../pages-area/gifts/gifts";
import { AddGifts } from "../../pages-area/add-gifts/add-gifts";
import { Home } from "../../pages-area/home/home";
import { Page404 } from "../../pages-area/page404/page404";

export function Routing() {
    return (
        <Routes>
            {/* Default Route */}
            <Route path="/" element={<Navigate to="/home" />} />

            {/* Main Routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/gifts/:audienceId" element={<Gifts />} />
            <Route path="/new" element={<AddGifts />} />

            {/* Fallback Route */}
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}