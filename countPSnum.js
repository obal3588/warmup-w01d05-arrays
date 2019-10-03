

/*Count of positives / sum of negatives*/
/*return array of [pos,neg] or emtay []*/


/*Not if  function does not  the parameter it will be false not null */ 

function countPsumN(arr) {
    if (!arr || arr.length === 0)
      return [];
    
    let positive = 0;
    let negative = 0;
    
    for (let i=0; i<arr.length; ++i)
    {
      if (arr[i] > 0)
         positive++;
      else
        negative += arr[i];
    }
    
    return [positive, negative];
}


countPsumN([10, 2, 15, -2,-10]) 