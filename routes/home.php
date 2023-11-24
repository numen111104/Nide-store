<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\CartController;
use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\Web\ProductController;
use App\Http\Controllers\Web\CallbackController;
use App\Http\Controllers\Web\CategoryController;
use App\Http\Controllers\Web\CheckoutController;

// HOMEPAGE
Route::get('/', HomeController::class)->name('web.home.index');
// CATEGORI SHOW DAN INDEX
Route::get('/categories', [CategoryController::class, 'index'])->name('web.categories.index');
Route::get('/categories/{slug}', [CategoryController::class, 'show'])->name('web.categories.show');
// PRODUK SHOW DAN INDEX
Route::get('/products', [ProductController::class, 'index'])->name('web.products.index');
Route::get('/products/{slug}', [ProductController::class, 'show'])->name('web.products.show');
// CART
Route::get('/carts', [CartController::class, 'index'])->name('web.carts.index')
    ->middleware('auth');
Route::post('/carts', [CartController::class, 'store'])->name('web.carts.store')
    ->middleware('auth');
Route::delete('/carts/{id}', [CartController::class, 'destroy'])->name('web.carts.destroy')
    ->middleware('auth');

// CEKOUT, CEKONGKIR

Route::get('/checkouts', [CheckoutController::class, 'index'])->name('web.checkouts.index')
    ->middleware('auth');
Route::get('/checkouts/cities', [CheckoutController::class, 'getCities'])->name('web.checkouts.getCities')
    ->middleware('auth');
Route::post('/checkouts/checkOngkir', [CheckoutController::class, 'checkOngkir'])->name('web.checkouts.checkOngkir')
    ->middleware('auth');
Route::post('/checkouts', [CheckoutController::class, 'store'])->name('web.checkouts.store')
    ->middleware('auth');
Route::post('/callback', CallbackController::class)->name('web.callback');