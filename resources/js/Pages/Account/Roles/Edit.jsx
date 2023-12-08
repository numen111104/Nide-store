import React, {useState} from "react";
import LayoutAccount from '../../../Layouts/Account';
import { Head, usePage } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";
import Swal from 'sweetalert2';

export default function RoleEdit() {
    //destruct props "errors", "permissions" & "role"
    const { errors, permissions, role } = usePage().props;

    //define state
    const [name, setName] = useState(role.name);
    const [permissionsData, setPermissionsData] = useState(role.permissions.map(obj => obj.name));

    //define method "handleCheckboxChange"
    const handleCheckboxChange = (e) => {

        //define data
        let data = permissionsData;

        //check item already exists, if so, remove with filter
        if (data.some((name) => name === e.target.value)) {
            data = data.filter((name) => name !== e.target.value);
        } else {

            //push new item to array
            data.push(e.target.value);
        }

        //set data to state
        setPermissionsData(data);
    }

    //define method
    const updateRole = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.put(`/account/roles/${role.id}`, {

            //data
            name: name,
            permissions: permissionsData
        }, {
            onSuccess: () => {

                //show alert
                Swal.fire({
                    title: 'Sukses!',
                    text: 'Data berhasil diupdate!',
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
                <title>Edit Role - Nide Store</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-shield-alt"></i> Edit Role</span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateRole}>
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
                                        <label className="fw-bold form-label">Hak Akses</label>
                                        <br/>
                                        {permissions.map((permission, index) => (
                                            <div className="form-check form-check-inline" key={index}>
                                                <input className="form-check-input" type="checkbox" 
                                                    value={permission.name}
                                                    defaultChecked={permissionsData.some((name) => name === permission.name ?? true)}
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