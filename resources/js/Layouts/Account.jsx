import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Sidebar from "../Components/Sidebar";
import ModalProfile from "../Components/Profile";

export default function LayoutAccount({ children }) {
    const { auth } = usePage().props;
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const sidebarToggleHandler = (e) => {
        e.preventDefault();
        if (!sidebarToggle) {
            document.body.classList.add("sb-sidenav-toggled");
            setSidebarToggle(true);
        } else {
            document.body.classList.remove("sb-sidenav-toggled");
            setSidebarToggle(false);
        }
    };
    const logoutHandler = async (e) => {
        e.preventDefault();
        Inertia.post("/logout");
    };
    const backHomeHandler = async (e) => {
        e.preventDefault();
        Inertia.get("/");
    };

    return (
        <>
            <div className="d-flex sb-sidenav-toggled" id="wrapper">
                <div className="bg-sidebar" id="sidebar-wrapper">
                    <div className="sidebar-heading bg-light text-center">
                        <img src="/assets/images/logo.png" width={"20"} />
                        <strong> NIDE</strong> <small>STORE</small>
                    </div>
                    <Sidebar />
                </div>
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button
                                className="btn btn-success-dark"
                                onClick={sidebarToggleHandler}
                            >
                                <i className="fa fa-list-ul"></i>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <NavDropdown
                                        title={auth.user.name}
                                        className="fw-bold"
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#profile"
                                        >
                                            <i className="fa fa-user me-2"></i>{" "}
                                            Profil
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            onClick={backHomeHandler}
                                        >
                                            <i className="fa fa-home me-2"></i>{" "}
                                            Home
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            onClick={logoutHandler}
                                        >
                                            <i className="fa fa-sign-out-alt me-2"></i>{" "}
                                            Keluar
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid">{children}</div>
                </div>
            </div>
            <ModalProfile />
        </>
    );
}
