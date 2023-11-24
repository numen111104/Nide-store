
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function UserCreate() {
    //destruct props "errors" & "roles"
    const { errors, roles } = usePage().props;

    //state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [rolesData, setRolesData] = useState([]);

    //define method "handleCheckboxChange"
    const handleCheckboxChange = (e) => {
        //define data
        let data = rolesData;

        //push data on state
        data.push(e.target.value);

        //set data to state
        setRolesData(data);
    };

    //method "storeUser"
    const storeUser = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/account/users",
            {
                //data
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation,
                roles: rolesData,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Sukses!",
                        text: "Data berhasil ditambahkan!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };

    return (
        <>
            <Head>
                <title>Create Users - NIde Store</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-users"></i> Add New User
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeUser}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Nama Lengkap
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    placeholder="Masukkan Nama Lengkap"
                                                />
                                            </div>
                                            {errors.name && (
                                                <div className="alert alert-danger custom-alert">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    placeholder="Masukkan Email"
                                                />
                                            </div>
                                            {errors.email && (
                                                <div className="alert alert-danger custom-alert">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Masukkan Password"
                                                />
                                            </div>
                                            {errors.password && (
                                                <div className="alert alert-danger custom-alert">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Password Confirmation
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={passwordConfirmation}
                                                    onChange={(e) =>
                                                        setPasswordConfirmation(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Ulangi Password"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="fw-bold">Roles</label>
                                        <br />
                                        {roles.map((role, index) => (
                                            <div
                                                className="form-check form-check-inline"
                                                key={index}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value={role.name}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                    id={`check-${role.id}`}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={`check-${role.id}`}
                                                >
                                                    {role.name}
                                                </label>
                                            </div>
                                        ))}

                                        {errors.roles && (
                                            <div className="alert alert-danger custom-alert mt-2">
                                                {errors.roles}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-md btn-success me-2"
                                        >
                                            <i className="fa fa-save"></i>{" "}
                                            Simpan
                                        </button>
                                        <button
                                            type="reset"
                                            className="btn btn-md btn-warning"
                                        >
                                            <i className="fa fa-redo"></i> Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
