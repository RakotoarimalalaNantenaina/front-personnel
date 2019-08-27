import React from 'react';
import { MDBIcon,MDBCol,MDBInput,MDBCard, MDBCardBody} from "mdbreact";
import { confirmAlert } from 'react-confirm-alert'; 
import axios from 'axios';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

class Modifatelier extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        titre: '',
        description:'',
        date: '',
        genre: '',
        photo_produit:'',
        prix: '',
        get_titre: '',
        get_description: '',
        get_date: '',
        get_artiste:'',
        get_genre: '',
        get_prix: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
}

componentDidMount() {
  axios.get('http://localhost:8080/'+this.props.match.params.id)
      .then(response => {
            // console.log("donné à modifier" , response.data)
          this.setState({
              titre: response.data.titre,
              artiste: response.data.artiste,
              description :  response.data.description,
              date: response.data.date,
              genre: response.data.genre,
              prix: response.data.prix
          })
      });
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
    data.append('artiste',this.state.artiste);
    data.append('description',this.state.description);
    data.append('date',this.state.date);
    data.append('genre',this.state.genre);
    data.append('prix',this.state.prix);

  fetch('http://localhost:8080/atelier/'+ this.props.match.params.id, {
    method: 'PUT',
    body: data,
  }).then((response) => {
      
    response.json().then((body) => {
      this.setState({ image: `http://localhost:8080/atelier/${body.photo_produit}` });
    });
  });
}

  render() {
    return (
        <div className="container-fluid"> 
        <div className="row">
         <div className="col-md-4">
         </div>
         <div className="col-md-4">
         <MDBCol md="12">
           <MDBCard width="50%">
             <MDBCardBody>
               <form  onSubmit={this.handleUploadImage}>
                 <p className="h4 text-center py-4" id="pdash">Modifier atelier</p>
                 <div className="grey-text">
                   <MDBInput
                     label="Nom du l'atelier"
                     group
                     type="text"
                     validate
                     success="right" value={this.state.titre}  onChange={this.onChange} name="titre"
                     required
                   />
                    <MDBInput
                     label="Artiste"
                     group
                     type="text"
                     validate
                     success="right" value={this.state.artiste} onChange={this.onChange}  name="artiste"
                     required
                   />
                   <MDBInput
                     label="Déscription"
                     group
                     type="text"
                     validate
                     success="right" value={this.state.description} onChange={this.onChange} name="description"
                     required
                   />
                   <MDBInput
                     label="Date"
                     group
                     type="date"
                     validate
                     success="right" value={this.state.date} onChange={this.onChange} name="date"
                     required
                   />
                   <MDBInput
                     label="genre"
                     group
                     type="text"
                     validate
                     success="right" value={this.state.genre} onChange={this.onChange}  name="genre"
                     required
                   />
                    
                   <MDBInput
                     label="Prix de l'album (Ar)"
                     group
                     type="text"
                     validate
                     success="right" value={this.state.prix} onChange={this.onChange}  name="prix"
                     required
                   />

                   <label className="btn btn-default btn-file" id="fichier">
                    Image de l'album<input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_produit"   required/>
                 </label>
                 </div>
                 <div className="text-center">
                 <div className="text-center mt-4">
               <button className="btn btn-outline-warning" type="submit" id="ajouter_boutton" onClick={()=>{
                  confirmAlert({
                    customUI: () => {
                      return (
                        <div className='custom-ui'>
                          <h1>Enregistrement De la modification</h1>
                          <center></center><a href="/dashboard" id="okajout" className="btn btn-primary">OK</a>
                        </div>
                      );
                    }
                  });
                }}>
                    Modifier
                 <MDBIcon icon="paper-plane" className="ml-2" />
               </button>
             </div>
             </div>
               </form>
             </MDBCardBody>
           </MDBCard>
         </MDBCol>
         </div>
         <div className="col-md-4">

         </div>
        </div> 
     </div>

    );
  }
}

export default Modifatelier;