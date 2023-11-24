<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// LANDING PAGE
require __DIR__ . '\home.php';
// AUTH ROUTES
require __DIR__ . '\auth.php';
//prefix "account"
Route::prefix('account')->group(function () {
    //middleware "auth"
    require __DIR__ . '\resources.php';
});

