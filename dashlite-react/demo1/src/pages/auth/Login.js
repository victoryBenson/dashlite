import React, { useState } from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import { Form, FormGroup, Spinner, Alert } from "reactstrap";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { login } from "../../redux/features/auth/authSlide";
import {useDispatch, useSelector} from 'react-redux'


const initialState = {
    email: "",
    password: "",
};


const Login = () => {
  const dispatch = useDispatch();
  const {isLoading, isAuthenticated, isError} = useSelector((state)=> state.auth)
  const [formState, setFormState] = useState(initialState)


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormState({...formState, [name]: value})
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await dispatch(login(formState))
  };


  return (
    <React.Fragment>
      <Head title="Login" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>

          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h4">Sign-In</BlockTitle>
                <BlockDes>
                    <p>Access Dashlite using your email and passcode.</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            {isError && (
                <div className="mb-3">
                    <Alert color="danger" className="alert-icon">
                        {" "}
                        <Icon name="alert-circle" /> Unable to login with credentials{" "}
                    </Alert>
                </div>
            )}
            <Form onSubmit={handleSubmit} className="is-alter">
                <FormGroup>
                    <div className="form-label-group">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                    </div>
                    <div className="form-control-wrap">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formState.email}
                            required
                            placeholder="Enter your email address"
                            className="form-control-lg form-control"
                            onChange={handleChange}
                        />
                    </div>
                </FormGroup>
                <FormGroup>
                    <div className="form-label-group">
                    <label className="form-label" htmlFor="password">
                        Passcode
                    </label>
                    <Link className="link link-primary link-sm" to={`${process.env.PUBLIC_URL}/auth-reset`}>
                        Forgot Code?
                    </Link>
                    </div>
                    <div className="form-control-wrap">
                        {/* <a
                            href="#password"
                            onClick={(ev) => {
                            ev.preventDefault();
                            setPassState(!passState);
                            }}
                            className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                        >
                            <Icon name="eye" className="passcode-icon icon-show"></Icon>

                            <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                        </a> */}
                        <input
                            type="password"
                            name="password"
                            value={formState.password}
                            required
                            placeholder="Enter your password"
                            // className={`form-control-lg form-control ${password ? "is-hidden" : "is-shown"}`}
                            className="form-control-lg form-control"
                            onChange={handleChange}
                        />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Button size="lg" className="btn-block" type="submit"  color="primary">
                    {isLoading ? <Spinner size="sm" color="light" /> : "Sign in"}
                    </Button>
                </FormGroup>
            </Form>
            <div className="form-note-s2 text-center pt-4">
              {" "}
              New on our platform? <Link to={`${process.env.PUBLIC_URL}/auth-register`}>Create an account</Link>
            </div>
            <div className="text-center pt-4 pb-3">
              <h6 className="overline-title overline-title-sap">
                <span>OR</span>
              </h6>
            </div>
            <ul className="nav justify-center gx-4">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#socials"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  Facebook
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#socials"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  Google
                </a>
              </li>
            </ul>
          </PreviewCard>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default Login;
