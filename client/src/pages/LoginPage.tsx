import { loginRequest, profileRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { /*Link,*/ useNavigate } from "react-router-dom";

function LoginPage() {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    // console.log(email,password)

    const resLogin = await loginRequest(email, password);
    // console.log(resLogin);
    setToken(resLogin.data.token);

    const resProfile = await profileRequest();
    // console.log(resProfile);
    setProfile(resProfile.data);

    // navigate("/dashboard");
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit}>
    <input type="email" name="" id="a" />
    <input type="password" name="" id="b" />
    <button type="submit">Login</button>
    </form>
    // <div className="flex h-[calc(100vh-150px)] items-center justify-center">
    //   <form
    //     onSubmit={handleSubmit}
    //     className="bg-zinc-800 max-w-md p-7 rounded-md"
    //   >
    //     <h1 className="my-5 font-bold text-5xl">Login</h1>

    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="email"
    //       placeholder="user@mail.com"
    //       className="bg-gray-900 px-4 py-2 rounded-md w-full my-2"
    //     />

    //     <label htmlFor="password">Password:</label>
    //     <input
    //       type="password"
    //       placeholder="********"
    //       className="bg-gray-900 px-4 py-2 rounded-md w-full my-2"
    //     />
    //     <button className="bg-indigo-500 px-4 py-2 w-full rounded-md">
    //       Login
    //     </button>
    //     <p className="mt-7 text-slate-400 flex justify-between">
    //       Don't Have an Account?{" "}
    //       <Link to="/register" className="text-indigo-100 font-bold">
    //         Register
    //       </Link>
    //     </p>
    //   </form>
    // </div>
  );
}

export default LoginPage;
