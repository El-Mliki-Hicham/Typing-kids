<?php

namespace App\Http\Controllers;

use App\Models\Login;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    function GetData()  {

        $data = Login::all();
            return $data ;
    }
    // function GetDataId($id){

    //     $data = Login::findOrFail($id);
    //         return $data ;
    // }
    function AddData(Request $request){
        $user = new Login();

        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();
        
    }
    
}
