import React, { Component } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn} from "mdbreact";
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            profil: [] ,
        }  
    }


      onSubmit = () => {  

        if (this.state.username==localStorage.getItem('username')  && this.state.password==localStorage.getItem('password')) {
            this.props.history.push(`/dashboard`)
        }
        else{
            this.props.history.push(`/administration`)
            document.getElementById("paragraphe").style.display = "block"
        }
      }

     

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    
    componentDidMount() {
       
        axios.get('https://radiant-fortress-64926.herokuapp.com/administration')
            .then(response => {
                
                localStorage.setItem('username', response.data[0].username);
                localStorage.setItem('password', response.data[0].password);

                localStorage.getItem('username', true);

                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

  render() {
    return (
    
            <div className="container-fluid">
          
    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4" id="loginrow">
        <MDBRow>
          <MDBCol md="12">
            <form  onSubmit={(e)=>{
                e.preventDefault()
                this.onSubmit()
            }
               }>
              <p className="h5 text-center mb-4" id="loginp">Connexion de l'administration du site</p>
              <div className="grey-text">
                <MDBInput
                  label="Nom d'utilisateur"
                  icon="envelope"
                  group
                  type="text"
                  success="right"
                  name="username"
                  onChange={this.onChange}
                  value={this.state.username}
                  required
                />
               
                <MDBInput
                  label="mot de passe"
                  icon="lock"
                  group
                  type="password"
                  onChange={this.onChange}
                  value={this.state.password}
              
                  name="password"
                  required
                />
                <p id="paragraphe">Verifier votre nom d'utilisateur ou votre mot de passe</p>
              </div>
              <div className="text-center">
                <MDBBtn type="submit" id="inscrire-btn">Se Connecter</MDBBtn>
              </div>
            </form><br/>
          </MDBCol>
        </MDBRow>
        </div>
        <div className="col-md-4"></div>
    </div>
       
        </div>
    
    );
  }
}
export default Login;
