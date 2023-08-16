import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

const ResidentList = ({residents, currentLocation}) => {

  const [currentPage, setCurrentPage] = useState(1)

  const RESIDENTS_PER_PAGE = 20

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

  const sliceStart = (currentPage - 1) *  RESIDENTS_PER_PAGE 
  const siliceEnd = sliceStart + RESIDENTS_PER_PAGE
  const residentsInPage = residents.slice(sliceStart, siliceEnd )

  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  const RESET_INDEX_PAGE = 1

  useEffect(() => {
    setCurrentPage(RESET_INDEX_PAGE);
    }, [currentLocation])
  

  return (
    <section>
      <section className="p-2 flex flex-col items-center px-1 sm:grid sm:gr sm:gap-8 sm:grid-cols-[300px_300px] sm:place-content-center">
      {
        residentsInPage.map((resident) => <ResidentCard key={resident} residentUrl={resident} />)
      }
    </section>

  <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

    </section>
  )
}
export default ResidentList