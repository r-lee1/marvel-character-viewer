import React from "react";

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pager: {},
      currentPage: this.props.currentPage
    };

   // this.setPage = this.setPage.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({currentPage: this.props.currentPage});
  }

  // componentWillMount() {
  //   this.setPage(1);
  // }

  // setPage(page) {
    // let { characters, onChangePage } = this.props;

    // let pager = this.getPager(characters.length, page);
    // let pageOfItems = characters.slice(pager.startIndex, pager.endIndex);

    // this.setState({pager: pager});

    // onChangePage(pageOfItems);
  // }

  getPager(totalItems, currentPage) {
    currentPage = currentPage || 0;
    let pageSize = 100;
    // let totalPages = Math.ceil(totalItems / pageSize);
    // let startPage = 1;
    // let endPage = totalPages;

    //calculate start and end item indexes
    // let startIndex = (currentPage - 1) * pageSize;
    // let endIndex = startIndex + pageSize;

    // let pages = [...Array(endPage).keys()].map(i => i + 1);

    return {
      // totalPages: totalPages,
      // startPage: startPage,
      // endPage: endPage,
      // pages: pages,
      // startIndex: startIndex,
      // endIndex: endIndex
    };

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

// {
//   this.state.pager.pages.map(
//     page =>
//       <a onClick={() => this.setPage(page)} key={page}>{page}</a>
//   )
// }
