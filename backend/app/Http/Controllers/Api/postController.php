<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\post as ModelsPost;
use Illuminate\Database\Eloquent\Model;

class postController extends Controller
{
    
    public function index()
    {
        $post = ModelsPost::all();
        return $post;
    }

   
    public function store(Request $request)
    {
        $post = new ModelsPost();
        $post ->titulo =$request->titulo;
        $post ->contenido =$request->contenido;
        $post ->imagen =$request->imagen;
        $post ->autor =$request->autor;
        $post ->save();

        return json_encode(['msg'=>'registro agregado de forma correcta']);

    }

  
    public function show($id)
    {
        $post = ModelsPost::find($id);
        return json_encode([$post]);

    }

   
    public function update(Request $request, $id)
    {
        $titulo =$request -> input('titulo');
        $contenido =$request -> input('contenido');
        $imagen =$request -> input('imagen');
        $autor =$request -> input('autor');
        ModelsPost::where('id',$id)->update(
            [
                'titulo'=>$titulo,
                'contenido'=>$contenido,
                'imagen'=>$imagen,
                'autor'=>$autor
            ]

            );

            return json_encode(['msg'=>'registro actualizado correctamente']);


    }

  
    public function destroy($id)
    {
        $post =  ModelsPost::destroy($id);
        return json_encode(['msg'=>'registro eliminado correctamente']);
    
    }
}
