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
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ], [
            'email.required' => 'Emailnya kosong nih!',
            'email.email' => 'Emailnya ngaco!',
            'password.required' => 'Passwordnya kosong nih!'
        ]);

        //get email and password from request
        $credentials = $request->only('email', 'password');

        //attempt to login
        if (auth()->attempt($credentials)) {

            //regenerate session
            $request->session()->regenerate();

            //redirect route dashboard
            return redirect()->route('account.dashboard');
        }

        //if login fails
        return back()->withErrors([
            'email' => 'Data Anda tidak ada di sistem kami.',
        ]);
    }
}
