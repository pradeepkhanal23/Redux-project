const Footer = () => {
  return (
    <footer className="w-full h-auto p-3 mb-8">
      <hr className="bg-primary" />
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex w-full items-center justify-between px-5 font-bold md:px-[5rem] md:text-lg">
          <h1 className="tracking-wider text-green-600">Total</h1>
          <span className="tracking-wider text-green-600">$1234</span>
        </div>
        <div>
          <button className="px-6 py-1 text-base text-white bg-red-500 rounded-md">
            Clear All
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
