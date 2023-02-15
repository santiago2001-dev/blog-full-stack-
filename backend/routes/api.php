<?php

use App\Http\Controllers\Api\productController;
use App\Http\Controllers\Api\postController;
use App\Http\Controllers\Api\autorController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});






Route::get('/post',[postController::class,'index']);  
Route::get('/post/{id}',[postController::class,'show']);
 Route::post('/post',[postController::class,'store']);
Route::put('/post/{id}',[postController::class,'update']);
Route::delete('post/{id}',[postController::class,'destroy']);


Route::get('/autor',[autorController::class,'index']);  
Route::get('/autor/{id}',[autorController::class,'show']);
 Route::post('/autor',[autorController::class,'store']);


Route::post('login', [AuthController::class, 'login'],['middleware' => ['cors']]);
Route::post('logout', [AuthController::class, 'logout']);
Route::post('refresh', [AuthController::class, 'refresh']);
Route::post('me', [AuthController::class, 'me'],['middleware' => ['cors']]);

Route::post('/register', [AuthController::class, 'register']);

