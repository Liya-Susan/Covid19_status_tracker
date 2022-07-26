import React,{Component} from "react";
import {Card} from 'react-bootstrap';
import Statedata from './Statedata';
import axios from 'axios';

class India extends Component{
    constructor(){
        super();
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            this.setState({data:response.data})
        })
    }
    render(){
        return(
            <div className="row">
                 <div>
                        <br/>
                        <img  src='https://www.worldometers.info/img/flags/small/tn_in-flag.gif' style={{ height: 35 }} />
                        <h3>INDIA</h3>
                 </div>
                 <div className="col-md-12">
                     <div className="row">
                        <div className="col-md-3">
                                <Card className='badge bg-primary' style={{ width: '16rem' }}>
        
                                    <Card.Body className=" text-center">
                                        <Card.Title>TOTAL CASES</Card.Title>
                                        <h3>{this.state.data.cases}</h3>
                                        
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card className='badge bg-warning' style={{ width: '16rem' }}>
        
                                    <Card.Body className=" text-center">
                                        <Card.Title>ACTIVE CASES</Card.Title>
                                        <h3>{this.state.data.active}</h3>
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                         <div className="col-md-3">
                            <Card className='badge bg-success' style={{ width: '16rem' }}>
  
                                <Card.Body className=" text-center">
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h3>{this.state.data.recovered}</h3>
                                    
                                    
                                </Card.Body>
                            </Card>
                         </div>
                         <div className="col-md-3">
                            <Card className='badge bg-danger' style={{ width: '16rem' }}>
  
                                    <Card.Body className=" text-center">
                                        <Card.Title>DEATHS</Card.Title>
                                        <h3>{this.state.data.deaths}</h3>
                                        
                                        
                                    </Card.Body>
                            </Card>
                         </div>
                     </div>
                 </div>   
                <div className="col-md-12"> 
                    <Statedata/>
                </div>
                           
                    
            </div>
        )
    }
}
export default India;