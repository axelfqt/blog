<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function findUsers(Request $request)
    {
        $users = User::where('name', 'LIKE', '%'.$request->name.'%')->get();

        return UserResource::collection($users);
    }

    public function showUser($name)
    {
        $user = User::where('name', $name)->first();

        return UserResource::make($user);
    }
}
