//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import Head, usePage
import { Head, usePage } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function ColorCreate() {
    //destruct props "errors"
    const { errors } = usePage().props;

    //state
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);

    //method "storeColor"
    const storeColor = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/account/colors",
            {
                //data
                name: name,
                image: image,
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
                <title>Create Color - Nide Store</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-palette"></i> Tambah
                                    Color Baru
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeColor}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Gambar
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setImage(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    {errors.image && (
                                        <div className="alert alert-danger custom-alert">
                                            {errors.image}
                                        </div>
                                    )}

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Nama Color
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            placeholder="Masukkan nama warna!"
                                        />
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger custom-alert">
                                            {errors.name}
                                        </div>
                                    )}

                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-md btn-success me-2"
                                        >
                                            <i className="fa fa-save"></i> Simpan
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
