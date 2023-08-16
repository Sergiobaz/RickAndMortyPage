const LocationInfo = ({currentLocation}) => {
  return (
    <section className="flex flex-col ml-5 sm:justify-center sm:items-center ">
        <h1 className="text-[#8EFF8B] text-[30px] py-4 sm:text-[40px]">{currentLocation?.name}</h1>
        <ul className="text-[#938686] flex flex-col gap-2 sm:flex-row sm:space-x-5 sm:text-[30px]">
            <li>Type: <span className="text-white">{currentLocation?.type}</span></li>
            <li>Dimension: <span className="text-white">{currentLocation?.dimension}</span></li>
            <li>Population: <span className="text-white">{currentLocation?.residents.length}</span></li>
        </ul>
    </section>
  )
}
export default LocationInfo