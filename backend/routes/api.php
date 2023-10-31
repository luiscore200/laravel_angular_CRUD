<?php

use App\Http\Controllers\usuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::resource('usuario',usuarioController::class);