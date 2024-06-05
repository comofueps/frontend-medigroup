export interface UserI {
  _id: string;
  nombre: string;
  apellido: string;
}

export interface CitasI {
  user_id: UserI;
  fecha: string;
  tipo: string;
  enum: ['Medicina general', 'Psicologia', 'Especialista'];
  estado: string;
}
