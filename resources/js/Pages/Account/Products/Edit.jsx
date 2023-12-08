import React, { useState } from "react";
import LayoutAccount from "../../../Layouts/Account";
import { Head, usePage } from "@inertiajs/inertia-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

export default function ProductEdit() {
    const { errors, categories, product } = usePage().props;
    // State
    const [title, setTitle] = useState(product.title);
    const [categoryID, setCategoryID] = useState(product.category_id);
    const [description, setDescription] = useState(product.description);
    const [weight, setWeight] = useState(product.weight);
    const [productSize, setProductSize] = useState(product.product_sizes);

    // Menambahkan field produk size
    const addMoreFields = () => {
        setProductSize([...productSize, { size: "", price: 0 }]);
    };

    // Method untuk menghapus field product size
    const removeFields = (index) => {
        // Salin array ke variabel baru
        let newProductSize = [...productSize];

        // Hapus array berdasarkan indeks
        newProductSize.splice(index, 1);

        // Set data setelah dihapus ke dalam state
        setProductSize(newProductSize);
    };

    // Method untuk mengatur ukuran dan harga produk
    const setProductSizePrice = (i, e) => {
        // Salin array ke variabel baru
        let newProductSize = [...productSize];

        // Tentukan nilai
        newProductSize[i][e.target.name] = e.target.value;

        // Set data ke dalam state
        setProductSize(newProductSize);
    };

    // Method "updateProduct"
    const updateProduct = async (e) => {
        e.preventDefault();

        // Mengirim data
        Inertia.put(
            `/account/products/${product.id}`,
            {
                // Data
                title: title,
                category_id: categoryID,
                description: description,
                weight: weight,
                product_sizes: productSize,
            },
            {
                onSuccess: () => {
                    // Tampilkan alert
                    Swal.fire({
                        title: "Sukses!",
                        text: "Data berhasil diperbarui!",
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
                <title>Edit Produk - Nide Store</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-shopping-bag"></i> Edit
                                    Product
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateProduct}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Nama Produk
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={title}
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                            placeholder="Masukkan nama produk"
                                        />
                                    </div>
                                    {errors.title && (
                                        <div className="alert alert-danger custom-alert">
                                            {errors.title}
                                        </div>
                                    )}

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Kategori
                                                </label>
                                                <select
                                                    className="form-select"
                                                    value={categoryID}
                                                    onChange={(e) =>
                                                        setCategoryID(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        -- Pilih Kategori --
                                                    </option>
                                                    {categories.map(
                                                        (category) => (
                                                            <option
                                                                value={
                                                                    category.id
                                                                }
                                                                key={
                                                                    category.id
                                                                }
                                                            >
                                                                {category.name}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            {errors.category_id && (
                                                <div className="alert alert-danger custom-alert">
                                                    {errors.category_id}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Berat (Gram)
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={weight}
                                                    onChange={(e) =>
                                                        setWeight(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Masukkan berat (Gram)"
                                                />
                                            </div>
                                            {errors.weight && (
                                                <div className="alert alert-danger custom-alert">
                                                    {errors.weight}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Deskripsi
                                        </label>
                                        <ReactQuill
                                            theme="snow"
                                            rows="5"
                                            value={description}
                                            onChange={(content) =>
                                                setDescription(content)
                                            }
                                        />
                                    </div>
                                    {errors.description && (
                                        <div className="alert alert-danger custom-alert">
                                            {errors.description}
                                        </div>
                                    )}

                                    <hr />
                                    {/** dynamic size and price */}
                                    <div className="row mt-3 mb-5">
                                        <div className="col-md-12">
                                            <div className="alert alert-warning">
                                                <i className="fa fa-info-circle"></i>{" "}
                                                Tambahkan ukuran (XXL/XL/L/M/S)
                                                dan harga produk
                                            </div>
                                        </div>

                                        {productSize.map((element, index) => (
                                            <div className="row" key={index}>
                                                <div className="col-md-5">
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">
                                                            Ukuran
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="size"
                                                            value={
                                                                element.size ||
                                                                ""
                                                            }
                                                            onChange={(e) =>
                                                                setProductSizePrice(
                                                                    index,
                                                                    e
                                                                )
                                                            }
                                                            className="form-control"
                                                            placeholder="Masukkan ukuran"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="mb-3">
                                                        <label className="form-label fw-bold">
                                                            Harga
                                                        </label>
                                                        <input
                                                            type="number"
                                                            name="price"
                                                            value={
                                                                element.price ||
                                                                ""
                                                            }
                                                            onChange={(e) =>
                                                                setProductSizePrice(
                                                                    index,
                                                                    e
                                                                )
                                                            }
                                                            className="form-control"
                                                            placeholder="Masukkan harga"
                                                        />
                                                    </div>
                                                </div>
                                                {index ? (
                                                    <div className="col-md-2">
                                                        <div className="mb-3">
                                                            <label className="form-label fw-bold text-white">
                                                                .
                                                            </label>
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-md border-0 shadow-sm w-100"
                                                                onClick={() =>
                                                                    removeFields(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                <i className="fa fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </div>
                                        ))}

                                        {errors.product_sizes && (
                                            <div className="col-md-12">
                                                <div className="alert alert-danger custom-alert">
                                                    {errors.product_sizes}
                                                </div>
                                            </div>
                                        )}

                                        <div className="col-md-12">
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-md border-0 shadow-sm"
                                                onClick={() => addMoreFields()}
                                            >
                                                <i className="fa fa-plus-circle"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-md btn-success me-2"
                                        >
                                            <i className="fa fa-save"></i>
                                            Perbarui
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
