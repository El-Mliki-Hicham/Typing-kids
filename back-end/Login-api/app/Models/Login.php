<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    protected $table = "Login";
    protected $fillable = [
        'username',
        'email',
        'password',
    ];
    public  $timestamps = false;
}
