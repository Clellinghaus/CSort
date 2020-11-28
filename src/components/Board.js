import React, {Component} from 'react';
import axios from 'axios';
import { error } from 'jquery';

/*Button zum hochladen eines Bildes als Boardhintergrund */

class DisplayImage extends Component {

    constructor(props) {
      super(props);
      this.state = {
        image: null
      };
      this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        console.log("Hier " + event.target.files[0]);
        this.setState({
          image: URL.createObjectURL(img)
        });
        const data = new FormData();
        data.append('username', 'test');
        data.append('file', event.target.files[0]);
        axios.post("http://localhost:8000/upload_background", data, { // receive two parameter endpoint url ,form data 
            })
            .then(res => { // then print response status
            console.log(res.statusText)
            });
      }
    };

    render() {
      return (
            <div>
              <img src= {this.state.image} />
              <label for="ImageUpload" class="ImageInput"></label>
              <input id="ImageUpload" type="file" name="myImage" onChange={this.onImageChange} />
            </div>
      );
    }
  }
  export default DisplayImage;
    


