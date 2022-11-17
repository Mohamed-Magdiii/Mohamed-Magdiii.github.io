const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="col-lg-12">
        <div className="page-navigation-area text-center">
          <ul className="pagination">
            {" "}
            <li className="page-item">
              <div >
                <a className="page-link page-links">
                  <i className="bx bx-chevrons-left"></i>
                </a>
              </div>
            </li>
            {pageNumbers.map((number) => (
              <li className="page-item active" key={number}>
                <div
                  
                  onClick={() => {
                    paginate(number);
                  }}
                >
                  <a className="page-link">{number}</a>
                </div>
              </li>
            ))}
            <li className="page-item">
              <div >
                <a className="page-link">
                  <i className="bx bx-chevrons-right"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pagination;

