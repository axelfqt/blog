<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        if(!auth()->attempt($request->only(['email', 'password']))){
            throw ValidationException::withMessages([
                'email' => ['Vos identifiants sont incorrects']
            ]);
        }

        return auth()->user()->createToken($request->device_name)->plainTextToken;
    }
}
