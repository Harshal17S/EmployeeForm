import React, { useState } from "react";
import './style.css';


export default function Form() {
  const [companyname, setcompanyname] = useState("");
  const [jobtile, setjobtile] = useState("");
  const [email, setemail] = useState("");
  const [salary, setsalary] = useState("");

  const collectData = async (e) => { 
    e.preventDefault();
    let result = await fetch("http://localhost:4000/", {
      method: "post",
    body: JSON.stringify({ companyname, jobtile, email, salary }),
      headers: {
        'Content-Type': "application/json",
      },
    }).then(()=>{
        alert("Added Employee")
    });
    // result = await result.json;
    // localStorage.setItem("users", JSON.stringify(result));
  };

  return (
    <div className="container">
      <form onSubmit={collectData}>
        <h1 className="text-center pt-3">Emplooye Form</h1>
        <div className="mb-3">
          <label className="form-label">Comapany Name</label>
          <input
            type="text"
            className="form-control"
            value={companyname}
            onChange={(e) => setcompanyname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Job Tile</label>
          <input
            type="text"
            className="form-control"
            value={jobtile}
            onChange={(e) => setjobtile(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="text"
            className="form-control"
            value={salary}
            onChange={(e) => setsalary(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
