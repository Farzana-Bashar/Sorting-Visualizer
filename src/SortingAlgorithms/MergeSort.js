export default function MergeSort(array) {
    const trace=[];
    if(array.length<=1) return array;
    const auxiliaryArray= array.slice(); //array.slice makes auxiliaryArray and array as two different object
    mergeSort(array,0,array.length,auxiliaryArray,trace);
    return trace;
}

const mergeSort=(mainArray,start,end,auxiliaryArray,trace)=>{

    if(start===end) return;
    const mid=Math.floor((start+end)/2);
    mergeSort(auxiliaryArray,start,mid,mainArray,trace);
    mergeSort(auxiliaryArray,mid+1,end,mainArray,trace);
    merge(mainArray,start,mid,end,auxiliaryArray,trace);

}

const merge=(mainArray,start,mid,end,auxiliaryArray,trace)=>{

    let i=start;
    let j=mid+1;
    let k=start;

    while(i<=mid && j<=end){
        trace.push([i,j]);
        trace.push([i,j]);
        if(auxiliaryArray[i]<=auxiliaryArray[j]){
            trace.push([k,auxiliaryArray[i]]);
            mainArray[k++]= auxiliaryArray[i++];
        }
        else{
            trace.push([k,auxiliaryArray[j]]);
            mainArray[k++]=auxiliaryArray[j++];
        }
    }

    while(i<=mid){
        trace.push([i,i]);
        trace.push([i,i]);
        trace.push([k,auxiliaryArray[i]]);
        mainArray[k++]=auxiliaryArray[i++];
    }
    while(j<=end){
        trace.push([j,j]);
        trace.push([j,j]);
        trace.push([k,auxiliaryArray[j]]);
        mainArray[k++]=auxiliaryArray[j++];
    }

}