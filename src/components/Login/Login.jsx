import { useContext } from "react";
import loginContext from "../Context/context";
export function Login() {
  const context = useContext(loginContext);
  const { user, isLoggedIn, LogIn, LogOut } = context;
    console.log(user);
    
  return (
    <section>
      {isLoggedIn ? (
        <div>
          <h1>{user.user}</h1>
          <button onClick={LogOut}>LogOut</button>
        </div>
      ) : (
        <div>
          <button onClick={LogIn}>LogIn</button>
        </div>
      )}
    </section>
  );
}
