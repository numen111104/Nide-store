<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Account\RoleController;
use App\Http\Controllers\Account\UserController;
use App\Http\Controllers\Account\ColorController;
use App\Http\Controllers\Account\SliderController;
use App\Http\Controllers\Account\ProductController;
use App\Http\Controllers\Account\CategoryController;
use App\Http\Controllers\Account\DashboardController;
use App\Http\Controllers\Account\PermissionController;
use App\Http\Controllers\Account\TransactionController;

//prefix "account"
Route::prefix('account')->group(function () {
    Route::group(['middleware' => ['auth']], function () {
        //route dashboard
        Route::get('/dashboard', DashboardController::class)->name('account.dashboard');

        //route permissions
        Route::get('/permissions', PermissionController::class)->name('account.permissions.index')
            ->middleware('permission:permissions.index');

        //route resource roles
        Route::resource('/roles', RoleController::class, ['as' => 'account'])
            ->middleware('permission:roles.index|roles.create|roles.edit|roles.delete');

        //route resource users
        Route::resource('/users', UserController::class, ['as' => 'account'])
            ->middleware('permission:users.index|users.create|users.edit|users.delete');
        //route resource colors
        Route::resource('/colors', ColorController::class, ['as' => 'account'])
            ->middleware('permission:colors.index|colors.create|colors.edit|colors.delete');
        //route resource categories
        Route::resource('/categories', CategoryController::class, ['as' => 'account'])
            ->middleware('permission:categories.index|categories.create|categories.edit|categories.delete');
        //route store image product
        Route::post('/products/store_image_product', [ProductController::class, 'storeImageProduct'])->name('account.products.store_image_product');
        //route destroy image product
        Route::delete('/products/destroy_image_product/{id}', [ProductController::class, 'destroyImage'])->name('account.products.destroy_image_product');
        //route resource products
        Route::resource('/products', ProductController::class, ['as' => 'account'])
            ->middleware('permission:products.index|products.create|products.show|products.edit|products.delete');
        //route transactions index
        Route::get('/transactions', [TransactionController::class, 'index'])->name('account.transactions.index')
            ->middleware('permission:transactions.index');
        //route transactions show
        Route::get('/transactions/{invoice}', [TransactionController::class, 'show'])->name('account.transactions.show')
            ->middleware('permission:transactions.show');
            //route transactions destroy
        Route::delete('/transactions/{id}', [TransactionController::class, 'destroy'])->name('account.transactions.destroy');
        //route resource sliders
        Route::resource('/sliders', SliderController::class, ['except' => ['create', 'show', 'edit', 'update'], 'as' => 'account'])
            ->middleware('permission:sliders.index|sliders.create|sliders.delete');
    });
});
