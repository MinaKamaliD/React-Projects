import React, { Component } from "react";
import Book from "./Book";
import "./AddForm.css";
export default class AddForm extends Component {
  constructor() {
    super();

    this.state = {
      books: [],

      title: "",
      author: "",
      year: "",
    };

    this.titleHandler = this.titleHandler.bind(this);
    this.authorHandler = this.authorHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  titleHandler(event) {
    this.setState({ title: event.target.value });
  }
  authorHandler(event) {
    this.setState({ author: event.target.value });
  }
  yearHandler(event) {
    this.setState({ year: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form id="book-form" autocomplete="off" onSubmit={this.submitHandler}>
          <div className="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={this.state.title}
              onChange={this.titleHandler}
            />
          </div>

          <div className="form-group">
            <label for="author">Author</label>
            <input
              type="text"
              id="author"
              className="form-control"
              value={this.state.author}
              onChange={this.authorHandler}
            />
          </div>

          <div className="form-group">
            <label for="year">Year</label>
            <input
              type="text"
              id="year"
              className="form-control"
              value={this.state.year}
              onChange={this.yearHandler}
            />
          </div>
          <input
            type="submit"
            value="Add Book"
            className="btn btn-warning btn-block add-btn"
          />
        </form>
        <table class="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody id="book-list">
            {this.state.books.map((book) => (
              <Book />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
