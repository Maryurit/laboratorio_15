export interface Product {
    id: number;
    nombre: string;
    precio: number;  // Corregido: precic → precio
    descripcion?: string;  // Corregido: description → descripcion (para coincidir con el backend)
    createdAt?: string;
    updatedAt?: string;
}

export interface ApiResponse<T> {  // Corregido: AplResponse → ApiResponse
    success: boolean;
    message: string;
    data: T;
}