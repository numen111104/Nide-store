<?php

namespace App\Http\Controllers\Account;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        //get permissions
        $permissions = Permission::when(request()->q, function($permissions) {
            $permissions = $permissions->where('name', 'like', '%'. request()->q . '%');
        })->latest()->paginate(10);

        //append query string to pagination links
        $permissions->appends(['q' => request()->q]);

        //return view
        return inertia('Account/Permissions/Index', [
            'permissions' => $permissions
        ]);
    }
}
