import React from "react";
import { Card } from 'antd';
import './Dashboard.css'
import JobSeeker from './Images/JobSeeker.png'
import Classroom from './Images/Classroom.png'
import ELearning from './Images/ELearning.png'
import FacebookMessenger from './Images/FacebookMessenger.png'
import Vector1 from '../components/Vector1.js'
import {  NavLink} from "react-router-dom";
class Dasboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return(
      <>
      <div className="main">
        <h1 style={{height: "18.5%",fontFamily: "Lexend Deca",fontStyle: "normal",fontWeight: "800",fontSize: "4rem",lineHeight: "88px",textAlign: "center",color: "#FFFFFF"}}>
          Talk-A-Tive
        </h1>
        <div className="center">                            
          <Card style={{marginTop:'4%', width:"15%",background:'#224957',display:'flex',flexDirection:'column' ,marginRight:'5%'}} bordered={false} hoverable> 
            <NavLink to="/notification" >
              <div className="image">
                <img src={JobSeeker} style={{display:'inline',verticalAlign: 'middle'}}/>
              </div>
              <h4 style={{ fontFamily: "Lexend Deca",fontStyle: "normal",fontSize: "1rem",fontWeight: '500',textAlign: "center", color: "#FFFFFF"}}>
                Job Portal
              </h4>
            </NavLink>
          </Card>
          <Card style={{width:"15%",marginTop:'4%',background:'#224957'}} bordered={false} hoverable>
            <NavLink to="/chats" >                      
              <div className="image">
                <img src={FacebookMessenger} style={{display:'inline',verticalAlign: 'middle'}}/>
              </div>
              <h4 style={{ fontFamily: "Lexend Deca",fontStyle: "normal",fontSize: "1rem", fontWeight: '500',textAlign: "center", color: "#FFFFFF"}}>
                Chats
              </h4>
            </NavLink>
          </Card>      
        </div>
        <div className="center">                                               
          <Card style={{marginTop:'4%', width:"15%",background:'#224957', marginRight:'5%'}} bordered={false} hoverable>
            <NavLink to="/underConstruction" >
              <div className="image">
                <img src={ELearning} style={{display:'inline',verticalAlign: 'middle'}} />
              </div>          
              <h4 style={{fontFamily: "Lexend Deca",fontStyle: "normal",fontSize: "1rem",fontWeight: '500', textAlign: "center", color: "#FFFFFF"}}>
                Mentorship
              </h4>
            </NavLink>
          </Card>
          <Card style={{ marginTop:'4%',width:"15%" ,background:'#224957'}}  bordered={false} hoverable>
            <NavLink to="/underConstruction" >
              <div className="image" >
                <img src={Classroom} style={{display:'inline',verticalAlign: 'middle'}} />
              </div>
              <h4 style={{ fontFamily: "Lexend Deca",fontStyle: "normal",fontSize: "1rem", fontWeight: '500', textAlign: "center", color: "#FFFFFF"}}>
                Courses
              </h4>
            </NavLink>
          </Card>        
        </div>
        <div style={{height:'10%' ,marginTop:'5%'}}>
          <Vector1/>
        </div>
      </div>
      </>
    )
  }
}
export default Dasboard;






// console.log('rendered')

// import Link from "antd/es/typography/Link";

// import { history } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// const history = useHistory();
// cover={<img src={FacebookMessenger}  style={{width:'5em',height:'4em',alignItems:'center'}}/>}
// > 
 {/* <div style={{ width: "100%", height: "100vh" }}> */}
      {/* </div> */}
//   paddingTop: "25px",
                //    marginBottom:'20%'



 {/* // cover={ */}
  //  style={{width:'5em',height:'4.5em'}}
 {/* }> */}


{/* ?cover={ */}
 // style={{textAlign:'center',width:'100%'}}
// style={{width:'50%'}}
 {/* // }
                //   style={{width:'5em',height:'4em'}}
                // />
            // } 
                // >? */}


 {/* style={{display: 'flex', width: "100%", height: "100vh" }}> */}
            {/* style={{
                // marginLeft:'40% ',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                justifyItems:'center',
                // width:'40%',
                height: '100vh',
              }}> */}
            
            {/* <Row>
              <Col> */}


                            {/* </Col>
              <Col > 
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>              
            </Row> */}
            
          {/* </div>
          <div style={{
            // marginLeft:'40% ',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width:'40%',
            height: '100%',
          }}>
        
        {/* <Row>
          <Col> */}
            {/* <Card title="Card title" bordered={false}>Card content</Card> */}
          {/* </Col>
          <Col > 
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>              
        </Row> */}