
// 問１　回答

/*for(var star = 1; star <= 3; star++){
    document.write("★");
    //1～3まで３未満の場合★を表示する
}
document.write("<br>");

for(var star1 = 1; star1 <= 3; star1++){
    document.write("★");
}
*/

//問２　回答

for(var no1 =0; no1 <5; no1++){
    for(var no2 =0; no2 <=5; no2++){
        if(no2 % 2 == 0){
            document.write("★")
        }
        else{
            document.write("☆")
        }
        
            document.write("<br>")
    }
}