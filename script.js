// 問１　回答

/*

for(var star = 1; star <= 3; star++){
    document.write("★");
    //1～3まで３未満の場合★を表示する
}
document.write("<br>");

for(var star1 = 1; star1 <= 3; star1++){
    document.write("★");
}


// for文　参考問題 

for(var no1 =0; no1 <2; no1++){
    for(var no2 =0; no2 <=2; no2++){
        if(no2 % 2 == 0){
            document.write("★")
        }
        else{
            document.write("☆")
        }
        
            //document.write("<br>")
    }
}



// 問２　回答

for(star = 1; star <=2; star++){
    for(star2 = 1; star2 <=3; star2++){  
        document.write("☆")
    }
    
    document.write("<br>")
}

For文の入れ子はループ処理が終了されると変数はリセットされる
        ここではstar2はstar1分のx２回分回すことになる。

        
// 問３　回答

for(star = 1; star <=2; star++){
    for(star2 = 1; star2 <=5; star2++){  
        document.write("☆")
    }
    
    document.write("<br>")
}



//問４　回答

for(star = 1; star <=4; star++){
    for(star2 = 1; star2 <=5; star2++){  
        document.write("★")
    }
    
    document.write("<br>")
}



// 問５　回答

for(star = 1; star <=4; star++){
    for(star2 = 1; star2 <=3; star2++){  
        document.write("★")
    }
    
    document.write("<br>")
}




//問６　回答


for(star = 1; star <=3; star++){
    for(star2 = 1; star2 <=3; star2++){  
        if(star2 % 2 == 0){
            document.write("☆");
        }else{
            document.write("★");
        }
        
    }
    
    document.write("<br>");
}


// 問７　回答


for(star = 1; star <=4; star++){
    for(star2 = 1; star2 <=5; star2++){  
        if(star2 % 2 == 0){
            document.write("☆");
        }else{
            document.write("★");
        }
        
    }
    
    document.write("<br>");
}

*/

//問８　回答


for(star = 1; star <=5; star++){
    for(star2 = 1; star2 <= star; star2++){    
    document.write("★");}
    
    document.write("<br>");
}


// 変数を宣言する際はきちんとvarを使う　あと式の終わりには；を忘れずに


























