import axios from "axios";

export default {
  // Gets all books
  getGoogleBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+title);
  }
}

