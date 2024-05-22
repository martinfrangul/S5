export default function Card({
  currentCardData,
  nextStepHandler,
  prevStepHandler,
}) {
  return (
    <>
      <div className="card"></div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={currentCardData.image}
          alt="Relax"
        />
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold mb-3 ">{currentCardData.title}</h1>

          <p className="mb-4" >{currentCardData.description}</p>

          {currentCardData.image && <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 rounded"
            onClick={prevStepHandler}
          >
            Previous card
          </button>}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 rounded"
            onClick={nextStepHandler}
          >
            Next card
          </button>
        </div>
      </div>
    </>
  );
}
