let positions = Array(9).fill(null) 

let turnState = "X"

let moveNumber = 0

const winConditions = [
    [0,1,2],  //top row
    [3,4,5],  //mid row
    [6,7,8],  //bottom row
    
    [0,3,6],  //left col
    [1,4,7],  //mid col
    [2,5,8],  //right col


    [0,4,8],   //backslash
    [2,4,6]   //forwardslash
]

const markBox = (boxId) => {
    //check if box is filled
    //if filled, return
    if (positions[boxId] !== null) return
    //update positions array
    positions[boxId] = turnState;
    moveNumber++
    //update html
    document.getElementById(`box${boxId+1 }`).innerHTML=`<div class='${turnState}'>${turnState}</div>`;
    //check win
    for (let i = 0; i < winConditions.length; i++) {
        let winCondition = winConditions[i];
        if (positions[winCondition[0]] !== null && positions[winCondition[1]] !== null &&
            positions[winCondition[2]] !== null &&
            positions[winCondition[0]] === positions[winCondition[1]] &&
            positions[winCondition[0]] === positions[winCondition[2]]) {
                console.log(`WINNER is ${turnState}`)
                return
            }
    }
    //change turnState
    if (turnState === "X") turnState = "O"
    else turnState = "X"

    if (moveNumber === 9) {console.log("CAT GAME -- GAME OVER")}
}

// let conditionsX = {
//     condX1: [false,false,false],
//     condX2: [false,false,false],
//     condX3: [false,false,false],
//     condX4: [false,false,false],
//     condX5: [false,false,false],
//     condX6: [false,false,false],
//     condX7: [false,false,false],
//     condX8: [false,false,false]
// }

// let conditionsO = {
//     condO1: [false,false,false],
//     condO2: [false,false,false],
//     condO3: [false,false,false],
//     condO4: [false,false,false],
//     condO5: [false,false,false],
//     condO6: [false,false,false],
//     condO7: [false,false,false],
//     condO8: [false,false,false]
// }

// let turnState = 1

// function markBox(boxId) {
// //////// "X" PORTION
//     if (turnState === 1) {
//         document.getElementById(boxId).innerHTML="<div class='X'>X</div>";
//         if (boxId === 'box1') {
//             conditionsX.condX1.splice(0,1,boxId);
//             conditionsX.condX4.splice(0,1,boxId);
//             conditionsX.condX7.splice(0,1,boxId);
//         }
//         else if (boxId === 'box2') {
//             conditionsX.condX1.splice(1,1,boxId);
//             conditionsX.condX5.splice(0,1,boxId);
//         }  
//         else if (boxId === 'box3') {
//             conditionsX.condX1.splice(2,1,boxId);
//             conditionsX.condX6.splice(0,1,boxId);
//             conditionsX.condX8.splice(0,1,boxId);
//         }
//         else if (boxId === 'box4') {
//             conditionsX.condX2.splice(0,1,boxId);
//             conditionsX.condX4.splice(1,1,boxId);
//         }
//         else if (boxId === 'box5') {
//             conditionsX.condX2.splice(1,1,boxId);
//             conditionsX.condX5.splice(1,1,boxId);
//             conditionsX.condX7.splice(1,1,boxId);
//             conditionsX.condX8.splice(1,1,boxId);
//         }
//         else if (boxId === 'box6') {
//             conditionsX.condX2.splice(2,1,boxId);
//             conditionsX.condX6.splice(1,1,boxId);
//         }
//         else if (boxId === 'box7') {
//             conditionsX.condX3.splice(0,1,boxId);
//             conditionsX.condX4.splice(2,1,boxId);
//             conditionsX.condX8.splice(2,1,boxId);
//         }
//         else if (boxId === 'box8') {
//             conditionsX.condX3.splice(1,1,boxId);
//             conditionsX.condX5.splice(2,1,boxId);
//         }
//         else {
//             conditionsX.condX3.splice(2,1,boxId);
//             conditionsX.condX6.splice(2,1,boxId);
//             conditionsX.condX7.splice(2,1,boxId);
//         }
//         turnState = 2;
//         //console.log(turnState);
//         console.log(conditionsX) 
//     }    
// //////// "O" PORTION    
//         else {
//             document.getElementById(boxId).innerHTML="<div class='O'>O</div>";
//             if (boxId === 'box1') {
//                 conditionsO.condO1.splice(0,1,boxId);
//                 conditionsO.condO4.splice(0,1,boxId);
//                 conditionsO.condO7.splice(0,1,boxId);
//             }
//             else if (boxId === 'box2') {
//                 conditionsO.condO1.splice(1,1,boxId);
//                 conditionsO.condO5.splice(0,1,boxId);
//             }  
//             else if (boxId === 'box3') {
//                 conditionsO.condO1.splice(2,1,boxId);
//                 conditionsO.condO6.splice(0,1,boxId);
//                 conditionsO.condO8.splice(0,1,boxId);
//             }
//             else if (boxId === 'box4') {
//                 conditionsO.condO2.splice(0,1,boxId);
//                 conditionsO.condO4.splice(1,1,boxId);
//             }
//             else if (boxId === 'box5') {
//                 conditionsO.condO2.splice(1,1,boxId);
//                 conditionsO.condO5.splice(1,1,boxId);
//                 conditionsO.condO7.splice(1,1,boxId);
//                 conditionsO.condO8.splice(1,1,boxId);
//             }
//             else if (boxId === 'box6') {
//                 conditionsO.condO2.splice(2,1,boxId);
//                 conditionsO.condO6.splice(1,1,boxId);
//             }
//             else if (boxId === 'box7') {
//                 conditionsO.condO3.splice(0,1,boxId);
//                 conditionsO.condO4.splice(2,1,boxId);
//                 conditionsO.condO8.splice(2,1,boxId);
//             }
//             else if (boxId === 'box8') {
//                 conditionsO.condO3.splice(1,1,boxId);
//                 conditionsO.condO5.splice(2,1,boxId);
//             }
//             else {
//                 conditionsO.condO3.splice(2,1,boxId);
//                 conditionsO.condO6.splice(2,1,boxId);
//                 conditionsO.condO7.splice(2,1,boxId);
//             }
//             turnState = 1;
//             //console.log(turnState);
//             console.log(conditionsO);    
//         }

    
//     if (conditionsX.condX1.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsX.condX2.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsX.condX3.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsX.condX4.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsX.condX5.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsX.condX6.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsX.condX7.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsX.condX8.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }

//     else if (conditionsO.condO1.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsO.condO2.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsO.condO3.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsO.condO4.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsO.condO5.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsO.condO6.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsO.condO7.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }
//     else if (conditionsO.condO8.every(testForWin) === true) {
//         console.log("WINNER");
        
//     }

//     function testForWin(box) {
//         return box !== false
//     }









// }






