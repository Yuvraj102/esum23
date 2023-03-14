import React, { useState } from "react";
import axios from "axios";
import "./spinner.css";
import { useNavigate } from "react-router-dom";
import qr from "../assets/sanket_payment.jpg";

function Register() {
  const [loading, setLoading] = useState(false);
  const prodLink = "https://esummit-backend-7n7c.onrender.com/";
  const locallink = "http://localhost:3000/";
  const navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      college: event.target.college.value,
      phone: event.target.phone.value,
      transaction_id: event.target.transaction_id.value,
    };
    setLoading(true);
    const result = await axios.post(prodLink, data);

    setLoading(false);
    if (result.data?.status) {
      // success redirect
      navigate("/", { replace: true });
    } else {
      alert("failed to save contact support");
    }
  };
  return (
    <section
      class="bg-gray-50 dark:bg-gray-900"
      style={{ backgroundColor: "#00040F" }}
    >
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : null}
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        ></a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Let's Go E-SUMMIT 2023
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleRegister}
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required={true}
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@gmail.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your College
                </label>
                <input
                  type="text"
                  name="college"
                  id="college"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="JSPM's Rajashri Shahu College of Engineering"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="9856437823"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your transactionId
                </label>
                <input
                  type="text"
                  name="transaction_id"
                  id="transaction"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="for e.g. 3073532 "
                  required={true}
                />
                <p
                  style={{
                    color: "#FFCC00",
                    fontSize: "14px",
                    fontStyle: "italic",
                  }}
                >
                  * It is extremely important to make the payment otherwise your
                  registration will not be considered
                </p>
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5"></div>
                <div class="ml-3 text-sm"></div>
              </div>
              <img
                src={qr}
                alt="payment QR"
                style={{
                  height: "300px",
                  width: "300px",
                  objectFit: "contain",
                  margin: "auto",
                }}
              />
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-gradient"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
