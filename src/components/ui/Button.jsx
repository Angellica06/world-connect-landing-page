function Button({ children, className = "" }) {
  return (
    <>
      <a
        className={`bg-[#1D1D1D] font-medium py-3 px-5 rounded-3xl ${className} cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-104`}
      >
        {children}
      </a>
    </>
  );
}

export default Button;
