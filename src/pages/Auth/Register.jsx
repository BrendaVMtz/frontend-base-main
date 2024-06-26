import React from "react";
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
      navigate("/balance-general");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signup(values); // Call signup function from useAuth
    } catch (error) {
      console.error("Error signing up:", error);
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
          {RegisterErrors.length > 0 && (
            <div className="mt-4 text-red-500">
              {RegisterErrors.map((error, i) => (
                <div key={i}>{error.message}</div>
              ))}
            </div>
          )}
          <form onSubmit={onSubmit}>
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium">Correo electrónico</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                  placeholder="Ingresa tu correo"
                  name="email"
                  type="email"
                  autoComplete="email"
                  {...register("email", { required: "Email es requerido" })}
                  autoFocus
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium">Nombre de usuario</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                  placeholder="Ingresa un nombre de usuario"
                  name="nombre"
                  type="text"
                  {...register("nombre", { required: "Usuario es requerido" })}
                  autoFocus
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.nombre.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium">Contraseña</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-md px-4 py-2 mt-2 bg-transparent"
                  placeholder="Ingresa tu contraseña"
                  name="contrasena"
                  type="password"
                  {...register("contrasena", { required: "Contraseña es requerida" })}
                />
                {errors.contrasena && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contrasena.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-1 flex justify-between items-center">
              <p className="mt-1 font-medium text-base">
                ¿Ya tienes una cuenta?
              </p>
              <Link className="font-medium text-base text-green-500" to="/login">
                Login
              </Link>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                className="active:scale-[.98] active:duration-80 transition-all py-2 rounded-xl bg-green-500 text-white text-lg font-bold hover:scale-[1.1] ease-in-out"
                type="submit"
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <Hero />
      </div>
    </div>
  );
}

export default Register;
