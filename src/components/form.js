import React, { useState } from "react";
import './form.css';

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [PhoneNumber, setPhonenNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
return (
    <form>
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={PhoneNumber}
        onChange={e => setPhonenNumber(e.target.value)}
        placeholder="Phone Number"
        type="number"
        required
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        pattern="[a-z0-5]{8,}" 
       required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;




