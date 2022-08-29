import React, { useState, useEffect } from "react";
import { Button } from "../GlobalButton/buttonElement";
import {
  Container,
  CardElement,
  Link,
  Text,
  SubText,
  Input,
  Label,
  ButtonContainer,
} from "./styles/signin";
import Swal from "sweetalert2";
import { actionTypes } from "../../context/reducer";
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { auth, provider } from "../../database/firebase";
import db from "../../database/firebase";
import { containerClasses } from "@mui/system";
const SignIn = ({ user }) => {
  const [state, dispatch] = useStateValue();
  const [type, setType] = useState(user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [name, setName] = useState("");
  const [superAdmin, setSuperAdmin] = useState();
  const [admins, setAdmins] = useState();
  const [found, setFound] = useState(false);
  const navigate = useNavigate();
  const signInStudent = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes?.SET_USER,
          user: result?.user,
          user_type: "student",
        });
        localStorage.setItem("user", JSON.stringify(result?.user));
        localStorage.setItem("user_type", "student");
        navigate("/student/home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  useEffect(() => {
    db.collection("admins").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.data().isSuperAdmin === true) {
          setSuperAdmin(doc.data());
        }
      });
    });
    db.collection("admins").onSnapshot((snapshot) => {
      setAdmins(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  const signInAdmin = (e) => {
    e.preventDefault();
    if (email == "admin@digihostel.com" && password == "admin") {
      dispatch({
        type: actionTypes?.SET_USER,
        user: { email: email },
        user_type: "superAdmin",
      });
      navigate("/admin/home");
    } else {
      for (let i = 0; i < admins.length; i++) {
        if (admins[i].email == email) {
          if (admins[i].password == password) {
            dispatch({
              type: actionTypes?.SET_USER,
              user: admins[i],
              user_type: "admin",
            });
            setFound(true);
            navigate("/admin/home");
            break;
          }
        }
      }
    }
  };
  const signUpAdmin = (e) => {
    e.preventDefault();
    if (password == checkPassword) {
      db.collection("admins").add({
        name: name,
        email: email,
        password: password,
        isVerified: false,
        escalation: null,
        isSuperAdmin: false,
      });
      dispatch({
        type: actionTypes?.SET_USER,
        user: {
          name: name,
          email: email,
          password: password,
          isVerified: false,
          escalation: null,
          isSuperAdmin: false,
        },
        user_type: "admin",
      });
      navigate("/");
    } else {
      alert("Passwords do not match");
    }
  };
  useEffect(() => {
    db.collection("admins").onSnapshot((snapshot) => {
      setSuperAdmin(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <Container>
      <CardElement>
        {type == "student" && (
          <>
            <Text>Student Sign In</Text>
            <SubText>
              Sign In with a simple click using your google account!
            </SubText>
            <Button onClick={signInStudent}>Sign In With Google</Button>
            <Link
              onClick={() => {
                setType("admin");
              }}
            >
              <u>Admin?</u>
            </Link>
          </>
        )}
        {(type == "admin" || type == "signupadmin") && (
          <>
            {type == "admin" ? (
              <Text>Admin Sign In</Text>
            ) : (
              <Text>Admin Sign Up</Text>
            )}

            {type == "admin" ? (
              <SubText>
                Sign In using your registered email and password.
              </SubText>
            ) : (
              <SubText>Sign Up using your email and password.</SubText>
            )}

            <form>
              {type == "signupadmin" && (
                <>
                  {" "}
                  <Label>Name</Label>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></Input>{" "}
                </>
              )}
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Input>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></Input>

              {type == "signupadmin" && (
                <>
                  {" "}
                  <Label>Re-Enter Password</Label>
                  <Input
                    type="password"
                    placeholder="Your password Again"
                    onChange={(e) => {
                      setCheckPassword(e.target.value);
                    }}
                  ></Input>{" "}
                </>
              )}
              <ButtonContainer>
                {type != "signupadmin" ? (
                  <Button onClick={signInAdmin}>Sign In</Button>
                ) : (
                  <Button onClick={signUpAdmin}>Sign Up</Button>
                )}
              </ButtonContainer>
            </form>
            {type == "admin" ? (
              <>
                <Link
                  onClick={() => {
                    setType("signupadmin");
                  }}
                >
                  <u>Sign Up as a New Admin?</u>
                </Link>
                <Link
                  onClick={() => {
                    setType("student");
                  }}
                >
                  <u>Student?</u>
                </Link>
              </>
            ) : (
              <>
                <Link
                  onClick={() => {
                    setType("admin");
                  }}
                >
                  <u>Sign In as an Admin?</u>
                </Link>
                <Link
                  onClick={() => {
                    setType("student");
                  }}
                >
                  <u>Student?</u>
                </Link>
              </>
            )}
          </>
        )}
      </CardElement>
    </Container>
  );
};

export default SignIn;
