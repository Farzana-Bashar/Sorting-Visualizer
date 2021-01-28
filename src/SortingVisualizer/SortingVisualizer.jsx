import React, { useEffect, useState } from "react";
import { MergeSort } from '../SortingAlgorithms/MergeSort';
import {SelectionSort} from '../SortingAlgorithms/SelectionSort'
import "./SortingVisualizer.css";

const ANIMATION_SPEED_MS = 2;
const PRIMARY_COLOR = 'rgb(182, 221, 137)';
const SECONDARY_COLOR = 'red';
// const SORTED_COLOR='BLUE';


export default function SortingVisualizer() {
  const [array, setArray] = useState([]);

  function randomIntFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

  const getArray = () => {
    const array=[]
    for (let i = 0; i < 200; i++) {
      array[i] = randomIntFromIntervals(5, 500);
    }
    setArray(array);
  };

 
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
          // barOneStyle.backgroundColor=SORTED_COLOR;
        }, i * ANIMATION_SPEED_MS);
      }

    }

  }
  // const quickSort=()=>{}
  const selectionSort=()=>{
    console.log(array);
    const trace=SelectionSort(array);
    console.log(trace);
    for(let i=0; i<trace.length; i++){
      const arrayBars=document.getElementsByClassName('array-bar');
      const isColorChange= i % 3 !==2;
      // const color1=i%4;
      // const color2=== i%4;
      if (isColorChange) {
        const [oneIdx, twoIdx] = trace[i];
        const oneStyle = arrayBars[oneIdx].style;
        const twoStyle = arrayBars[twoIdx].style;
        const color = i % 3=== 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          oneStyle.backgroundColor = color;
          twoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight1,barTwoIdx,newHeight2] = trace[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight1}px`;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barTwoStyle.height = `${newHeight2}px`;
          // barOneStyle.backgroundColor=SORTED_COLOR;
        }, i * ANIMATION_SPEED_MS);
      }
      
    }
  }


  useEffect(() => {
    getArray();
  },[]);


  return (
    <div className="array-container">
    
      {array.map((itms, idx) => (
        <div className="array-bar" key={idx} style={{height:`${itms}px`}}>
        </div>
      ))}
      <button onClick={getArray}>Generate New Array</button>
      <button onClick={mergeSort}>Merge Sort</button>
      {/* <button onClick={quickSort}>Quick Sort</button> */}
      <button onClick={selectionSort}>Selection Sort</button>
      
    </div>
  );
}
