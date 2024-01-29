import { useState } from "react";
import TextInputField from "./text-input";
import HomePageButton from "../home-page/button";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterRightContent() {
  const [nextPage, showNextPage] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState({});

  const handleClick1 = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || passwordConfirm === "") {
      window.alert("Please fill all required fields");
    } else {
      showNextPage(!nextPage);
      setData({ email, password, passwordConfirm });
      console.log(data);
    }
  };

  const handleClick2 = async (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || age === "") {
      window.alert("Please fill all required fields");
    } else {
      const newData = { ...data, firstName, lastName, age };
      setData(newData);

      console.log(newData);

      try {
        const userData = await fetch("http://127.0.0.1:8000/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        });

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
    }
  };

  return (
    <div className="w-full lg:w-1/2 h-full flex flex-col justify-center xl:p-10 py-5 lg:py-16 bg-red-100 rounded-b-xl lg:rounded-none lg:rounded-r-xl">
      {!nextPage && (
        <div>
          <div className="text-4xl font-semibold text-center">Register</div>
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
              sx={{ marginBottom: "30px" }}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <TextInputField
              label="Confirm Password"
              type="password"
              sx={{ marginBottom: "30px" }}
              required
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            />
          </div>
          <div className="flex p-5 pt-0 px-10 text-md justify-center">
            <div>Already have an account ?</div>
            <button
              onClick={() => navigate("/login")}
              href="#"
              className="ml-2 hover:underline hover:text-red-500"
            >
              Log In
            </button>
          </div>
          <div className="flex justify-center p-3">
            <HomePageButton onClick={handleClick1}>
              Next
              <FaArrowRight style={{ marginLeft: 5 }} />{" "}
            </HomePageButton>
          </div>
        </div>
      )}
      {nextPage && (
        <div>
          <div className="text-4xl font-semibold text-center">
            About yourself !
          </div>
          <div className="p-10 pb-5">
            <TextInputField
              label="First Name"
              type="text"
              sx={{ marginBottom: "30px" }}
              required
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <TextInputField
              label="Last Name"
              type="text"
              sx={{ marginBottom: "30px" }}
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <TextInputField
              label="Age"
              type="number"
              sx={{ marginBottom: "30px" }}
              required
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center p-3">
            <HomePageButton onClick={handleClick2}>Start !</HomePageButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterRightContent;
