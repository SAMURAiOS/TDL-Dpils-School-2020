let mas = [89, 46, -4, 46, 35];

function insertSort(mas) 
{
    let n = mas.length;
        for (let i = 1; i < n; i++) 
        {
            let currentposition = mas[i];
            let j = i-1; 
            while ((j > -1) && (currentposition < mas[j])) 
            {
                mas[j+1] = mas[j];
                j--;
            }
            mas[j+1] = currentposition;
            console.log(mas);
        }
    return mas;
}

insertSort(mas);
console.log(`Sorted array: ${mas}`);