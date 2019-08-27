import React, { Component } from "react";
import Header from "../../components/layout/Header"
import { Link } from "react-router-dom";
class Accueil extends Component {

  render() {
    let image = "fondimage.jpg";
    let slow = "slow.jpg";
    let variete = "variete.jpg";
    let urlimage = 'bg.jpg';
    return (
      <div className="container-fluid">
          <Header/>
          <div className="card card-image" id="header" style={{backgroundImage: 'url(' + image + ')', 
                                                          backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
          <div className="text-white text-center rgba-stylish py-5 px-4">
            <div className="py-5">
              <h2 id="h2accueil">KANTO HIRA MALAGASY</h2>
              <p className="mb-4 pb-2 px-md-5 mx-md-5"><span id="spanheader">Madagascar a beaucoup de talents plus particulierement sur son talent de musique</span> 
              <br/><br/><Link to="/albums" className="btn btn-danger">Voir tous les albums</Link>
              </p>
            </div>
          </div>
        </div>

        <section className="features-icons bg-light text-center" id="section1">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex">
                                <i class="icon-screen-desktop m-auto text-primary"></i>
                            </div>
                            <h3>Artiste De reférence</h3>
                            <p class="lead mb-0">A Madagascar,il existe plusieurs talents.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex">
                                <i class="icon-layers m-auto text-primary"></i>
                            </div>
                            <h3>Aimez tout les rythmes</h3>
                            <p class="lead mb-0">Rythme vient de tout les tribus qui presente à Madagascar </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div class="features-icons-icon d-flex">
                                <i class="icon-check m-auto text-primary"></i>
                            </div>
                            <h3>Des chansons</h3>
                            <p class="lead mb-0">Chansons diffèrent de tout les pays du monde entier</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="showcase">
    <div class="container-fluid p-0">
        <div class="row no-gutters">
                {/* M6 background image slow.jpg*/}
            <div class="col-lg-6 order-lg-2 text-white showcase-img" id="slowback" style={{backgroundImage: 'url(' + slow + ')', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', }}></div>
            <div class="col-lg-6 order-lg-1 my-auto showcase-text" id="playliste">
                <h2>Playlist Slow</h2>
                <p class="lead mb-0">Si aujourd’hui, on cherche à faire la playlist ultime des chansons d’amour slow gasy.
                 Et juste la lecture de ces titres évoquera à un malgache ou un  des souvenirs</p>
            </div>
        </div>
        <div class="row no-gutters">
        {/* M6 background image variete.jpg*/}
            <div class="col-lg-6 text-white showcase-img" id="slowback" style={{backgroundImage: 'url(' + variete + ')', }}></div>
            <div class="col-lg-6 my-auto showcase-text" id="playliste">
                <h2>Tendance Variété Gasy </h2>
                <p class="lead mb-0">
                Un des rythmes qui existe à Madagascar le plus recent et plus célèbre.Rythme facile à decouvrir qui m'interesse beaucoup 
                au peuple Malagasy.</p>
            </div>
        </div>
    </div>
</section><br/>

{/* <!-- Testimonials --> */}
<section class="testimonials text-center bg-light" id="section3" style={{backgroundImage: 'url(' + urlimage + ')', 
                                                          backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
    <div class="container-fluid">
        <h2 class="mb-5">Mpanakanto Malagasy</h2>
        <div class="row">
            <div class="col-lg-4">
                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img class="img-fluid rounded-circle mb-3" src="njakatianalola.jpg" alt="njakatiana&lola"/>
                    <h5>Njakatiana & Lôla</h5>
                    <p class="font-weight-light mb-0">On peut dire que Njakatiana et Lola sont des artistes très importants et maintiennent toujours l'identité malgache.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img class="img-fluid rounded-circle mb-3" src="poopybodo.jpg" alt="poopy&bodo"/>
                    <h5>Poopy & Bodo</h5>
                    <p class="font-weight-light mb-0">Ces deux dames sont ainsi les chanteuses le plus celèbre depuis la génération 90.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img class="img-fluid rounded-circle mb-3" src="ambondrona.jpg" alt="ambondrona"/>
                    <h5>Ambondrona</h5>
                    <p class="font-weight-light mb-0">Groupe de rock Malagasy crée en 2001, composé de 5 membres actuellement.</p>
                </div>
            </div>
        </div>
    </div>
</section>
    <footer className="page-footer" id="footer">
                <center>
                    <span>© 2019 Copyright   <span id="spanfooter">Albums Malagasy</span></span>
                </center>
            </footer>
      </div>
    );
  }
}

export default Accueil;