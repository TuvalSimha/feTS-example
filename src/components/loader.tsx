export const Loader = () => {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <h1 className="text-lg font-bold">feTS Demo</h1>
      </div>
    </>
  );
};

export default Loader;
