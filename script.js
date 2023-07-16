function idle2() {
    alert("Please Press ENTER Key To Run.");

    if (idleworkerId == 0) {

        idleworkerId = setInterval(idle, 110);
    }

}
//Key Check----------------------------------------------------------------
function keyCheck(event) {

//Run Control--------------------------------------------------------------
    if (event.which == 13) {

        if(creatBlockWorkerId==0){

            creatBlockWorkerId=setInterval(createBlock,100);
        }
        if (runworkerId == 0) {

            clearInterval(idleworkerId);
            runworkerId = setInterval(run, 90);

        }

    }
    if (bgMoveId == 0) {

        bgMoveId = setInterval(movebg, 100);

    }

    //  if(event.which==16){

    //  if(idleworkerId==0){

    //  idleworkerId=setInterval(idle,110);
    //  }
    // }
//Jump Control------------------------------------------------------------
    if (event.which == 32) {
        if (jumpWorkerId == 0) {

            clearInterval(idleworkerId);
            clearInterval(runworkerId);
            jumpWorkerId = setInterval(jump, 100);
        }

    }


}


//--------------------------------IDLE-------------------------------------//
//idle
idleImageId = 1;
idleworkerId = 0;

function idle() {

    idleImageId++;
    if (idleImageId == 11) {
        idleImageId = 1;
    }
    robotId.src = "Idle (" + idleImageId + ").png";


}





//---------------------------------RUN------------------------------------//
//run
var robotId = document.getElementById("robot");
var runImageId = 1;
var runworkerId = 0;

function run() {
    runImageId++;
    if (runImageId == 9) {
        runImageId = 1;
    }
    robotId.src = "Run (" + runImageId + ").png";

}




//----------------------------------JUMP---------------------------------//
//jump
var jumpImageID = 1;
var jumpWorkerId = 0;
var marginTopValue = 350;


function jump() {

    if (jumpImageID <= 5) {
        marginTopValue = marginTopValue - 30;
        robotId.style.marginTop = marginTopValue + "px";



    }

    if (jumpImageID >= 6) {
        marginTopValue = marginTopValue + 30;
        robotId.style.marginTop = marginTopValue + "px";

    }

    jumpImageID++;
    if (jumpImageID == 11) {
        jumpImageID = 1;
        clearInterval(jumpWorkerId);
        jumpWorkerId = 0;
        runworkerId = setInterval(run, 100);
    }
    robotId.src = "Jump (" + jumpImageID + ").png";


}

//-------------------------------BACKGROUND MOVE-------------------------------//

var bgImagePosision = 0;
var bgMoveId = 0;

function movebg() {

    bgImagePosision = bgImagePosision - 30;

    document.getElementById("background").style.backgroundPositionX = bgImagePosision + "px";


}

//create block
var blockMarginLeft = 200;
var creatBlockWorkerId = 0;
var blockId = 1;

function createBlock() {
    var block = document.createElement("div");


    block.className = "block";
    block.id = "block" + blockId;

    blockId++;
    var gap = Math.random() * (1000 - 400) + 400;
    blockMarginLeft = blockMarginLeft + gap;
    block.style.marginLeft = blockMarginLeft + "px";
    document.getElementById("background").appendChild(block);



}

var moveBlockWorkerId = 0;

function moveBlock() {
    for (var i = 1; i <= blockId; i++) {

        var curruntBlock = document.getElementById("block" + i);
        var curruntBlockMarginLeft = curruntBlock.style.marginLeft;
        var newBlockMarginLeft = parseInt(curruntBlockMarginLeft) - 20;
        curruntBlock.style.marginLeft = newBlockMarginLeft + "px";



    }

}