export default function Card({ currentCardData, nextStepHandler }) {

  return (
    <>
      <h1>{currentCardData.title}</h1>
      <p>{currentCardData.description}</p>
      <button onClick={nextStepHandler}>Next card</button>
    </>
  );
}
