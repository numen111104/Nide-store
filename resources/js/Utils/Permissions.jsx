//import usePage
import { usePage } from '@inertiajs/inertia-react';

// Fungsi ini digunakan untuk memeriksa apakah pengguna memiliki setidaknya satu izin yang diberikan.
export default function hasAnyPermission(permissions) {

    // Menggunakan usePage() dari Inertia untuk mengakses properti "auth".
    const { auth } = usePage().props

    // Mengambil daftar izin dari properti "auth".
    let allPermissions = auth.permissions;

    // Inisialisasi variabel untuk menyimpan hasil pemeriksaan izin.
    let hasPermission = false;

    // Iterasi melalui setiap izin yang diberikan.
    permissions.forEach(function(item){
        // Jika pengguna memiliki izin yang sesuai, mengubah nilai hasPermission menjadi true.
        if(allPermissions[item]) hasPermission = true;     
    });

    // Mengembalikan nilai true jika pengguna memiliki setidaknya satu izin yang diberikan.
    return hasPermission;

}
