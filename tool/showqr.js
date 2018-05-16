//alert("im");
function show(arr) {
    // alert("show1");
    var c=document.getElementById("canvas1");
    var cxt=c.getContext("2d");
    let cxt2=c.getContext("2d");
    cxt.fillStyle="#000000";
    // alert("show2");
    var wid=10;

    for(let i=0;i<=arr.length-1;i++){
        for(let j=0;j<=arr[0].length-1;j++){

            switch (arr[i][j]){
                case 2:{  cxt.fillStyle="#ff0721";break;}
                case 3:{  cxt.fillStyle="#ffa812";break;}
                case 4:{  cxt.fillStyle="#f7ff0c";break;}
                case 5:{  cxt.fillStyle="#11ff02";break;}
                case 6:{  cxt.fillStyle="#07fff0";break;}
                case 7:{  cxt.fillStyle="#0aa9ff";break;}
                case 8:{  cxt.fillStyle="#0227ff";break;}
                case 9:{  cxt.fillStyle="#ff0af3";break;}
            }
            if(arr[i][j]==1){
                // alert("231");

                cxt.fillStyle="#000000";
            }
            if(arr[i][j]==1){
            cxt.fillRect(j*wid+1,i*wid+1,wid,wid);}
            else if(arr[i][j]!=0){
                cxt2.font="9px Arial";
                cxt2.strokeText(""+(arr[i][j]-1),j*wid+3,i*wid+10);

            }
        }
    }
}
function copyblock(arr,co,y,x) {
    for(let i=y;i<=co.length-1+y;i++){
        for(let j=x;j<=co.length-1+x;j++){
            arr[i][j]=co[i-y][j-x]
        }
    }

}