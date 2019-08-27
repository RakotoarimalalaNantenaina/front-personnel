import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,MDBFormInline } from "mdbreact";
class SideNavPage extends Component {

  state = {
    modal5: false,
    
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


  render() {
  
  
    return (
      <div>
        <MDBNavbar color="red" dark expand="md" style={{ marginTop: "1px" }} id="navbar" className="fixed-top" scrolling >
          <MDBNavbarBrand>
            <img src="logo.png" alt="Logo" id="logoimage"/>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="" className="nav-header">Accueil</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/albums" className="nav-header">Les albums</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="" className="nav-header">Artistes</MDBNavLink>
              </MDBNavItem>
             
            </MDBNavbarNav>
            <MDBNavbarNav right>
             
              <MDBNavItem>
              <MDBFormInline waves>
                        <div className="md-form my-0">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Rechercher"
                            aria-label="Search"
                          />
                        </div>
                      </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>



      </div>
    );
  }
}

export default SideNavPage;