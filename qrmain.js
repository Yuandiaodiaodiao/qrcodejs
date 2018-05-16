document.write("<script src=\"./tool/showqr.js\"></script>");
document.write("<script src=\"./tool/qrconstblock.js\"></script>");
document.write("<script src=\"./tool/buildqr.js\"></script>");
document.write("<script src=\"./tool/qrtool.js\"></script>");
document.write("<script src=\"./tool/qrconst.js\"></script>");
function main(){
   // alert("233█");
   //  nummod("01234567");
    var a = new Array();
    for(let i=0;i<=Version*4+16;i++){
        a[i] = new Array();
        for(let j=0;j<=Version*4+16;j++){
            a[i][j] = 0;

        }
    }

    buildAll(a);
    show(a);
}