import React, { useEffect, useState } from "react";
import { MergeSort } from '../SortingAlgorithms/MergeSort';
import "./SortingVisualizer.css";

const ANIMATION_SPEED_MS = 2;
const PRIMARY_COLOR = 'rgb(182, 221, 137)';
const SECONDARY_COLOR = 'red';

export default function SortingVisualizer() {
  const [array, setArray] = useState([7, 370, 345, 120, 115, 87, 483, 106, 71, 209, 77, 121, 323, 180, 178, 190, 280, 196, 179, 63, 160, 93, 417, 169, 311, 236, 209, 478, 474, 79, 311, 371, 254, 279, 292, 353, 232, 59, 335, 355, 62, 434, 440, 48, 166, 59, 124, 279, 312, 149, 245, 64, 310, 388, 413, 251, 52, 241, 214, 423, 116, 20, 22, 87, 214, 98, 161, 426, 60, 136, 270, 492, 325, 307, 266, 50, 347, 489, 403, 273, 231, 432, 242, 344, 417, 372, 137, 6, 421, 294, 439, 7, 478, 168, 160, 26, 196, 500, 76, 444,419, 400, 342, 86, 113, 343, 148, 302, 248, 90, 150, 135, 378, 208, 349, 463, 476, 438, 414, 287, 148, 101, 73, 35, 20, 87, 226, 145, 280, 206, 480, 398, 119, 190, 214, 111, 224, 276, 452, 134, 413, 321, 171, 183, 13, 162, 470, 474, 46, 126, 441, 308, 236, 373, 223, 87, 276, 437, 438, 207, 158, 193, 261, 102, 226, 144, 35, 17, 424, 450, 188, 230, 449, 79, 431, 386, 199, 142, 311, 45, 74, 181, 271, 380, 130, 144, 180, 176, 228, 321, 321, 191, 426, 77, 243, 81, 114, 396, 69, 485]);
  const[len,setLen]=useState(0);

  function randomIntFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const change=()=>{
    setLen(Math.random());
  }
  

  const getArray = () => {
    for (let i = 0; i < 200; i++) {
      array[i] = randomIntFromIntervals(5, 500);
    }
    setArray(array);
  };

  useEffect(() => {
    getArray();
  },[len]);

  const mergeSort=()=>{
    const trace=MergeSort(array);
    console.log(trace);
    for(let i=0;i<trace.length;i++){
      const arrayBars=document.getElementsByClassName('array-bar');
      const isColorChange= i % 3 !==2;
      if (isColorChange) {
        const [oneIdx, twoIdx] = trace[i];
        const oneStyle = arrayBars[oneIdx].style;
        const twoStyle = arrayBars[twoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          oneStyle.backgroundColor = color;
          twoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = trace[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }

    }

  }
  const quickSort=()=>{}
  const selectionSort=()=>{}

  return (
    <div className="array-container">
    
      {array.map((itms, idx) => (
        <div className="array-bar" key={idx} style={{height:`${itms}px`}}>
        </div>
      ))}
      <button onClick={change}>Generate New Array</button>
      <button onClick={mergeSort}>Merge Sort</button>
      <button onClick={quickSort}>Quick Sort</button>
      <button onClick={selectionSort}>Selection Sort</button>
      
    </div>
  );
}
