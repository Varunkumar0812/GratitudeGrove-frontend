import LoginRegisterContent from "../components/login-page/login-register-content";
import LoginRightContent from "../components/login-page/login-content";
import RegisterRightContent from "../components/login-page/register-content";

function LoginRegisterPage({ isRegister }) {
  return (
    <div className="flex justify-center w-full lg:h-[100vh] items-center py-10">
      <div className="w-11/12 sm:w-2/3 flex flex-col justify-center items-center h-full lg:flex-row shadow-xl rounded-bl-xl">
        <LoginRegisterContent isRegister={isRegister} />
        {isRegister ? <RegisterRightContent /> : <LoginRightContent />}
      </div>
    </div>
  );
}

export default LoginRegisterPage;
