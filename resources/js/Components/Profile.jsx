import React from "react";
import { usePage } from "@inertiajs/inertia-react";
export default function ModalProfile() {
    const { auth } = usePage().props;
    return (
        <>
            <div
                className="modal fade"
                id="profile"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title text-center"
                                id="exampleModalLabel"
                            >
                                Profil
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body p-4">
                            <div className="card-body p-4">
                                <h6>Informasi Akun</h6>
                                <hr className="mt-0 mb-4" />
                                <div className="row pt-1">
                                    <div className="col-6 mb-3">
                                        <h6>Nama Lengkap</h6>
                                        <p className="text-muted">
                                            {auth.user.name}
                                        </p>
                                    </div>
                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Email</h6>
                                            <p className="text-muted">
                                                {auth.user.email}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Role Akun</h6>
                                            <p className="text-muted">
                                                {auth.user.roles[0].name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Hak Akses</h6>
                                            <p className="text-muted">
                                                {auth.user.roles[0].permissions
                                                    .length >= 30
                                                    ? "Semua akses"
                                                    : auth.user.roles[0].permissions.map(
                                                          (
                                                              permission,
                                                              index
                                                          ) => (
                                                              <span key={index}>
                                                                  {
                                                                      permission.name
                                                                  }
                                                                  {index <
                                                                      auth.user
                                                                          .roles[0]
                                                                          .permissions
                                                                          .length -
                                                                          1 && (
                                                                      <br />
                                                                  )}
                                                              </span>
                                                          )
                                                      )}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Tanggal dibuat</h6>
                                            <p className="text-muted">
                                                {new Date(
                                                    auth.user.created_at
                                                ).toLocaleDateString("id-ID")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
