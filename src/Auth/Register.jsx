// import Hero from './Hero'; // Importación del componente Hero
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";


function Register() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-gray-200">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100 shadow bg-opacity-50">
          <h1 className="text-5xl font-semibold">Bienvenido</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            ¡Bienvenido! Ingresa tus datos
          </p>
          {/* Formulario de registro */}
          <form
            onSubmit={handleSubmit(async (values) => {
              console.log('helo');
              console.log(values);
                const res = await registerRequest(values);
                console.log(res);
            })}
          >
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
                />
              </div>
            </div>
            {/* Email */}
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium">Email</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                  placeholder="Ingresa tu email"
                  name="email"
                  type="email"
                  {...register("email", { required: true })}
                />
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
                />
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
        {/* <Hero/> */}
      </div>
    </div>
  );
}

export default Register;
