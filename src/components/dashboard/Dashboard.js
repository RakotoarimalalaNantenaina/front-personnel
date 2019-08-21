import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Atelier from './../atelier/atelier';
import Getatelier from './../atelier/getatelier'
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBRow, MDBInput,  MDBIcon } from "mdbreact";


import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      titre: '',
      description:'',
      date: '',
      horaire: '',
      duree: '',
      place_dispo: '',
      place_reserve: '',
      photo_produit:'',
      prix: '',
    };

    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }
  onChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('photo_produit', this.uploadInput.files[0]);
    data.append('titre',this.state.titre);
    data.append('id_user', localStorage.getItem('id_user'))
    data.append('description',this.state.description);
    data.append('date',this.state.date);
    data.append('genre',this.state.genre);
    data.append('artiste',this.state.artiste);
    data.append('prix',this.state.prix);
  
    fetch('http://localhost:8080/atelier', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ photo_produit: `http://localhost:8080/atelier/${body.photo_produit}` });
        console.log('ity ilay body.fil',body.photo_produit);
        
      });
    });
  }


  state = {
    modal5: false, 
  }

  get = () =>{
      return   document.getElementById('listecomponent').style.display = 'block'
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
                <MDBNavLink to="" onClick={this.onLogoutClick} className="nav-header" >Deconnexion</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <center>
        <div  id="ajoutercomponent"> 
         <h3 id="h3header"> BIENVENUE SUR L ' ADMINISTRATION   {user.name.split(" ")[0]}</h3>
          </div>
        </center>
      
                <ul className="navbar-nav mr-auto" id="navbarmobile">
                  <li className="nav-item active">
                  <MDBBtn rounded onClick={this.toggle(1)} id="bouttonajouter">
                         Ajouter nouveau produit
                      </MDBBtn>
                  </li>
                  <li className="nav-item active">

                      <button id="li1"  className="btn btn-primary" onClick={()=>{
                          document.getElementById('ajoutercomponent').style.display = 'none'
                          this.get()
                        }} href="#"  id="bouttonajouter">listes de vos albums</button>
                  </li><br/>
                  <li className="nav-item active">
                    <Link to="/"><span id="btn-accueil" >Accueil</span></Link>
                  </li>
                 
                </ul>
            

            <div className="wrapper">
              <nav id="sidebar">
              <center>
                  <div className="sidebar-header">
                    <img src="logo.png" alt="logo" id="imagedash"/>
                        
                        <MDBBtn rounded onClick={this.toggle(1)} id="bouttonajouter">
                         Ajouter nouveau produit
                      </MDBBtn>
                        <button id="li1"  className="btn btn-primary" onClick={()=>{
                          document.getElementById('ajoutercomponent').style.display = 'none'
                          this.get()
                        }} href="#"  id="bouttonajouter">listes de vos albums</button>
                         <Link to="/" id="btn-accueil">Accueil</Link>

                  </div>
                  </center>
              </nav>
              
            </div>

            <div>
         
        </div>
    


    <MDBRow>
          <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)}>
            <MDBModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold"
              toggle={this.toggle(1)}
            >
             <p className="h4 text-center py-4" id="pdash">Ajout de nouveau album </p>
            </MDBModalHeader>
            <MDBModalBody>
            <form  onSubmit={this.handleUploadImage}>
                  
                  <div className="grey-text">
                    <MDBInput
                      label="Titre de l'album"
                      group
                      type="text"
                      validate
                      success="right" value={this.state.value}  onChange={this.onChange} name="titre"
                      required
                    />
                    <MDBInput
                      label="Artiste"
                      group
                      type="text"
                      validate
                      success="right" value={this.state.value}  onChange={this.onChange} name="artiste"
                      required
                    />
                    <MDBInput
                      label="Déscription de l'album" 
                      group
                      type="text"
                      validate
                      success="right" value={this.state.value} onChange={this.onChange} name="description"
                      required
                    />
                    <MDBInput
                      label="Date de publication"
                      group
                      type="date"
                      validate
                      success="right" value={this.state.value} onChange={this.onChange} name="date"
                      required
                    />
                     <MDBInput
                      label="genre de l'album"
                      group
                      type="text"
                      validate
                      success="right" value={this.state.value} onChange={this.onChange}  name="genre"
                      required
                    />
                    <MDBInput
                      label="Prix de l'album (Ar)"
                      group
                      type="text"
                      validate
                      success="right" value={this.state.value} onChange={this.onChange}  name="prix"
                      required
                    />
                    <label className="btn btn-default btn-file" id="fichier">
                     Image de l'album<input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_produit"   required/>
                  </label>
                  </div>
                  <div className="text-center">
                  <div className="text-center mt-4">
                <button className="btn btn-outline-warning" >
                  Ajouter
                  <MDBIcon icon="paper-plane" className="ml-2" />
                </button>
              </div>
              </div>
                </form>
            </MDBModalBody>
          </MDBModal>
        </MDBRow>



        <div className="row">
              <div className="col-md-2">

              </div>
              <div className="col-md-10">
              
                <Getatelier/>
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
