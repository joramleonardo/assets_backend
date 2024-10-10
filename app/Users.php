<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $table = "users";
    protected $fillable = [
        'id', //1
        'name',
        'email',
        'password',
        'remember_token',
    ];
}
