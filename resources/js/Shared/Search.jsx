import React, {useState} from "react";
import { Inertia } from '@inertiajs/inertia';
export default function Search({ URL }) {
    const [search, setSearch] = useState('');
    const searchHandlder = (e) => {
        e.preventDefault();
        Inertia.get(`${URL}?q=${search}`);
    }
    return (
        <>
            <form onSubmit={searchHandlder}>
                <div className="input-group">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="form-control border-0 shadow-sm" placeholder="Sedang cari apa nih?"/>
                        <span className="input-group-text-search border-0 shadow-sm" type="button" onClick={searchHandlder}>
                            <i className="fa fa-search"></i>
                        </span>
                </div>
            </form>
        </>
    )

}