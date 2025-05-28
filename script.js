function dicee(){
    
        
        player1=Math.floor(Math.random()*6)+1;
        
        player2= Math.floor(Math.random()*6)+1;

        if (player1==1)
            document.getElementsByTagName("img")[0].setAttribute("src","./dice1.png");
        else if (player1==2)
            document.getElementsByTagName("img")[0].setAttribute("src","./dice2.png");
        else if (player1==3)
            document.getElementsByTagName("img")[0].setAttribute("src","./dice3.png");
        else if (player1==4)
            document.getElementsByTagName("img")[0].setAttribute("src","./dice4.png");
        else if (player1==5)
            document.getElementsByTagName("img")[0].setAttribute("src","./dice5.png");
        else
            document.getElementsByTagName("img")[0].setAttribute("src","./dice6.png");

        
        if (player2==1)
            document.getElementsByTagName("img")[1].setAttribute("src","./dice1.png");
        else if (player2==2)
            document.getElementsByTagName("img")[1].setAttribute("src","./dice2.png");
        else if (player2==3)
            document.getElementsByTagName("img")[1].setAttribute("src","./dice3.png");
        else if (player2==4)
            document.getElementsByTagName("img")[1].setAttribute("src","./dice4.png");
        else if (player2==5)
            document.getElementsByTagName("img")[1].setAttribute("src","./dice5.png");
        else
            document.getElementsByTagName("img")[1].setAttribute("src","./dice6.png");


        if (player1>player2)
            document.querySelector("h1").innerHTML=" ✅ Player1 wins";
        else if (player1<player2)
            document.querySelector("h1").innerHTML="Player2 wins ✅";
        else document.querySelector("h1").innerHTML="DRAW 👩‍❤️‍👩 try again";
        
    }

dicee();        
        
    