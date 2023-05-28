import React from "react";
import {Card} from "antd";
import { Button, Table } from 'antd';
import Vector1 from '../components/Vector1.js'
class Notification extends React.Component{
  constructor(props){
    super(props);
    this.state={ }
  }
  render(){
    const data = [
      {
        key: '1',
        notice: 'From T & P - Campus Connect Program by E-Pack Polymers Private Limited',
        postedOn: '02 Dec 2022 16:55:57',
        action:'https://drive.google.com/file/d/176KPf83BgSVyJOgL__jkatek05GLqFQz/view?usp=share_link'
      },
      {
        key: '2',
        notice: 'From T & P- Campus recruitment - Havi Design',
        postedOn: '01 Dec 2022 16:20:11',
        action:'https://drive.google.com/file/d/1RpD1G6xdGxSWuaR0ltET9-P1qgmlxiIk/view?usp=share_link'
      },
      {
        key: '3',
        notice: 'From T & P - Heartiest Congratulations for being Selected in Brane Enterprises at a package of Rs.5.00 LPA',
        postedOn: '30 Nov 2022 17:07:17',
        action:'https://drive.google.com/file/d/1wsCAvUDoYGKLz_1Ku_jrSXeLumkHA4SV/view?usp=share_link'
      },
      {
        key: '4',
        notice: 'From Head T & P: Regarding Campus Recruitment by Atlanta Systems Pvt.Ltd',
        postedOn: '	30 Nov 2022 14:51:28',
        action:'https://drive.google.com/file/d/1VL7LrQ6PD6U6HFU2H01Hs4REQuZqI4PJ/view?usp=share_link'
      },
      {
        key: '5',
        notice: 'From Head T & P: Regarding Campus Recruitment by HCL Tech Limited.',
        postedOn: '30 Nov 2022 14:49:40',
        action:'https://drive.google.com/file/d/1uCLTgtWQfsbNU3gJSwPKVpDhfrdmaojw/view?usp=share_link'
      },
    ];
    const columns = [
      {
        title: '',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: 'Circulars',
        dataIndex: 'notice',
        key: 'name',
      },
      {
        title: 'Posted On',
        dataIndex: 'postedOn',
        key: 'age',
      },
      {
        title: 'Actions',
        dataIndex: 'action',
        key: 'key',
        render:(key,value)=>{
        return(
          <Button onClick={()=>(
            window.location.href=value.action
          )}>View</Button>
        )}
      },
    ];
    return(
      <>
      <div style={{ width:'100%',height:'20%' }}>
        <h1 style={{height: "18.5%",fontFamily: "Lexend Deca",fontStyle: "normal",fontWeight: "800",fontSize: "4rem",lineHeight: "88px",textAlign: "center",color: "#FFFFFF"}}>
          Job Portal
        </h1>
      </div>
      <br></br>
      <Card style={{marginLeft:'10%',height:'70%',width:'80%'}}>
        <Table  columns={columns} dataSource={data} bordered />
      </Card>
      <div style={{height:'10%' ,marginTop:'1%'}}>
        <Vector1/>
      </div>
      </>
    )
  }
}
export default Notification;