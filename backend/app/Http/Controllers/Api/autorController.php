<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\autor as ModelsAutor;

class autorController extends Controller
{
  
    public function index()
    {
        $autor = ModelsAutor::all();
        return $autor;
    }

 
    public function store(Request $request)
    {
        $autor = new ModelsAutor();
        $autor ->nombre = $request->nombre;
        $autor ->apellidos = $request -> apellidos;
        $autor ->save();
    }

   
    public function show($id)
    {
        $post = ModelsAutor::find($id);
        return $post;
    }

  

}
