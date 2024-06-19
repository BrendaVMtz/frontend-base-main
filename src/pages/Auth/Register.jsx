// import Hero from './Hero'; // Importación del componente Hero
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
import Hero from "../../components/Hero";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/transactions");
    }
  }, [isAuthenticated, navigate]);

  const onSumbit = handleSubmit(async (values) => {
    try {
      await signup(values); // Call signup function from useAuth
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error state or display error to user
    }
  });
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-gray-200">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100 shadow bg-opacity-50">
          <h1 className="text-5xl font-semibold">Bienvenido</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            ¡Bienvenido! Ingresa tus datos
          </p>
          <div>{RegisterErrors.map((error,i) => (
            <div key={i}>
                {error.message}
            </div> 
          ))}</div>
          {/* Formulario de registro */}
          <form onSubmit={onSumbit}>
            
            {/* Email */}
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium">
                  Correo electrónico
                </label>
                <input
                  className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                  placeholder="Ingresa tu correo"
                  name="email"
                  type="email"
                  autoComplete="email"
                  {...register("email", { required: true })}
                  autoFocus
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Email es requerido
                  </p>
                )}
              </div>
            </div>
            {/* Username */}
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium">Nombre de usuario</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                  placeholder="Ingresa un nombre de usuario"
                  name="nombreUsuario"
                  type="text"
                  {...register("nombre", { required: true })}
                  autoFocus
                />
                {/* Párrafo en rojo cuando el input está vacío */}
                {errors.nombre && (
                  <p className="text-red-500 text-sm mt-1">
                    Usuario es requerido
                  </p>
                )}
              </div>
            </div>
            {/* Password */}
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium">Contraseña</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                  placeholder="Ingresa tu contraseña"
                  name="password"
                  type="password"
                  {...register("contrasena", { required: true })}
                  autoFocus
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Contraseña es requerido
                  </p>
                )}
              </div>
            </div>
            <div className="mt-1 flex justify-between items-center">
              <p className="mt-1 font-medium text-base">
                ¿Ya tienes una cuenta?
              </p>
              {/* Enlace para redirigir a la página de Login */}

              <Link
                className="font-medium text-base text-green-500"
                to="/login"
              >
                Login
              </Link>
            </div>
            {/* Botón para enviar el formulario */}
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                className="active:scale-[.98] active:duration-80 transition-all py-2 rounded-xl bg-green-500 text-white text-lg font-bold hover:scale-[1.1] ease-in-out"
                type="submit"
              >
                Registrar
              </button>
            </div>
          </form>

          {/* Componente Modal para mostrar mensajes */}
        </div>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <Hero />
      </div>
    </div>
  );
}

export default Register;
