import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

/**
 * Menyelesaikan komponen halaman untuk nama yang diberikan.
 *
 * @param {string} name - Nama dari komponen halaman.
 * @return {Promise<React.Component>} - Sebuah promise yang menyelesaikan ke komponen halaman.
 */

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),

    /**
     * Menyiapkan elemen yang diberikan dengan React App dan props yang diberikan.
     *
     * @param {Object} options - Objek opsi.
     * @param {Element} options.el - Elemen yang akan disiapkan.
     * @param {React.Component} options.App - Komponen React App.
     * @param {Object} options.props - Props yang akan diteruskan ke komponen App.
     */

    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
});

InertiaProgress.init({
    color: "#f0fd5f",
    size: 10,
});
