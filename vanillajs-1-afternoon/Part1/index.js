
const arr = [];


function play(click){
    let playerSpan = document.getElementById('player')
    let clickedItem = document.getElementById(click)
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedItem.innerText = 'X'
        arr[click] = 'X'

    } else {
        playerSpan.innerText = 'X';
        clickedItem.innerText = 'O'
        arr[click] = 'O'
    }
    console.log(arr)

    const tLeft = arr[0];
    const tMid = arr[1];
    const tRight = arr[2];
    const mLeft = arr[3];
    const mMid = arr[4];
    const mRight = arr[5];
    const bLeft = arr[6];
    const bMid = arr[7];
    const bRight = arr[8];

    if (tLeft !== undefined && tLeft === tMid && tLeft === tRight){
        alert(`${tLeft} is the winner`);
        return
    }
    if (mLeft !== undefined && mLeft === mMid && mLeft === mRight){
        alert(`${mLeft} is the winner`);
        return
    }
    if (bLeft !== undefined && bLeft === bMid && bLeft === bRight){
        alert(`${bLeft} is the winner`);
        return
    }
    if (tLeft !== undefined && tLeft === mLeft && tLeft === bLeft){
        alert(`${tLeft} is the winner`);
        return
    }
    if (tMid !== undefined && tMid === mMid && tMid === bMid){
        alert(`${tMid} is the winner`);
        return
    }
    if (tRight !== undefined && tRight === mRight && tRight === bRight){
        alert(`${tRight} is the winner`);
        return
    }
    if (tLeft !== undefined && tLeft === mMid && tLeft === bRight){
        alert(`${tLeft} is the winner`);
        return
    }
    if (bLeft !== undefined && bLeft === mMid && bLeft === tRight){
        alert(`${bLeft} is the winner`);
        return
    }


    let boardFull = true;
    for(let i = 0; i<= 8; i++){
        if(arr[i] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true){
        alert("Cat's game, there is no winner")

    }
}


    


