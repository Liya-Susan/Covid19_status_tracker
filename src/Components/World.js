import React,{Component} from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';


class World extends Component{
   
        constructor(){
            super();
            this.state ={
                data : [],
                searchCountries:""
            };
        }

        componentDidMount(){
            axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
                this.setState({data:response.data});
            })
        }
        render(){
            const dt=this.state.data;
            const filterCountries = dt.filter((item) => {
                return this.state.searchCountries !== ""
                  ? item.country.toLowerCase().includes(this.state.searchCountries.toLowerCase())
                  : item;
              });
        return(
            <>
            <Form className="col-md-12 mt-3">
                                <Form.Group className="mb-3" controlId="formBasicSearch">
                                        <Form.Control type="text" placeholder="Search a Country" onChange={(e)=>this.setState({searchCountries : e.target.value})}/>
                                </Form.Group>
                                </Form>
            <table className="table table-primary table-bordered table-striped">
                <thead>
                    <tr>
                        <td></td>
                        <td>Country</td>
                        <td>Total Cases</td>
                        <td>Recovered</td>
                        <td>Death</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterCountries.map((itm,ky)=>{
                            return(
                                <tr>
                                    <td> <img style={{width:'60px',marginLeft:'30px'}} src={itm.countryInfo.flag}/></td>
                                    <td>{itm.country}</td>
                                    <td>{itm.cases}</td>
                                    <td>{itm.recovered}</td>
                                    <td>{itm.deaths}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </>
        )
    }
}
export default World;