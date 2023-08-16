const LocationForm = ({ handleSubmit }) => {
  return (
    <form className="flex flex-row border-solid border-[2px] border-[#8EFF8B] my-8 mx-1 justify-center sm:w-[60vw] sm:relative sm:left-[18%]" onSubmit={handleSubmit}>
      <input
        className="appearance-none text-[#938686] bg-black text-center w-[80vw] border-solid border-r-2 border-[#8EFF8B]"
        min={1}
        max={126}
        id="newLocation"
        placeholder="Type a location id ..."
        type="number"
      />

      <button className="appearance-none bg-[#5eae5b] p-3 px-7">
        <svg
          width="18"
          height="18"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="pixelarticons:search">
            <path
              id="Vector"
              d="M6.25001 2H14.5833V4H6.25001V2ZM4.16668 6V4H6.25001V6H4.16668ZM4.16668 14H2.08334V6H4.16668V14ZM6.25001 16H4.16668V14H6.25001V16ZM14.5833 16V18H6.25001V16H14.5833ZM16.6667 14H14.5833V16H16.6667V18H18.75V20H20.8333V22H22.9167V20H20.8333V18H18.75V16H16.6667V14ZM16.6667 6H18.75V14H16.6667V6ZM16.6667 6V4H14.5833V6H16.6667Z"
              fill="#FBFBFB"
            />
          </g>
        </svg>
      </button>
    </form>
  );
};
export default LocationForm;
