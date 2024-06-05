// Interface para el usuario
export interface UserI {
  _id: string;
  nombre: string;
  apellido: string;
  peso_inicial: number;
  objetivos: string;
}

// Interface para el objeto principal que contiene el usuario y otros datos
export interface UsuarioDetallesI {
  _id: string;
  user_id: UserI; // Aquí se hace referencia a la otra interface
  peso_actual: number;
  imc: number;
  nivel_peso: string;
  calorias_consumidas: number;
  balance_calorico: number;
  calorias_quemadas: number;
  fecha: Date;
}
