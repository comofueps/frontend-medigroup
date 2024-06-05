export interface UsuarioI {
  id?: string;
  nombre: string;
  apellido: string;
  edad: number;
  peso_inicial: number;
  genero: string;
  objetivos: string;
  citas: {
    medicina_general: number;
    psicologia: number;
    especialista: number;
  };
}
