<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BlogController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/messages', [BlogController::class, 'index'])->name('messages.index');
Route::get('/messages/create', [BlogController::class, 'create'])->name('messages.create');
Route::post('/messages', [BlogController::class, 'store'])->name('messages.store');
Route::get('/messages/{message}/edit', [BlogController::class, 'edit'])->name('messages.edit');
Route::put('/messages/{message}', [BlogController::class, 'update'])->name('messages.update');
Route::delete('/messages/{message}', [BlogController::class, 'destroy'])->name('messages.destroy');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/blogpage', function () {
        return Inertia::render('Blogpage');
    })->name('blogpage');

    

});
