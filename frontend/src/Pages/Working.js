import React from 'react';
import { Button, Result,Card } from 'antd';
import {  NavLink} from "react-router-dom";

const Working = () => (
    <Card style={{width:'100%',heigth:'100vh'}}>
        
        <Result
          status="404"
          title="Working"
          
          subTitle="Sorry, the page you visited does not exist currently but we are working on it"
          extra={

              <NavLink to="/dashboard" >
                  <Button type="primary">Back Home
              </Button>
              </NavLink>
              }
        />
    </Card>
);
export default Working;