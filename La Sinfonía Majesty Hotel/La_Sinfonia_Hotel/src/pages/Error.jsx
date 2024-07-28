import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="flex items-center justify-center h-screen p-12 bg-accent-900">
      <div className="flex-grow-0 max-w-6xl p-12 text-center bg-white border border-gray-100 rounded-md flex-shrink-1">
        <h1 className="mb-8">
          The page you are looking for could not be found 😢
        </h1>
        <button
          onClick={moveBack}
          className="px-4 py-2 text-lg text-white transition rounded-md bg-accent-500 hover:bg-accent-600"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
