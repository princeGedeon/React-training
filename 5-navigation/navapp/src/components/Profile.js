import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    
    state = {
         data:{}
      }
   
        
    componentDidMount() {
        const data=this.props.match.params.profileId;
                
       
        
        axios({
          method: "get",
          url: "https://jsonplaceholder.typicode.com/users",
          
        }).then((resp)=>{
            console.log(resp.data[data]);
            this.setState({
                data:resp.data[data]
            })
        });
        

       
        

        
    }
    
    render() {
            
        return (
            <div className="container flex justify-center h-screen bg-blue-700 item-center">
              <h1 className="text-3xl font-bold">Profile</h1>
              <hr/>
               <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> 
              <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> 
              <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> 
              <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> 
              <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> 
              <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> 
              <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> 
              vv
              <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> <ul>
                  <li>Nom : {this.state.data.name}</li>
                  <li>Email : {this.state.data.email}</li>
                  <li>Numéro Téléphone : {this.state.data.phone}</li>
              </ul> 
                
            </div>
        );
    }

}

export default Profile;