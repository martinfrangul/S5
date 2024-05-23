import dot from "../assets/icons8-punto-y-final-24.png";
import line from "../assets/line.png";
import { motion } from "framer-motion";

function Indicator({ step, tutorialData }) {
  const indicadores = tutorialData.map((item, index) => {
    if (step === index) {
      return (
        <motion.img
          animate={{y: 5}}
          key={item.id}
          src={line}
          alt="line"
        />
      );
    } else {
      return <motion.img key={item.id} src={dot} alt="dot" />;
    }
  });

  return (
    <div
      id="indicadores-container"
      className="flex flex-row items-center text-7xl h-fit"
    >
      {indicadores}
    </div>
  );
}

export default Indicator;
