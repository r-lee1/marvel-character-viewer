import React from "react";

class Pagination extends React.Component {
  constructor(props) {
   super(props);

   this.state = { pager: {} };

   this.setPage = this.setPage.bind(this);
  }

  componentWillMount() {
    this.setPage(1);
  }

  setPage(page) {
    let { characters, onChangePage } = this.props;

    let pager = this.getPager(characters.length, page);
    let pageOfItems = characters.slice(pager.startIndex, pager.endIndex);

    this.setState({pager: pager});

    onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage) {
    currentPage = currentPage || 1;
    let pageSize = 18;
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage = 1;
    let endPage = totalPages;

    //calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = startIndex + pageSize;

    let pages = [...Array(endPage).keys()].map(i => i + 1);

    return {
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      pages: pages,
      startIndex: startIndex,
      endIndex: endIndex
    };

  }

  render() {
    return(
      <ul className="pager">
        {
          this.state.pager.pages.map(
            page =>
            <li>
              <a onClick={() => this.setPage(page)}>{page}</a>
            </li>
          )
        }
      </ul>
    );
  }
}

export default Pagination;
