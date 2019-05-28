// @flow

import React, { Component } from 'react';

type Props = {
  // 'current' is only seed data for the component’s internally-controlled state
  current: number,
  pageSize: number,
  total: number,
  showPrevNext: boolean,
  displayLastPage: boolean,
  onChange: (page: number) => void
};

type State = {
  current: number
};

class Pagination extends Component<Props, State> {
  static defaultProps = {
    current: 1,
    pageSize: 20,
    showPrevNext: true,
    displayLastPage: true,
    onChange: () => {}
  };

  static renderCaption = (page: number, pageSize: number, total: number, label: string = ''): string => {
    if (total === 0) { return ''; }
    const from = (pageSize * (page - 1)) + 1;
    const pages = Math.ceil(total / pageSize);
    // if it's the last page (0 based), set 'to' = total
    const to = parseInt(page, 10) === pages ? total : (pageSize * (page - 1)) + pageSize;
    return `Showing ${from} - ${to} of ${total} ${label}`;
  };

  constructor(props: Props) {
    super(props);
    this.state = { current: 1 };
  }

  // reset state if the seeded 'current' prop is updated
  componentDidUpdate(prevProps: Props) {
    if (prevProps.current !== this.props.current) {
      console.log('test');
      this.setState({ current: this.props.current });
    }
  }

  onNavigate = (event: SyntheticInputEvent<HTMLInputElement>, page: number) => {
    event.preventDefault();
    this.goTo(page);
  };

  goTo(page: number) {
    const { pageSize, total } = this.props;
    const numberOfPages = Math.ceil(total / pageSize);
    // if page > total pages, then set the page to the last one.
    this.setState({ current: page <= numberOfPages ? page : page - 1 });
    this.props.onChange(page);
  }

  renderPages() {
    const { pageSize, total, showPrevNext, displayLastPage } = this.props;
    const { current } = this.state;
    const numberOfPages = Math.ceil(total / pageSize);
    const firstPage = 1;
    // adjacentCount is the number of page links displayed on each side of the current page link
    const adjacentCount = 1;
    const pages = [];

    let firstAdjacentPage;
    let lastAdjacentPage;

    if (current <= adjacentCount + adjacentCount) {
      firstAdjacentPage = firstPage;
      lastAdjacentPage = Math.min(firstPage + adjacentCount + adjacentCount, numberOfPages);
    } else if (current > numberOfPages - adjacentCount - adjacentCount) {
      lastAdjacentPage = numberOfPages;
      firstAdjacentPage = numberOfPages - adjacentCount - adjacentCount;
    } else {
      firstAdjacentPage = current - adjacentCount;
      lastAdjacentPage = current + adjacentCount;
    }

    if (showPrevNext && current > 1) {
      pages.push(
        <li key={'prev'}>
          <a href="" onClick={event => this.onNavigate(event, current - 1)}>
            <span><i className="fa fa-angle-left" /></span>
          </a>
        </li>
      );
    }

    if (firstAdjacentPage > firstPage) {
      pages.push(
        <li key={firstPage}>
          <a href="" onClick={event => this.onNavigate(event, firstPage)}>
            {firstPage}
          </a>
        </li>
      );
      if (firstAdjacentPage > firstPage + 1) {
        pages.push(<li key="first-adjacent"><span>...</span></li>);
      }
    }

    for (let i = firstAdjacentPage; i <= lastAdjacentPage; i += 1) {
      pages.push(
        <li key={i} className={current === i ? 'active' : ''}>
          <a href="" onClick={event => this.onNavigate(event, i)}>{i}</a>
        </li>
      );
    }

    if (lastAdjacentPage < numberOfPages) {
      if (lastAdjacentPage < numberOfPages - 1) {
        pages.push(<li key="last-adjacent"><span>...</span></li>);
      }

      if (displayLastPage) {
        pages.push(
          <li key={numberOfPages}>
            <a href="" onClick={event => this.onNavigate(event, numberOfPages)}>{numberOfPages}</a>
          </li>
        );
      }
    }

    if (showPrevNext && current < numberOfPages) {
      pages.push(
        <li key={'next'}>
          <a href="" onClick={event => this.onNavigate(event, current + 1)}>
            <span><i className="fa fa-angle-right" /></span>
          </a>
        </li>
      );
    }

    return pages;
  }

  render() {
    const { pageSize, total } = this.props;
    const numberOfPages = Math.ceil(total / pageSize);

    // If there's only one page then, pagination is not needed
    if (numberOfPages === 1) {
      return null;
    }

    return (
      <nav className="pagination-container">
        <ul className="pagination unified">
          { this.renderPages() }
        </ul>
      </nav>
    );
  }
}

export default Pagination;