const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white text-4xl font-bold text-red-600 sm:text-6xl">
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <h1 className="mt-2 text-4xl font-light text-neutral-500">
        or is under development
      </h1>
    </div>
  );
};

export default NotFound;
