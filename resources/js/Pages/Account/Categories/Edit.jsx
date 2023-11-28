import React, { useState } from "react";
import LayoutAccount from '../../../Layouts/Account';
import { Head, usePage } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";
import Swal from 'sweetalert2';
export default function CategoryEdit() {
    //destruct props "errors" & "category"
    const { errors, category } = usePage().props;
    //state
    const [name, setName] = useState(category.name);
    const [image, setImage] = useState(null);
    //method "updateCategory"
    const updateCategory = async (e) => {
        e.preventDefault();
        //sending data
        Inertia.post(`/account/categories/${category.id}`, {
            //data
            name: name,
            image: image,
            _method: "PUT"
        }, {
            onSuccess: () => {
                //show alert
                Swal.fire({
                    title: 'Sukses!',
                    text: 'Data berhasil diperbarui!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }
    return (
        <>
            <Head>
                <title>Edit Kategori - Nide Store</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-folder"></i> Edit Kategori</span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateCategory}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Gambar</label>
                                        <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                                    </div>
                                    {errors.image && (
                                        <div className="alert alert-danger custom-alert">
                                            {errors.image}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Nama Kategori</label>
                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan nama kategori" />
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger custom-alert">
                                            {errors.name}
                                        </div>
                                    )}
                                    <div>
                                        <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> Perbarui</button>
                                        <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    )

}