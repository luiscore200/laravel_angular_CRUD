<?php

namespace App\Http\Controllers;

use App\Http\Requests\usuarioRequest;
use App\Models\usuario;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


class usuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index():JsonResponse
    {
        $usuarios = usuario::all();
        return response() ->json($usuarios, 200);
    }

 
    /**
     * Store a newly created resource in storage.
     */
    public function store(usuarioRequest $request):JsonResponse
    {
        $datos= $request->all();
        $usuario = usuario::create($datos);

        return response() ->json($usuario, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id):JsonResponse
    {

        $usuario= usuario::find($id);

        if(!$usuario){
            return response()->json(['mensaje'=>'usuario no encontrado'],404);
        }else{return response() ->json($usuario,200);}
        
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(usuarioRequest  $request, string $id):JsonResponse
    {
        $usuario= usuario::find($id);
        if(!$usuario){
            return response() ->json(['mensaje'=>'usuario no encontrado'],404);
        }else{
             $usuario ->update($request->all());  
            return response() ->json($usuario,200); 
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id):JsonResponse
    {
        $usuario= usuario::find($id);
        if(!$usuario){
            return response() ->json(['mensaje'=>'usuario no encontrado'],404);
        }else{
            $usuario->delete();
            return response() ->json(['mensaje'=>'usuario ha sido eliminado'],200); 
        }
    }
}
