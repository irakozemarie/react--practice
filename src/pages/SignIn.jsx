
// import React, { useState } from "react";

// function AuthenticationPage() {
//   const [currentForm, setCurrentForm] = useState("signIn");

//   // State variables for sign-in form
//   const [signInEmail, setSignInEmail] = useState("");
//   const [signInPassword, setSignInPassword] = useState("");

//   // State variables for sign-up form
//   const [signUpName, setSignUpName] = useState("");
//   const [signUpEmail, setSignUpEmail] = useState("");
//   const [signUpPassword, setSignUpPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   // State variables for password recovery form
//   const [recoveryEmail, setRecoveryEmail] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   // State variables for OTP confirmation form
//   const [otpCode, setOtpCode] = useState("");
//   const [sentOtp, setSentOtp] = useState("");

//   // Sign-in form submit handler
//   const handleSignIn = (event) => {
//     event.preventDefault();

//     // Perform form validation
//     if (!signInEmail || !signInPassword) {
//       console.log("Please fill in both email and password fields.");
//       return;
//     }

//     // Proceed with the sign-in process
//     console.log("Sign-in successful!");
//     setCurrentForm("otp");
//   };

//   // Sign-up form submit handler
//   const handleSignUp = (event) => {
//     event.preventDefault();

//     // Perform form validation
//     if (!signUpName || !signUpEmail || !signUpPassword || !confirmPassword) {
//       console.log("Please fill in all fields.");
//       return;
//     }

//     if (signUpPassword !== confirmPassword) {
//       console.log("Passwords do not match.");
//       return;
//     }

//     // Proceed with the sign-up process
//     console.log("Sign-up successful!");
//     setCurrentForm("otp");
//     // Here you can trigger OTP sending to user's email or phone
//     // Simulating sending OTP
//     setSentOtp("123456"); // Set a dummy OTP for demonstration purposes
//   };

//   // Password recovery form submit handler
//   const handleRecovery = (event) => {
//     event.preventDefault();

//     // Perform form validation
//     if (!recoveryEmail || !newPassword) {
//       console.log("Please fill in both email and new password fields.");
//       return;
//     }

//     // Proceed with the password recovery process
//     console.log("Password recovery successful!");
//     setCurrentForm("otp");
//     // Simulating sending OTP
//     setSentOtp("123456"); // Set a dummy OTP for demonstration purposes
//   };

//   // OTP confirmation form submit handler
//   const handleOtpConfirmation = (event) => {
//     event.preventDefault();

//     // Validate the OTP
//     if (otpCode === sentOtp) {
//       console.log("OTP confirmed successfully!");
//       // Proceed with further action (e.g., granting access)
//     } else {
//       console.log("Invalid OTP. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-80 p-6 bg-white rounded shadow-lg">
//         {currentForm === "signIn" && (
//           <>
//             <h2 className="text-xl font-semibold mb-4">Sign In</h2>
//             <form onSubmit={handleSignIn}>
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Email"
//                   value={signInEmail}
//                   onChange={(e) => setSignInEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="password"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Password"
//                   value={signInPassword}
//                   onChange={(e) => setSignInPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Sign In
//               </button>
//             </form>
//             <div className="text-center mt-4">
//               <button
//                 className="text-blue-500 hover:underline"
//                 onClick={() => setCurrentForm("recovery")}
//               >
//                 Forgot Password?
//               </button>
//               <br />
//               Already don't have an account?{" "}
//               <button
//                 className="text-blue-500 hover:underline"
//                 onClick={() => setCurrentForm("signUp")}
//               >
//                 Sign Up
//               </button>
//             </div>
//           </>
//         )}

//         {currentForm === "signUp" && (
//           <>
//             <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
//             <form onSubmit={handleSignUp}>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Full Name"
//                   value={signUpName}
//                   onChange={(e) => setSignUpName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Email"
//                   value={signUpEmail}
//                   onChange={(e) => setSignUpEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="password"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Password"
//                   value={signUpPassword}
//                   onChange={(e) => setSignUpPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="password"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Confirm Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Register
//               </button>
//             </form>
//             <div className="text-center mt-4">
//               Already have an account?{" "}
//               <button
//                 className="text-blue-500 hover:underline"
//                 onClick={() => setCurrentForm("signIn")}
//               >
//                 Sign In
//               </button>
//             </div>
//           </>
//         )}

//         {currentForm === "recovery" && (
//           <>
//             <h2 className="text-xl font-semibold mb-4">Recover Password</h2>
//             <form onSubmit={handleRecovery}>
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Email"
//                   value={recoveryEmail}
//                   onChange={(e) => setRecoveryEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="password"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="New Password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Confirm
//               </button>
//             </form>
//             <div className="text-center mt-4">
//               <button
//                 className="text-blue-500 hover:underline"
//                 onClick={() => setCurrentForm("signIn")}
//               >
//                 Back to Sign In
//               </button>
//             </div>
//           </>
//         )}

//         {currentForm === "otp" && (
//           <>
//             <h2 className="text-xl font-semibold mb-4">Confirm OTP</h2>
//             <form onSubmit={handleOtpConfirmation}>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder="Enter OTP"
//                   value={otpCode}
//                   onChange={(e) => setOtpCode(e.target.value)}
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Confirm
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AuthenticationPage;
import React, { useState } from "react";

function AuthenticationPage() {
  const [currentForm, setCurrentForm] = useState("signIn");

  // State variables for sign-in form
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // State variables for sign-up form
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State variables for password recovery form
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // State variables for OTP confirmation form
  const [otpCode, setOtpCode] = useState("");
  const [sentOtp, setSentOtp] = useState("");

  // State variable for displaying messages to the user
  const [message, setMessage] = useState("");

  // Sign-in form submit handler
  const handleSignIn = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!signInEmail || !signInPassword) {
      setMessage("Please fill in both email and password fields.");
      return;
    }

    // Proceed with the sign-in process
    setMessage("Sign-in successful!");
    setCurrentForm("otp");
  };

  // Sign-up form submit handler
  const handleSignUp = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!signUpName || !signUpEmail || !signUpPassword || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (signUpPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Proceed with the sign-up process
    setMessage("Sign-up successful!");
    setCurrentForm("otp");
    // Here you can trigger OTP sending to user's email or phone
    // Simulating sending OTP
    setSentOtp("123456"); // Set a dummy OTP for demonstration purposes
  };

  // Password recovery form submit handler
  const handleRecovery = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!recoveryEmail || !newPassword) {
      setMessage("Please fill in both email and new password fields.");
      return;
    }

    // Proceed with the password recovery process
    setMessage("Password recovery successful!");
    setCurrentForm("otp");
    // Simulating sending OTP
    setSentOtp("123456"); // Set a dummy OTP for demonstration purposes
  };

  // OTP confirmation form submit handler
  const handleOtpConfirmation = (event) => {
    event.preventDefault();

    // Validate the OTP
    if (otpCode === sentOtp) {
      setMessage("OTP confirmed successfully!");
      // Proceed with further action (e.g., granting access)
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-80 p-6 bg-white rounded shadow-lg">
        {currentForm === "signIn" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Sign In</h2>
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Email"
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Password"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Sign In
              </button>
            </form>
            <div className="text-center mt-4">
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setCurrentForm("recovery")}
              >
                Forgot Password?
              </button>
              <br />
              Already don't have an account?{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setCurrentForm("signUp")}
              >
                Sign Up
              </button>
            </div>
          </>
        )}

        {currentForm === "signUp" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Full Name"
                  value={signUpName}
                  onChange={(e) => setSignUpName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  required
                />
              </div>
              <div class="mb-4">
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  required
                />
              </div>
              <div class="mb-4">
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Register
              </button>
            </form>
            <div className="text-center mt-4">
              Already have an account?{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setCurrentForm("signIn")}
              >
                Sign In
              </button>
            </div>
          </>
        )}

        {currentForm === "recovery" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Recover Password</h2>
            <form onSubmit={handleRecovery}>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Email"
                  value={recoveryEmail}
                  onChange={(e) => setRecoveryEmail(e.target.value)}
                  required
                />
              </div>
              <div class="mb-4">
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Confirm
              </button>
            </form>
            <div className="text-center mt-4">
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setCurrentForm("signIn")}
              >
                Back to Sign In
              </button>
            </div>
          </>
        )}

        {currentForm === "otp" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Confirm OTP</h2>
            <form onSubmit={handleOtpConfirmation}>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter OTP"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Confirm
              </button>
            </form>
          </>
        )}

        {/* Render message */}
        {message && (
          <div className="mt-4 text-center text-red-500">{message}</div>
        )}
      </div>
    </div>
  );
}

export default AuthenticationPage;
