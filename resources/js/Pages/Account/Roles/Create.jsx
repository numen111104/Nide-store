import React, {useState} from "react";
import LayoutAccount from '../../../Layouts/Account';
import { Head, usePage } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";
import Swal from 'sweetalert2';

export default function RoleCreate() {
    const { errors, permissions } = usePage().props;
    //define state
    const [name, setName] = useState('');
    const [permissionsData, setPermissionsData] = useState([]);
    //define method "handleCheckboxChange"
    const handleCheckboxChange = (e) => {
        //define data
        let data = permissionsData
        //push data on state
        data.push(e.target.value)
        //set data to state
        setPermissionsData(data)
    }

    const storeRole = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post('/account/roles', {
            //data
            name: name,
            permissions: permissionsData
        }, {
            onSuccess: () => {
                //show alert
                Swal.fire({
                    title: 'Sukses!',
                    text: 'Data berhasil disimpan!!',
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
                <title>Tambah Role - Nide Store</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-shield-alt"></i> Tambah Role Baru</span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeRole}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Nama Role</label>
                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan nama role"/>
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger custom-alert">
                                            {errors.name}
                                        </div>
                                    )}
                                    <hr/>
                                    <div className="mb-3">
                                        <label className="fw-bold form-label">Pilih Hak Akses</label>
                                        <br/>
                                        {permissions.map((permission, index) => (
                                            <div className="form-check form-check-inline " key={index}>
                                                <input className="form-check-input" type="checkbox" 
                                                    value={permission.name}
                                                    onChange={handleCheckboxChange}
                                                    id={`check-${permission.id}`} 
                                                />
                                                <label className="form-check-label" htmlFor={`check-${permission.id}`}>{ permission.name }</label>
                                            </div>
                                        ))}

                                        {errors.permissions && (
                                            <div className="alert alert-danger custom-alert mt-2">
                                                {errors.permissions}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> Simpan</button>
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