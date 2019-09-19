import React, { Component } from 'react';
import axios from 'axios';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Atelier extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nom: '',
            prenom: '',
            email: '',
            numtel: '',
            profil: []
        };

        this.onChange = this.onChange.bind(this)
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        axios.get('https://radiant-fortress-64926.herokuapp.com/atelier')
            .then(response => {
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
   
    Produit() {
        return <div className="container-fluid">
            <div className="row view-group" id="colonne">
                {this.state.profil.length > 0 ? (

                    this.state.profil.filter(us=>us.valid==true).map(user => (

                        <div class="item col-md-4" id="carte">

                            <div className="card card-cascade narrower card-ecommerce">
                                <img width="auto" id="imageproduit" height="230px" src={'https://radiant-fortress-64926.herokuapp.com/atelier/' + user.photo_produit} alt={user.photo_produit} />

                                <div className="card-body card-body-cascade">

                                    <center><h6 id="description"><span id="nomproduit">{user.titre}</span></h6></center>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="card-text"><strong><span id="description">Titre de l'album</span></strong>&nbsp;&nbsp; <div id="point">{user.titre}</div> </p>
                                                <div class="more">
                                                    <p className="card-text"><strong><span id="description">Description</span></strong>&nbsp;&nbsp; <div id="point1">{user.description}</div> 
                                                    <a className="more-text" href="#!" id="plusmoins">
                                                        <span className="plus">voir plus déscription</span>
                                                        <span className="moins" id="moinsmoins"></span>
                                                    </a>
                                                    <p className="hidetext">
                                                        {user.description}
                                                    </p>
                                                     </p>
                                                </div>                                                 
                                               
                                            </div>
                                            <div className="col-md-6">
                                                <p className="card-text"><strong><span id="description">Genre</span></strong>&nbsp;&nbsp; <div id="point">{user.genre}</div> </p>
                                                <p className="card-text"><strong><span id="description">Date de publication</span></strong>&nbsp;&nbsp; <div id="point">{user.date}</div> </p>
                                            </div>
                                        </div><br/>
                                    <div className="row"> 
                                        <div className="col-md-6">
                                            <span className="spanprix">
                                                <strong>Prix: {user.prix} Ar</strong>
                                            </span>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="more1">
                                                    <p className="card-text"><span id="spanprix"><strong>Artiste</strong></span>&nbsp;&nbsp;
                                                    <a className="more-text" href="#!" id="plusmoins">
                                                        <span className="plus" id="plusartiste">voir l'artiste</span>
                                                        <span className="moins" id="moinsmoins"></span>
                                                    </a>
                                                    <p className="hidetext">
                                                        {user.artiste}
                                                    </p>
                                                     </p>
                                                </div> 
                                        </div>
                                    </div>
                                    <br />
                                    
                                    <span className="float-right">

                                        <a id="ajouterdepanier" href="/login" onClick={()=>{
                                          
                                            axios.post("https://radiant-fortress-64926.herokuapp.com/panier/" + user._id, {
                                                titre: user.titre,
                                                id_utilisateur: localStorage.getItem('id_user'),
                                                description: user.description,
                                                artiste: user.artiste,
                                                date: user.date,
                                                genre: user.genre,
                                                prix: user.prix
                                            })
                                        }}
                                     className="btn btn-primary"><img id="imagepanier" src="panier.jpg" alt="panier"/>&nbsp;Ajouter au panier</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                        <div>
                            <h3 id="h3vide">Aucun album publié</h3>
                        </div>
                    )}
            </div>

        </div>
    }
    render() {
        return (
            <div>
                {this.Produit()}
            </div>
        );
    }
}
export default Atelier; 
