import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Panier from './../dashboard/panier'
import { Link } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    
    }; 
}


  state = {
    modal5: false, 
  }

  get = () =>{
      return   document.getElementById('panierdiv').style.display = 'block'
  }
  //popops login fonction 
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  render() {
  
    const { user } = this.props.auth;

    return (
      <div className="container-fluid">
          
          <MDBNavbar color="red" dark expand="md" style={{ marginTop: "1px" }} id="navbar" scrolling>
          <MDBNavbarBrand>
            <img src="logo.png" alt="Logo" id="logoimage"/>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav left>

            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="" onClick={this.onLogoutClick} className="nav-header" >Deconnexion du panier</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>


        <center>
        <div  id="ajoutercomponent"> 
         <h3 id="h3header"> GESTION DU  PANIER</h3>
          </div>
        </center>
            <div className="wrapper">
              <nav id="sidebar">
              <center>
                  <div className="sidebar-header">
                    <img src="logo.png" alt="logo" id="imagedash"/>
                        <h3>{user.name.split(" ")[0]}</h3>
                        <button id="li1"  className="btn btn-primary" onClick={()=>{
                          document.getElementById('ajoutercomponent').style.display = 'none'
                          this.get()
                        }}  id="bouttonajouter">Votre panier</button><br/>
                         <Link to="/" id="btn-accueil">Accueil</Link><br/>
                         <Link to="/albums" id="btn-accueil">les Albums</Link>
                  </div>
                  </center>
              </nav>
              
            </div>

            <div>
         
        </div>
                        
        <div className="row">
              <div className="col-md-2">

              </div>
              <div className="col-md-10">
                <Panier/>
              </div>
        </div>
        <footer className="page-footer" id="footerdash">
              <center>
                <span>© 2019 Copyright   <span id="spanfooter">Albums Malagasy</span></span>
              </center>
        </footer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
