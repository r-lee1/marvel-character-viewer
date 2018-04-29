import React from "react";

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pager: {},
      currentPage: this.props.currentPage
    };

  }

  componentWillReceiveProps() {
    this.setState({currentPage: this.props.currentPage});
  }

  render() {
    return(
      <div className="pager">
        <a onClick={() => this.props.fetchCharacterData(this.state.currentPage)}>More</a>
      </div>
    );
  }
}

export default Pagination;
