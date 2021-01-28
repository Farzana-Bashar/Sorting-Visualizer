export function SelectionSort(array) {
    const trace=[];
    if(array.length<=1) return array;
    for(let i=0; i<array.length; i++){
        for(let j=i; j<array.length; j++){
            trace.push([i,j]);
            trace.push([i,j]);
            if(array[j]<array[i]){
                let temp=array[j];
                array[j]=array[i];
                array[i]=temp;
                trace.push([i,array[i],j,array[j]]);
            }
            else{
                trace.push([i,array[i],i,array[i]]);
            }
        
        }
    }
    return trace;
}
