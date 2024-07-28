import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <main className="flex items-center justify-center h-screen p-6 bg-accent-100">
        <div className="flex-1 max-w-xl p-10 text-center bg-white border border-gray-100 rounded-xl">
          <h1 className="py-2 text-3xl font-semibold">
            Something went wrong 🧐
          </h1>
          <p className="mb-6 text-gray-500 font-sono">{error.message}</p>
          <Button size="large" onClick={resetErrorBoundary}>
            Try again
          </Button>
        </div>
      </main>
    </>
  );
}

export default ErrorFallback;
