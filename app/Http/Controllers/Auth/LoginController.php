<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        return inertia('Auth/Login');
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        // Validasi data input
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ], [
            'email.required' => 'Emailnya kosong nih!',
            'email.email' => 'Emailnya ngaco!',
            'password.required' => 'Passwordnya kosong nih!',
        ]);
        // Ambil email dan password dari request
        $credentials = $request->only('email', 'password');
         // Coba login
        $tryLogin = auth()->attempt($credentials);
        // Jika login sukses
        if ($tryLogin) {
            // Regenerate session
            $request->session()->regenerate();
            // Redirect ke halaman dashboard
            return redirect()->route('account.dashboard');
        }
        // Jika login gagal
        return back()->withErrors([
            'email' => 'Data Anda tidak ada di sistem kami.',
        ]);
    }
}
