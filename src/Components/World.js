import React,{Component} from "react";
import axios from "axios";

class World extends Component{
   
        constructor(){
            super();
            this.state ={
                data : []
            };
        }

        componentDidMount(){
            axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
                this.setState({data:response.data});
            })
        }
        render(){
        return(
            <table className="table table-primary table-bordered table-striped">
                <thead>
                    <tr>
                        <td>Country</td>
                        <td>Total Cases</td>
                        <td>Recovered</td>
                        <td>Death</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((itm,ky)=>{
                            return(
                                <tr>
                                    <td>{itm.country} <img style={{width:'60px',marginLeft:'30px'}} src={itm.countryInfo.flag}/></td>
                                    <td>{itm.cases}</td>
                                    <td>{itm.recovered}</td>
                                    <td>{itm.deaths}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
export default World;