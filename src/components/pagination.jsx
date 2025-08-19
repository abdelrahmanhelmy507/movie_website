import ReactPaginate from "react-paginate";

export default function Pagination({ numberOfPages, onPageChange }) {
  const handlePageClick = (data) => {
    const pageNumber = data.selected + 1;
    onPageChange(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // console.log(numberOfPage)
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={numberOfPages}
      previousLabel="السابق"
      renderOnZeroPageCount={null}
      containerClassName="pagination justify-content-center my-3"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
}
