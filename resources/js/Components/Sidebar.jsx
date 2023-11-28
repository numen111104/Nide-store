import React from "react";
import hasAnyPermission from '../Utils/Permissions';
import { Link, usePage  } from '@inertiajs/inertia-react';
export default function Sidebar() {
    const { url } = usePage()
    return (
        <>
            <div className="list-group list-group-flush">
                {hasAnyPermission(['dashboard.index']) && 
                    <Link href="/account/dashboard" className={`${ url.startsWith('/account/dashboard') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-tachometer-alt me-2"></i> Dashboard</Link>
                }
                {hasAnyPermission(['colors.index']) && 
                    <Link href="/account/colors" className={`${ url.startsWith('/account/colors') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-palette me-2"></i> Warna</Link>
                }
                {hasAnyPermission(['categories.index']) && 
                    <Link href="/account/categories" className={`${ url.startsWith('/account/categories') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-folder me-2"></i> Kategori</Link>
                }
                {hasAnyPermission(['products.index']) && 
                    <Link href="/account/products" className={`${ url.startsWith('/account/products') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-shopping-bag me-2"></i> Produk</Link>
                }
                {hasAnyPermission(['transactions.index']) && 
                    <Link href="/account/transactions" className={`${ url.startsWith('/account/transactions') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-shopping-cart me-2"></i> Transaksi</Link>
                }
                {hasAnyPermission(['sliders.index']) && 
                    <Link href="/account/sliders" className={`${ url.startsWith('/account/sliders') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-images me-2"></i> Slider</Link>
                }
                {hasAnyPermission(['roles.index']) && 
                    <Link href="/account/roles" className={`${ url.startsWith('/account/roles') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-shield-alt me-2"></i> Role</Link>
                }
                {hasAnyPermission(['permissions.index']) && 
                    <Link href="/account/permissions" className={`${ url.startsWith('/account/permissions') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-key me-2"></i> Hak Akses</Link>
                }
                {hasAnyPermission(['users.index']) && 
                    <Link href="/account/users" className={`${ url.startsWith('/account/users') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-users me-2"></i> User</Link>
                }
            </div>
        </>
    )

}