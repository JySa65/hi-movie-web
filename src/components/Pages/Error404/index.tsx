const Error404 = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>
        <span className="text-[30vw] font-josefin text-red-primary stroke-white">4</span>
        <span className="text-[25vw] font-josefin">0</span>
        <span className="text-[30vw] font-josefin text-red-primary border-">4</span>
      </h1>
      <p className="text-white text-6xl">Pagina no encontrada</p>
    </div>
  );
};

export default Error404;
