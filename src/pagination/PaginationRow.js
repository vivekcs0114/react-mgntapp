import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const customStyles = {
    float : 'right'
};

export default class PaginationRow extends React.Component {
  render() {
    let total = this.props.total;
    let navs = Math.ceil(total/3);
    let pg = 3;
    let end = 2;
    return (
      <Pagination style={customStyles} aria-label="Page navigation example">
        <PaginationItem disabled>
          <PaginationLink previous href="#" />
        </PaginationItem>
          { [...Array(navs)].map((e,i) => {
            return <PaginationItem key={i} active={i===0 ? true : false}>
              <PaginationLink href={"?start="+(i*pg)+"&end="+(end+(i*pg))}>
                {i+1}
              </PaginationLink>
            </PaginationItem>
          })}
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}
