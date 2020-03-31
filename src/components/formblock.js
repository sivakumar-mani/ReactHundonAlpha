import React, { useState } from "react";
import '../styles/formblock.scss'

function FormBlock() {
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

        <button type="button" className="addform" onClick={() => handleAdd()}>
          Add Form
        </button>

      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            {/* <input
              type="text"
              placeholder="Enter text"
              value={field.value || ""}
              onChange={e => handleChange(idx, e)}
            />
             <input
              type="text"
              placeholder="Enter text"
              value={field.value || ""}
              onChange={e => handleChange(idx, e)}
            /> */}

            <form action="">
              <div class="container">
                <div class="container signin">
                  <h5>Register</h5>
                  <button type="button" className="float-right btnPos" onClick={() => handleRemove(idx)}>
                    X
            </button>
                </div>

                <p>Please fill in this form to create an account.</p>
                <hr />

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                <hr />
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" class="registerbtn">Register</button>
              </div>


            </form>
          </div>
        );
      })}
    </div>
  )
}

export default FormBlock;
