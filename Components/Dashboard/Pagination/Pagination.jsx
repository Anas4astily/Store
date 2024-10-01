import ReactPaginate from "react-paginate";
import './Paginate.css'
export default function PaginatedItems({ itemsPerPage,total,setpage }) {
    const pageCount=total / itemsPerPage
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={(e)=>{setpage(e.selected +1)}}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="custoum-pagination d-flex align-items-center justify-content-end flex-wrap"
        pageLinkClassName="pagination-tag-anchor mx-2  text-secondary rounded-circle"
        activeLinkClassName="bg-primary text-white"
      />
    </>
  );
}
