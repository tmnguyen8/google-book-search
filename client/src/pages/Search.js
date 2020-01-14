import React, { Component } from "react";
import GoogleAPI from "../utils/GoogleAPI";
// import { Link } from "react-router-dom";
// import { Input, TextArea, FormBtn } from "../components/Form";
// import API from "../utils/API";

class GoogleBooks extends Component {
    state = {
        books: [],
        title: "harry potter",
        author: "",
        synopsis: "",
        image: ""
    };

    searchBooks = () => {
        GoogleAPI.getGoogleBooks(this.state.title)
                .then(res=>{
                    this.setState({
                        books: res.data.items,
                        title: "",
                        author: "",
                        synopsis: "",
                        image: ""
                    })
                    console.log(this.state.books)
                })
                .catch(err => console.log(err))
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
            this.searchBooks()
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.handleFormSubmit}>get book</button>
                {this.state.books.map(item=>{
                    item.volumeInfo.title
                })}

            </div>
        )
    }
}

export default GoogleBooks;

