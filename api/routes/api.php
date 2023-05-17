<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function (){
    Route::get('/logout', LogoutController::class);
});

Route::middleware('guest')->group(function (){
    Route::get('/articles', [ArticleController::class, 'index']);
    Route::get('/article/{slug}', [ArticleController::class, 'singleArticle']);
    Route::post('/article', [ArticleController::class, 'store']);
    Route::put('/article/{slug}', [ArticleController::class, 'update']);
    Route::delete('/article/{slug}', [ArticleController::class, 'destroy']);
});

Route::prefix('auth')->middleware('guest')->group(function (){
    Route::post('/login', LoginController::class);
    Route::post('/register', RegisterController::class);
});