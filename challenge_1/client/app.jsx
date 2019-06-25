import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Edit from "./Edit.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      results: []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.handleSearch;
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSearch() {
    const { searchTerm } = this.state;
    axios
      .get(`/events?q=${searchTerm}&_page=1&_limit=10`)
      .then(res => {
        console.log("res", res);
        this.setState({
          results: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handlePageClick(e) {
    const { searchTerm } = this.state;
    axios
      .get(`/events?q=${searchTerm}&_page=${e.selected + 1}&_limit=10`)
      .then(res => {
        this.setState({
          results: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { results, pageCount } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <input type="submit" onClick={this.handleSearch} />

        <div>
          {results.map((result, idx) => {
            return (
              <div key={idx}>
                <div>Date: {result.date}</div>
                <div id={idx}>
                  Description: {result.description} {"\n"}
                  Location: {result.category2}
                </div>
                <Edit id={idx} edit={this.editEntry} />
              </div>
            );
          })}
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          pageRangeDisplayed={10}
          marginPagesDisplaye={8}
          onPageChange={this.handlePageClick}
        />
      </div>
    );
  }
}

export default App;
