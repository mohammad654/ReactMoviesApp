import React from 'react';
const Pagination = (props) => {
    const {itemsCount,pageSize}=props;
    const pageCount=itemsCount/pageSize;

    return (<nav aria-label="...">
    <ul className="pagination">
      <li className="page-item disabled">
        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
      </li>
      <li className="page-item"><a className="page-link" href="#">1</a></li>

      <li className="page-item">
        <a className="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>  );
}
 
export default Pagination;