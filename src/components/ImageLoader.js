
import React, { Component } from 'react';


import API from "../helpers/api";

class ImageLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
          };
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        API.get(`/echo/hello_world`)
            .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Image URL:
              <input type="text" name="id" onChange={this.handleChange} />
            </label>
            <button type="submit">Echo</button>
          </form>
          <h2>Original</h2>
          <img src="https://i.imgur.com/3a0qwRe.jpeg"></img>
        </div>
        );
    }
}

export default ImageLoader;