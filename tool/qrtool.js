function numtobinary(str,bitlen) {
    // alert("Str"+str);

    var num=0;
    //字符串转为数字方便计算
    for(let i=0;i<=str.length-1;++i){
        num*=10;
        num+=str[i]-'0';
    }
    var ans=""; //二进制字符串
    //生成二进制字符串
    while(num>0){
        if(num%2==0)ans="0"+ans;else ans="1"+ans;
        num>>=1;
    }


    ans=frontzero(ans,bitlen);
    // alert(ans);
    return ans;
}

function frontzero(str ,bitlen){
    //填充前导零
    while(str.length<bitlen)str="0"+str;
    // alert(ans);
    return str;
}
function lastzero(str,bitlen) {
    //末尾填充0
    alert("bitlen="+bitlen);
    while(str.length<bitlen)str+="0";
    return str;
}