import React, { Component } from "react";
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout'
class Panier extends Component {
  constructor(props) {
    super(props);
    this.state = {
        profil: [],
        prix: [0]
    };

}

onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  componentDidMount() {
    var test = []
    axios.get('https://radiant-fortress-64926.herokuapp.com/panier')
        .then(response => {

          for(let i=0; i<response.data.length; i++){
            if(response.data[i].id_utilisateur==localStorage.getItem('id_user')){
                test.push(response.data[i])
            }
        }
        this.setState({ profil: test })
        
        this.state.profil.map(pr=>{
            this.state.prix.push(pr.prix)
        })
        this.setState({prix: [...this.state.prix]});
        
        })
        .catch(function (error) {
            console.log(error);
        })
}


  render() {
    return (
      <div className="container-fluid">
        <div id="panierdiv">
        <div id="">
                <h4 id="h4tableau"> Votre Panier</h4>
                <table className="table table-striped table-bordered table-hover" id="table">
                    <thead>
                        <tr>
                            {/* <th className="thtab">Images</th> */}
                            <th className="thtab">Artiste</th>
                            <th className="thtab">Titre</th>
                            <th className="thtab">Genre</th>
                            <th className="thtab">Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return <tr key={obj._id}>
                                    {/* <td><img id="imagetab" width="100px" height="90px" src={'http://localhost:8080/atelier/' + obj.photo_produit} alt={obj.photo_produit} /></td> */}
                                    <td>{obj.artiste}</td>
                                    <td>{obj.titre}</td>
                                  
                                    <td>{obj.genre}</td>
                                    <td>{obj.prix}  Ar</td>
                                    
                                  
                                </tr>
                            })) : ('Votre panier est vide')
                        }
                    </tbody>
                </table>
               <h3 className="h3prix">Prix total = <span id="h3prixtotal">{this.state.prix.reduce((rem,ren)=>
                    rem + ren
                )}</span> Ar</h3>
                    Payment en ligne avec stripe.com : &nbsp;
                  <StripeCheckout  token={this.onToken}
                    stripeKey="pk_test_vrVww8SlifCAMUq8i5Ls6QgR00jHOsxvxx"/>
            </div>
        </div>   
        </div>
    );
  }
}
export default Panier;
