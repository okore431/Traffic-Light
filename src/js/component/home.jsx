import React, {useState, useEffect} from "react";

const lightDurations = {
	red: 3000,
	yellow: 2000,
	green: 1000
  };
//create your first component
const Home = () => {
	const[selectedColor, setSelectedColor] = useState ("red");
	useEffect(() => {
		const timeout = setTimeout(() => {
		  if (selectedColor === "red") {
			setSelectedColor("yellow");
		  } else if (selectedColor === "yellow") {
			setSelectedColor("green");
		  } else if (selectedColor === "green") {
			setSelectedColor("red");
		  }
		}, lightDurations[selectedColor]);
	  
		return () => {
		  clearTimeout(timeout);
		};
	  }, [selectedColor]);
    
	return (
		<>
		<div className="traffic-light">
			<div
			   onClick={() => setSelectedColor ("red")}
			   className={"light red" + ((selectedColor === "red") ? " glow" : "")}>
			</div>
			<div  
			   onClick={() => setSelectedColor ("yellow")}
			   className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")}>
			</div>
			<div 
			   onClick={() => setSelectedColor ("green")}
			   className={"light green" + ((selectedColor === "green") ? " glow" : "")}>
			</div>
		</div>
		</>
	);
};

export default Home;

