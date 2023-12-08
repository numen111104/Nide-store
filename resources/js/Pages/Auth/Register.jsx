import React, { useState } from "react";
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Register() {

    //destruct props "errors"
    const { errors } = usePage().props;

    //state user
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    //function "registerHandler"
    const registerHandler = async (e) => {
        e.preventDefault();

        //register
        Inertia.post('/register', {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        });
    }


    return (
        <>
            <Head>
                <title>Daftar Akun | Nide Store</title>
            </Head>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-80">
                        <div className="text-center mb-4">
                            <img src="/assets/images/logo2.png" width={"100"} />
                            <h4>
                                <strong>NIDE</strong> STORE
                            </h4>
                        </div>
                        <div className="card border-0 rounded-3 shadow-sm border-top-success">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">BUAT AKUN BARU</h6>
                                    <hr />
                                </div>
                                <form onSubmit={registerHandler}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="mb-1">
                                                Nama Lengkap
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    placeholder="Isi Nama Lengkap!"
                                                />
                                            </div>
                                            {errors.name && (
                                                <div className="alert alert-danger custom-alert">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="mb-1">
                                                Email
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-envelope"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    placeholder="Isi Email!"
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
                                            <label className="mb-1">
                                                Password
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-lock"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Isi Password!"
                                                />
                                            </div>
                                            {errors.password && (
                                                <div className="alert alert-danger custom-alert">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="mb-1">
                                                Konfirmasi Password
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-unlock"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={passwordConfirmation}
                                                    onChange={(e) =>
                                                        setPasswordConfirmation(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Ulangi Password!"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-success shadow-sm rounded-sm px-4 w-100"
                                        type="submit"
                                    >
                                        DAFTAR
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="register text-center mt-3">
                            Sudah punya akun? <Link href="/login">Masuk!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
