import dot from "../assets/icons8-punto-y-final-24.png";
import line from "../assets/line.png";
import { motion } from "framer-motion";

function Indicator({changeStep, step, tutorialData }) {


  const handleChangeStep = (index) => {
    changeStep(index)
  }

  const indicadores = tutorialData.map((item, index) => {
    if (step === index) {
      return (
          <motion.img animate={{ y: 5 }} onClick={() => handleChangeStep(index)} key={item.id} src={line} alt="line" />
      );
    } else {
      return (
        
          <motion.img key={item.id} onClick={() => handleChangeStep(index)} src={dot} alt="dot" />
      );
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
