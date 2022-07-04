<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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

Route::get('/images/{all}', function (Request $request) {
    $uri = $request->url();

    $replaced = str_replace('images', 'assets/images', $uri);

    return redirect($replaced);
})->where('all', '.*');;

Route::get('/documents/{all}', function (Request $request) {
    $uri = $request->url();

    $replaced = str_replace('documents', 'assets/documents', $uri);

    return redirect($replaced);
})->where('all', '.*');;
