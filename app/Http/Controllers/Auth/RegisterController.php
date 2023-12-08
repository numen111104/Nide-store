<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;

/**
 * RegisterController
 */
class RegisterController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        return inertia('Auth/Register');
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        // Set Validation
        $request->validate(
            [
                'name' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required|confirmed'
            ],
            [
                'name.required' => 'Namamu siapa?',
                'email.required' => 'Emailmu apa?',
                'email.email' => 'Emailnya ngaco!',
                'email.unique' => 'Emailnya sudah terdaftar!',
                'password.required' => 'Passwordnya apa?',
                'password.confirmed' => 'Passwordnya kok beda?'
            ]
        );

        // insert data user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        // Find roie 'Customer'
        $role = Role::findByName('customer');

        // assign role 'customer' to user
        $user->assignRole($role);

        // redirect ke login
        return redirect()->route('login');
    }
}
