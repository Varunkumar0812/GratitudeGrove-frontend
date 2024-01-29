import { useNavigate } from "react-router-dom";
import HomePageButton from "../home-page/button";
import TextInputField from "./text-input";
import { useState } from "react";

function LoginRightContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return window.alert("Enter email and password");
    }

    const data = {
      email,
      password,
    };

    try {
      const userData = await fetch("http://127.0.0.1:8000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(userData);

      userData.json().then((data) => {
        if (data.status === "error") {
          window.alert(data.message);
        } else {
          const token = data.token;

          localStorage.setItem("authToken", JSON.stringify(token));
          console.log("Token generated !");

          navigate("/dashboard");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="w-full lg:w-1/2 flex flex-col justify-center h-full xl:p-10 py-5 lg:py-16 bg-red-100 rounded-b-xl lg:rounded-none lg:rounded-r-xl">
      <div className="text-4xl font-semibold text-center">Login</div>
      <div className="p-10 pb-5">
        <TextInputField
          label="Email Address"
          type="email"
          sx={{ marginBottom: "30px" }}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextInputField
          label="Password"
          type="password"
          sx={{ marginBottom: "5px" }}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="px-10">
        <button
          href="#"
          className="text-right w-full hover:underline hover:text-red-500"
        >
          Forgot Password ?
        </button>
      </div>
      <div className="flex p-5 px-10 text-md justify-center">
        <div>New to GratitudeGrove ?</div>
        <button
          onClick={() => navigate("/register")}
          className="ml-2 hover:underline hover:text-red-500"
        >
          Sign Up
        </button>
      </div>
      <div className="flex justify-center p-3">
        <HomePageButton onClick={handleLogin}>Submit</HomePageButton>
      </div>
    </form>
  );
}

export default LoginRightContent;
