import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

class CardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters:
        this.props.characters,
      currentPage: 1,
      isLoading: false,
      endOfContent: false
      // characterSet:
      //   this.props.characters
    };

    this.fetchCharacterData = this.fetchCharacterData.bind(this);
    this.onScroll = this.onScroll.bind(this);
    // this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300) &&
      this.props.characters.length) {
        this.fetchCharacterData(this.state.currentPage);
      }
  }

  fetchCharacterData(page) {
    let lastCard = document.querySelector('.char:last-of-type h2').textContent;

    if (lastCard === "Zzzax") {
      this.setState({endOfContent: true});
      return;
    }

    if(!this.state.isLoading) {
      let offset = 50 * page;
      let newEndpoint = `https://gateway.marvel.com:443/v1/public/characters?limit=50&offset=${offset}&apikey=f2e4cc1aa98d9360e478bc7764a35844`;
      this.setState({isLoading: true, currentPage: this.state.currentPage + 1});
      fetch(newEndpoint)
        .then(res => res.json())
        .then(res => this.onSetResult(res.data.results));
    }
  }

  onSetResult(result) {
    this.setState(this.applySetResult(result));
  }

  applySetResult(result) {
    return {
      characters: [...this.state.characters, ...result],
      isLoading: false
    };
  }

  // onChangePage(pageOfCharacters) {
  //   this.setState({characterSet: pageOfCharacters});
  // }

  render() {
    return (
      <div className="charPage">
        <div className="charIndex">
          {this.state.characters.map(
            character => {
              return <Card characterData={character} key={character.id}/>;
            }
          )}
        </div>
        {this.state.isLoading &&
          <div className="loading">
            <span>Loading...</span>
          </div>}
        {!this.state.endOfContent &&
          <Pagination characters={this.state.characters} currentPage={this.state.currentPage} onChangePage={this.onChangePage} fetchCharacterData={this.fetchCharacterData}/>
          }
      </div>
    );
  }
}

export default CardIndex;
