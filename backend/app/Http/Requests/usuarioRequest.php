<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class usuarioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required|string|max:255||regex:/^[A-Za-z\s\-\.]+/',
            'edad' => 'required|max:2', 
            'telefono' => 'required|string|max:15|regex:/^(?:\+\d{1,4}[-\s()]*\d{1,4}[-\s()]*\d{1,4}[-\s()]*\d{1,10}|\(\d{1,4}\)\s*\d{1,4}[-\s]*\d{1,4})$/', 
            
        ];
    }
}
