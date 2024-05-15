import React from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthenInput from "../../components/inputs/AuthInput";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { email, password } = values;

    const userData = {
      email,
      password,
    };

    try {
      // const response = await fetch("/api/users/new", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userData),
      // });

      // if (!response.ok) {
      //   const { message } = await response.json();
      //   toast.error(message);
      //   return;
      // }

      toast.success("Log in successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something went wrong!");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-100"
      style={{
        backgroundImage:
          "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/20190923_Independence_Palace-10.jpg/1200px-20190923_Independence_Palace-10.jpg')",
      }}
    >
      <div
        className="bg-white rounded-3xl shadow-md py-6 px-16 w-3/4"
        style={{ minWidth: 700, maxWidth: 800 }}
      >
        <h1 className="text-2xl mb-4 text-center text-blue-950 font-bold">
          Đăng ký tài khoản
        </h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <AuthenInput
                type="email"
                name="email"
                placeholder="Email"
                error={errors.email || ""}
              />

              <AuthenInput
                type="password"
                name="password"
                placeholder="Mật khẩu"
                error={errors.password || ""}
              />
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-64 bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Đăng nhập
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="text-center text-sm text-gray-400 mt-3">
          Bạn chưa có tài khoản?{" "}
          <Link
            to={"/dang-ky"}
            className="text-blue-950 hover:underline active:font-bold"
          >
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
