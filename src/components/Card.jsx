export default function Card({ currentCardData, nextStepHandler, prevStepHandler }) {

  return (
    <>
      <h1>{currentCardData.title}</h1>
      <p>{currentCardData.description}</p>
      <button onClick={prevStepHandler}>Previous card</button>
      <button onClick={nextStepHandler}>Next card</button>
    </>
  );
}
