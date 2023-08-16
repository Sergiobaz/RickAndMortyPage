

const Pagination = ({pages, setCurrentPage, currentPage}) => {
  return (
    <ul className="flex justify-center relative bottom-3 gap-x-3">
        {
            pages.map((page) => <li className={`border-[#8EFF8B] p-3 border-[1px] cursor-pointer ${currentPage === page && "text-[#8EFF8B]" } `}  onClick={() => setCurrentPage(page)} key={page}>{page}</li>)
        }
    </ul>
  )
}
export default Pagination