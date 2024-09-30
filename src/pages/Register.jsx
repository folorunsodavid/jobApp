import NavBar from "../components/NavBar";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";

function Register() {
  return (
    <Wrapper>
      <form className="form">
        <NavBar />
        <h4>Register</h4>
        <div className="form-row">
          <FormRow
            type="text"
            name="name"
            labelText="Name"
            placeholder="David"
            required
          />
          <FormRow
            type="text"
            name="lastname"
            labelText="Last name"
            placeholder="Olubayo"
            required
          />
          <FormRow type="text" name="location" labelText="Location" required />
          <FormRow
            type="email"
            name="email"
            labelText="Email"
            placeholder="lagbaja@tamedo.com"
            required
          />
          <FormRow
            type="password"
            name="password"
            labelText="password"
            placeholder="secret"
            required
          />
          <button type="submit" className="btn btn-block">
            Submit
          </button>
          <p>
            Already a member?
            <Link to="/login" className="register-link">
              Login
            </Link>
          </p>
        </div>
      </form>
    </Wrapper>
  );
}

export default Register;
