import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

class CardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters:
        this.props.characters,
      currentPage: 1
      // characterSet:
      //   this.props.characters
    };

    this.fetchCharacterData = this.fetchCharacterData.bind(this);
    // this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
  if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && this.props.characters.length) {
    this.fetchCharacterData(this.state.currentPage);
    this.setState({currentPage: this.state.currentPage + 1});
  }
}

  fetchCharacterData(page) {
    let offset = 50 * page;
    let newEndpoint = `https://gateway.marvel.com:443/v1/public/characters?limit=50&offset=${offset}&apikey=f2e4cc1aa98d9360e478bc7764a35844`;

    fetch(newEndpoint)
      .then(res => res.json())
      .then(res => this.onSetResult(res.data.results));
  }

  onSetResult(result) {
    this.setState(this.applySetResult(result));
  }

  applySetResult(result) {
    return {
      characters: [...this.state.characters, ...result]
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
        <Pagination characters={this.state.characters} onChangePage={this.onChangePage} fetchCharacterData={this.fetchCharacterData}/>
      </div>
    );
  }
}

export default CardIndex;
