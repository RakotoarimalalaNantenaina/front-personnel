import React, { Component } from 'react';
import Header from "./Header";
import Atelier from "./Atelier"

class Accueil extends Component {
  
  render() {
    let imgUrl = 'http://resize.over-blog.com/1020x765.jpg?http://idata.over-blog.com/4/81/86/27/Malagasy-Mahay---Artiste-Malgache/besancon-419.jpg'; 
    return (
      <div className="container-fluid">
        <Header />
        <div className="card card-image" id="header" style={{backgroundImage: 'url(' + imgUrl + ')', 
                                                          backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
          <div className="text-white text-center rgba-stylish py-5 px-4">
            <div className="py-5">
              <h2 id="h2accueil">ALBUMS MALAGASY</h2>
              <p className="mb-4 pb-2 px-md-5 mx-md-5"><span id="spanheader">Aux artistes,Avez-vous des albums de musique à publier??</span> 
              <br/><br/>Des personnes qui veulent à acheter .
              </p>
            </div>
          </div>
        </div>
        <Atelier/>
        <footer className="page-footer" id="footer">
              <center>
                <span>© 2019 Copyright   <span id="spanfooter">Albums Malagasy</span></span>
              </center>
        </footer>
      </div>
    )
  }
}
export default Accueil; 
