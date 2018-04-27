import React from "react";

class Pagination extends React.Component {
  constructor(props) {
   super(props);

   this.setPage = this.setPage.bind(this);
  }

  setPage() {
    let { characters, onChangePage } = this.props;
    let pageOfItems = characters.slice(5, 11);

    onChangePage(pageOfItems);
  }

  render() {
    return(
      <ul>
        <li>
          <a onClick={this.setPage}>First</a>
        </li>
      </ul>
    );
  }
}

export default Pagination;
