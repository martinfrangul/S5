export default function Card({ currentCardData }) {
  return (
    <>
      <h1>{currentCardData.title}</h1>
      <p>{currentCardData.description}</p>
    </>
  );
}
