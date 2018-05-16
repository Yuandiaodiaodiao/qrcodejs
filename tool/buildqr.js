//定位虚线
function buildTiming (arr) {//定位线
    var sw=1;
    for(let i=9-1;i<=arr.length-1;i++){
        arr[6][i]=sw;
        arr[i][6]=sw;
        if(sw==1)sw=0;else sw=1;
    }
}
//定位大方块
function buildPositionDetection (arr) {
    copyblock(arr,qrcb1,0,0);
    copyblock(arr,qrcb1,arr.length-7,0);
    copyblock(arr,qrcb1,0,arr.length-7);
}
//构建小的定位块
function buildAlignmentPatterns(arr) {
    for(let i=1;i<=Alignment[Version].length;i++){
        for(let j=1;j<=Alignment[Version].length;j++){
            if((i==1&&j==1)||(i==1&&j==Alignment[Version].length)||(i==Alignment[Version].length&&j==1))continue;
            copyblock(arr,qrcb2,Alignment[Version][j-1]-2,Alignment[Version][i-1]-2);
        }
    }


}
function addindatatest(arr2,arr) {
    // let ifr=0;//渲染涂色
    let dir=-1;//-1向上 1 向下
    let nowx=arr.length-1;
    let nowy=arr.length-1;
    let ifl=0;//1表示两个格子的左边 0表示处于两个格子的右侧
    let bdata=1;//1~8表示当前data格子涂色的id
    while(1){
        if(arr[nowy][nowx]==0){//白色 表示可以涂色
            arr2[nowy][nowx]=bdata+1; //涂色
            bdata+=1;
            if(bdata==9)bdata=1;
            if(ifl==0){ifl=1;nowx-=1;}
            else if(ifl==1){
                //切换右侧提升高度
                ifl=0;nowx+=1;
            nowy+=dir;
            if(nowy==-1||nowy==arr.length){//越界
                dir=-dir;//改变方向
                nowy+=dir;
                nowx-=2;
                //左移2
                if(nowx<0)break;
            }
            }
            continue;
        }else//无法涂色 开始寻找能涂色的格子
        {
            if(ifl==0){//在右侧
                ifl=1;
                nowx-=1;//尝试左侧的格子
                continue; //重新循环检查涂色


            }
            if(ifl==1){//在左侧
                ifl=0;//切换右侧并且提升/下降
                nowx+=1;
                nowy+=dir;
                if(nowy==-1||nowy==arr.length){//越界
                    dir=-dir;//改变方向
                    nowy+=dir;
                    nowx-=2;
                    if(nowx<0)break;
                    //左移2
                }
                continue;
            }

        }
    }

}
function buildAll(arr) {
    buildTiming(arr);
    buildPositionDetection(arr);
    buildAlignmentPatterns(arr);

    let arr2=blackother(arr);
    addindatatest(arr,arr2);

}
//将无关的全部填充为黑色 然后来进行填充数据block
function blackother(x) {

    let arr = new Array();
    for(let i=0;i<=Version*4+16;i++){
        arr[i] = new Array();
        for(let j=0;j<=Version*4+16;j++){
            arr[i][j] = 0;

        }
    }

    copyblock(arr,qrcb11,0,0);
    copyblock(arr,qrcb11,arr.length-8,0);
    copyblock(arr,qrcb11,0,arr.length-8);
    for(let i=1;i<=Alignment[Version].length;i++){
        for(let j=1;j<=Alignment[Version].length;j++){
            if((i==1&&j==1)||(i==1&&j==Alignment[Version].length)||(i==Alignment[Version].length&&j==1))continue;
            copyblock(arr,qrcb21,Alignment[Version][j-1]-2,Alignment[Version][i-1]-2);
        }
    }
    arr[8][8]=1;
 for(let i=0;i<=7;i++) {
     arr[8][i] = 1;
     arr[i][8] = 1;
     arr[8][arr.length - i - 1] = 1;
     arr[arr.length - i - 1][8] = 1;
     arr[i][arr.length-8]=1;
     arr[arr.length-8][i]=1;
 }
     for(let i=9-1;i<=arr.length-1;i++){
         arr[6][i]=1;
         arr[i][6]=1;

     }
if(Version>=7){
    for(let i=0;i<=5;i++){
        arr[i][arr.length-9]=1;
        arr[i][arr.length-9-1]=1;
        arr[i][arr.length-9-2]=1;
    arr[arr.length-9][i]=1;
    arr[arr.length-9-1][i]=1;
    arr[arr.length-9-2][i]=1;



    }


}
     // arr[i][arr.length-8-1]=1;
     // arr[arr.length-8][arr.length-i-1]=1;
     // arr[i][arr.length-8]=1;
     // arr[arr.length-i-1][arr.length-8]=1;
return arr
}
function nummod(str){
    var numbin="";
    for(let i=0;i<=str.length-1;i+=3){
        // alert(str.length-3);
        numbin+=numtobinary(str.substr(i,Math.min(3,str.length-i)),Math.min(3,str.length-i)*3+1);
    }
// alert(numbin);
    var numcountbitlen=0;
    if(Version<=9)numcountbitlen=10;else if(Version<=26)numcountbitlen=12;
    else numcountbitlen=14;
    var numcount=numtobinary(str.length+"",numcountbitlen);
    var ECImode="0001";
    var databinary=ECImode+numcount+numbin;
    databinary=lastzero(databinary,databinarylength[Version][Errorlevel]*8);

    alert(databinary);
}