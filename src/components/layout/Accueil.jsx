import React, { Component } from 'react';
import Header from "./Header";
import Atelier from "./Atelier"

class Accueil extends Component {
  
  render() {
    let imgUrl = 'http://resize.over-blog.com/1020x765.jpg?http://idata.over-blog.com/4/81/86/27/Malagasy-Mahay---Artiste-Malgache/besancon-419.jpg'; 
    let urlimage = 'bg.jpg';
    return (
      <div className="container-fluid">
        <Header />
        <div className="card card-image" id="header" style={{backgroundImage: 'url(' + imgUrl + ')', 
                                                          backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
          <div className="text-white text-center rgba-stylish py-5 px-4">
            <div className="py-5">
              <h2 id="h2accueil">ALBUMS MALAGASY</h2>
              <p className="mb-4 pb-2 px-md-5 mx-md-5"><span id="spanheader">Avis aux artistes ,avez-vous des albums de musique à vendre ou à publier??</span> 
              <br/><br/>Toutes genres d'albums Malagasy sont disponibles ici
              </p>
            </div>
          </div>
        </div>
        <Atelier/>


       
					
		<div id="contact" style={{backgroundImage: 'url(' + urlimage + ')', 
                                                          backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
					<center>
						<h1 id="articles3">Contact</h1>
					</center>
			<div className="row">
				<div className="col-md-6">
					<form>
						<table>
							<tr>
								<td><span id="span1">Nom</span></td>
								<td><input type="text" name=""/></td>
							</tr>
							<tr>
								<td><span id="span1">E-mail</span></td>
								<td><input type="text" name=""/></td>
							</tr>
							<tr>
								<td> <span id="span1">Message</span></td>
								<td><textarea></textarea></td>
							</tr>
							<tr>
								<td></td>
								<td><button id="button" type="submit">Envoyer</button></td>
							</tr>
						</table>
					</form>
				</div>
				<div className="col-md-6">
					<div id="con">
						<table id="icone">
							<tr>
								<td><img src="home.png"/></td>
								<td><span id="span1">Lot IVD 24 bis Shopping gasy</span></td>
							</tr>
							<tr>
								<td><img src="fb.png"/></td>
								<td><a href="#">Fb-Album Malagasy</a></td>
							</tr>
							<tr>
								<td><img src="twit.png"/></td>
								<td><a href="#">Twiter-album</a></td>
							</tr>
							<tr>
								<td><img src="phone.PNG"/></td>
								<td><span id="span1">020 00 000 00</span></td>
							</tr>
							<tr>
								<td><img src="mail.png"/></td>
								<td><a href="#">exemple@gmail.com</a></td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	


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
