async function selection(){
    console.log('In selection()');
    const bar_ele = document.querySelectorAll(".bar");
    for(let i = 0; i < bar_ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        // Change color of the position to swap with the next min
        bar_ele[i].style.background = 'blue';
        for(let j = i+1; j < bar_ele.length; j++){
            console.log('In jth loop');
            // Change color for the current comparision (in consideration for min_index)
            bar_ele[j].style.background = 'red';

            await waitforme(delay);
            if(parseInt(bar_ele[j].style.height) < parseInt(bar_ele[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    bar_ele[min_index].style.background = 'cyan';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                bar_ele[j].style.background = 'cyan';
            }   
        }
        await waitforme(delay);
        swap(bar_ele[min_index], bar_ele[i]);
        // change the min bar_element index back to normal as it is swapped 
        bar_ele[min_index].style.background = 'cyan';
        // change the sorted bar_elements color to green
        bar_bar_ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});