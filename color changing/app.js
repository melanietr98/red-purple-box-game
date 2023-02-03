var countReds=0;
let makeBoxes='';
const changeColor = (aa) =>{
    aa.className="purple";
    countReds--;
}

//calling function when start button is clicked
document.getElementById('startBtn').addEventListener('click',()=>{
    //making a setInterval which executes every 0.5 seconds
     makeBoxes = setInterval(()=>{
         //calculating and storing random valeus for top right bottom and left
        var top =  Math.floor((Math.random() * 500) + 1);
        var bottom =  Math.floor((Math.random() * 500) + 1);
        var left =  Math.floor((Math.random() * 100) + 1);
        var right =  Math.floor((Math.random() * 100) + 1);
        //adding the box to html DOM
        document.getElementById('divv').innerHTML+=`<div class="red" onclick='changeColor(this)' style='position:absolute; left:${left}px; top:${top}px; right:${right}px; bottom:${bottom}px; width:50px; height:50px;'></div>`
        //incrementing count of reds 
        countReds = countReds + 1;
if(countReds==5){
    clearInterval(makeBoxes);
    alert('Sorry, There are more than 5 red boxes at a time! You have lost the game.');
}
    },500);

})
