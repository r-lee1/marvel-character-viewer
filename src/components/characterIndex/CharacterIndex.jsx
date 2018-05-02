import React from "react";
import Character from "./Character";
import Pagination from "./Pagination";

import { keys } from "../../keys";

class CharacterIndex extends React.Component {
  constructor(props) {
    super(props);

    let { characters, cleanData } = this.props;

    this.state = {
      characters:
        cleanData(characters),
      currentPage: 1,
      isLoading: false,
      endOfContent: false
    };

    this.apikey = keys().apikey;

    this.fetchCharacterData = this.fetchCharacterData.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

//fetch more characters when scrolled to bottom of character index
  onScroll() {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300) &&
      this.props.characters.length) {
        this.fetchCharacterData(this.state.currentPage);
      }
  }

//fetch next set of characters when not currently fetching and not at end of available data
  fetchCharacterData(page) {
    let lastCard = document.querySelector('.char:last-of-type h2').textContent;

    if (lastCard === "Zzzax") {
      this.setState({endOfContent: true});
      return;
    }

    if(!this.state.isLoading) {
      let offset = 100 * page;
      let newEndpoint = `https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=${offset}&apikey=${this.apikey}`;
      this.setState({isLoading: true, currentPage: this.state.currentPage + 1});
      fetch(newEndpoint)
        .then(res => res.json())
        .then(res => this.onSetResult(res.data.results));
    }
  }

  onSetResult(result) {
    this.setState(this.applySetResult(result));
  }

//sort and append newly fetch characters to previous state
  applySetResult(result) {
    let cleanResult = this.props.cleanData(result);
    return {
      characters: [...this.state.characters, ...cleanResult],
      isLoading: false
    };
  }

  render() {
    return (
      <div className="charPage">
        <div className="charIndex">
          {this.state.characters.map(
            character => {
              return <Character characterData={character} key={character.id}/>;
            }
          )}
        </div>
        {this.state.isLoading &&
          <div className="loader">
            <h4>Loading...</h4>
          </div>}
        {!this.state.endOfContent &&
          <Pagination
            characters={this.state.characters}
            currentPage={this.state.currentPage}
            fetchCharacterData={this.fetchCharacterData}/>
          }
      </div>
    );
  }
}

export default CharacterIndex;
