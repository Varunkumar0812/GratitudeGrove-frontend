import Logo from "../../assests/logo.png";
import WelcomeImage from "../../assests/welcome-image.jpg";

function LoginRegisterContent({ isRegister }) {
  const welcome_message = isRegister
    ? "Ready to start your incredible journey on self-improvement. First tell us a little about yourself !"
    : "";
  const welcome_title = isRegister ? "Welcome !" : "Welcome Back !";

  return (
    <div className="lg:w-1/2 h-full pt-5 bg-yellow-100 rounded-t-xl lg:rounded-none lg:rounded-l-xl lg:rounded-bl-xl flex flex-col items-center justify-between">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="main-logo"
          className="w-[80px] h-[80px] mr-2"
        ></img>
        <div className="text-2xl">GratitudeGrove</div>
      </div>
      <div className="text-3xl font-semibold my-1">{welcome_title}</div>
      <div className="px-20 text-center mb-5">{welcome_message}</div>
      <img
        src={WelcomeImage}
        alt="welcome"
        className="w-full h-82 rounded-bl-xl"
      ></img>
    </div>
  );
}

export default LoginRegisterContent;
