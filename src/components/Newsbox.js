import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class Newsbox extends Component {
  static defaultProps = {
    pagesize: 15,
    category: "General",
  };
  static propTypes = {
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = { articles: [], loading: false, page: 1 };
    document.title = `NewsBlocks - ${this.props.category}`;
  }
  async loadNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3aac18a6e647442d9e77c1fba48bf26b&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          loading: false,
          articles: result.articles,
          totalResults: result.totalResults,
        });
      });
  }
  async componentDidMount() {
    this.loadNews();
  }
  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pagesize)
    ) {
    } else {
      this.setState({
        page: this.state.page + 1,
      });
      this.loadNews();
    }
  };
  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.loadNews();
  };

  render() {
    return (
      <div>
        {this.state.loading && <Spinner />}
        <div className="flex flex-wrap p-5 border">
          {this.state.articles.map((element) => {
            return (
              <div className="p-4 md:w-1/3" key={element.url}>
                <Newsitem
                  title={
                    element.title
                      ? element.title.slice(0, 100) +
                        (element.title.length > 100 ? "..." : "")
                      : "No Title Available"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 150) + "..."
                      : "No Description Available"
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  name={element.source["name"]}
                  publishedAt={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between m-4">
          <button
            disabled={this.state.page <= 1}
            className="inline-flex justify-center text-gray-400 bg-gray-800 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg w-60"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            className="inline-flex justify-center text-white bg-purple-500 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg w-60"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
