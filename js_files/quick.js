
async function partitionLomuto(bar_el, l, r){
    console.log('In partitionLomuto()');
    let i = l - 1;
    // color pivot element
    bar_el[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        // color current element
        bar_el[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(bar_el[j].style.height) < parseInt(bar_el[r].style.height)){
            console.log('In partitionLomuto for j if');
            i++;
            swap(bar_el[i], bar_el[j]);
            // color 
            bar_el[i].style.background = 'orange';
            if(i != j) bar_el[j].style.background = 'orange';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            bar_bar_el[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(bar_bar_el[i], bar_ele[r]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    bar_ele[r].style.background = 'pink';
    bar_ele[i].style.background = 'green';

    // pauseChamp
    await waitforme(delay);
    
    // color
    for(let k = 0; k < bar_ele.length; k++){
        if(bar_ele[k].style.background != 'green')
            bar_ele[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(bar_ele, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(bar_ele, l, r);
        await quickSort(bar_ele, l, pivot_index - 1);
        await quickSort(bar_ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <bar_ele.length && r <bar_ele.length){
            bar_ele[r].style.background = 'green';
            bar_ele[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = bar_el.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(bar_el, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});