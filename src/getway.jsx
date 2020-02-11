import React from 'react';
import $ from 'jquery'
import {CreateGateway} from './Services/GetwayService'
export class GatewayComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userId: 4859,
            paymentMethod: 'stripe',
            platfor: {platform:'igms'},
        }
    }

    componentWillMount() {
         const headers = {};
         headers["X-Csrf-Token"] = 'cdee38f26348255e8a4681bb0814806b' ;
         let request_parameters = {
             url : 'https://artur.igms.com/api/user-data/init-app',
             type : "POST",
             dataType : 'json',
             data: this.state.platfor,
             global : false,
             headers
         };
         $.ajax(request_parameters)
            .then(res => {console.log(JSON.parse(res),'ress');

            });
    }
    createGatewayButtonClick =()=>{
         const[userId, paymentMethod] = this.state;
         let gateway =  CreateGateway(userId, paymentMethod);
         gateway.then(res => {
             debugger;
             console.log(res, 'urllll');
             // window.location.href="https://www.w3schools.com/";
             })
             .catch(er => console.log(er));
        };

    render() {
        return(
            <div>
                <select>
                    <option>stripe</option>
                </select>

                <button onClick={this.createGatewayButtonClick}>Submit</button>
            </div>
        )
    }

}
