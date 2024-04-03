import { login } from "@/actions";


const loginForm = () => {
  return (
    <form action={login}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
    </form>
  )
};

export default loginForm;
