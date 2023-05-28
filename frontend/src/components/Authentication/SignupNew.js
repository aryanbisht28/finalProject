import "./Style/signup.css";
import React, { useState } from "react";
import "./Style/signin.css";
import { FormControl } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Vector1 from "../Vector1";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useHistory } from "react-router";

function SignupNew() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const history = useHistory();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const submitHandler = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password, pic);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      history.push('/dashboard')
      // history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };

  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h1
        style={{
          // height: "18.5%",
          fontFamily: "Lexend Deca",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "3rem",
          // lineHeight: "88px",
          textAlign: "center",
          color: "#FFFFFF",
          // paddingTop: "25px",
        }}
      >
        Talk-A-Tive
      </h1>
      <div className="signin-box">
        <h3 className="signin-heading">Sign Up</h3>
        <h5 className="signin-text">Sign up and explore the community!</h5>
        <VStack 
        // style={{ marginTop: "30p%" }} 
        spacing="10px">
          <FormControl
            style={{
              minWidth: "18vw",
              background: "#224957",
              bordeRadius: "10px",
              marginTop:'7%'
            }}
            id="email"
            isRequired
          >
            <Input
              placeholder="Enter Your name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl
            style={{
              marginTop:'7%',
                // marginTop: "30px",
              minWidth: "18vw",
              background: "#224957",
              bordeRadius: "10px",

            }}
            id="email"
            isRequired
          >
            <Input
              type="email"
              placeholder="Enter Your Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl
            style={{
              marginTop:'7%',
              // marginTop: "30px",
              minWidth: "18vw",
              background: "#224957",
              bordeRadius: "10px",
            }}
            id="password"
            isRequired
          >
            <Input
             type={show ? "text" : "password"}
             placeholder="Enter Password"
             onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement
              min-width="4rem"
              style={{
                 marginTop: "6px",
               marginRight: "5px" }}
            >
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </FormControl>
          <FormControl
            style={{
              marginTop:'7%',
              // marginTop: "30px",
              minWidth: "18vw",
              background: "#224957",
              bordeRadius: "10px",
            }}
            id="password"
            isRequired
          >
            <Input
              type={show ? "text" : "password"}
              placeholder="Confirm password"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
            <InputRightElement
              min-width="4rem"
              style={{ marginTop: "6px", marginRight: "5px" }}
            >
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </FormControl>
          <FormControl
            style={{
              marginTop:'7%',
              // marginTop: "30px",
              minWidth: "18vw",
              background: "#224957",
              bordeRadius: "10px",
            }}
            id="pic"
          >
            <Input
             type="file"
             p={1.5}
             accept="image/*"
             onChange={(e) => postDetails(e.target.files[0])}
            />
            <InputRightElement
              min-width="4rem"
              style={{ marginTop: "6px", marginRight: "5px" }}
            >
              <Button h="1.75rem" size="sm" onClick={submitHandler}
        isLoading={picLoading}>
                 Browse
              </Button>
            </InputRightElement>
          </FormControl>
          
          <Button
            width="100%"
            style={{
              marginTop:'7%',
              // marginTop: "30px",
              background: "#20DF7F",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              color: "#ffff",
            }}
            onClick={submitHandler}
        isLoading={picLoading}
          >
            Sign UP
          </Button>
        </VStack>
      </div>
      <div className="vector1">
        <Vector1 />
      </div>
    </div>
  );
}

export default SignupNew;
