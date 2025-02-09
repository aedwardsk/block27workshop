import { useState } from "react";

export default function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const handleClick = async () => {
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      });
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  };
  // console.log(handleClick);
  return (
    <div>
      <h2>Authenticate</h2>
      {/* {token && <p>Token: {token} </p>} */}
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button className='auth' onClick={handleClick}>
        Authenticate Token
      </button>
    </div>
  );
}
