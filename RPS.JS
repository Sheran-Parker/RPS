function ComputerPlay(){
    let myArray= ['Rock','Paper', 'Scissors']
    return myArray[Math.floor(Math.random()*myArray.length)];
}
let Yscore = 0;
let Cscore = 0;
const playing = document.querySelector('.score');
play.textContent = 'Your Score: ${score}';
function play(MyHand){
    let myDraw= ['Join me, and together we"ll rule the galaxy','We"re not so different you and I','close but no sigar','equality at its finest','that feeling when both are tops :)','Cool draw Bro'];
    let myWin= ['NOOOOOOO', 'YOU HAVENt HEARD THE LAST OF ME, SPIDERMANNNN','FUCK YOOUUU HE-MAN','whatever, stupid game anyway','*FLIPS SCREEN*',MyHand+'!!!! My one weekness, How did you know????'];
    let MyLoss= ['kneel before me', 'Sucks to suck doenst it?', 'That play was impressively bad','Weakness disgusts me','WOW, youre really bad at this','Your moves are weak', 'My Grandma has better tactics, and she already dead'];
    var Cdial = "I dunno";
    let CompHand = ComputerPlay();
   
    if (MyHand === 'Scissors')
    {
        if (CompHand === 'Scissors')
        {
            let Edraw = myDraw;
            Edraw.push('Oh scissor me baby!!!')
            console.log('You chose ' + MyHand + '. Computer Chose ' + CompHand);
            console.log('Draw');
            Cdial = Edraw[Math.floor(Math.random()*Edraw.length)];
            document.getElementById("Cscore").innerHTML = "Computer Score: " + Cscore;
    document.getElementById("Yscore").innerHTML = "Your Score: " + Yscore;
    document.getElementById("Cdial").innerHTML = "Computer: " + Cdial;
        }
        else if(CompHand === 'Rock')
        {
            console.log('You chose ' + MyHand + '. Computer Chose ' + CompHand);
            console.log('YOU LOSE!!');
            Cdial =  MyLoss[Math.floor(Math.random()*MyLoss.length)];
            Cscore = Cscore + 1;
            document.getElementById("Cscore").innerHTML = "Computer Score: " + Cscore;
    document.getElementById("Yscore").innerHTML = "Your Score: " + Yscore;
    document.getElementById("Cdial").innerHTML = "Computer: " + Cdial;
        }
        else if(CompHand === 'Paper')
        {
            console.log('You chose ' + MyHand + '. Computer Chose ' + CompHand);
            console.log('YOU WIN!!');
            Cdial =  myWin[Math.floor(Math.random()*myWin.length)];
            Yscore = Yscore + 1;
            document.getElementById("Cscore").innerHTML = "Computer Score: " + Cscore;
    document.getElementById("Yscore").innerHTML = "Your Score: " + Yscore;
    document.getElementById("Cdial").innerHTML = "Computer: " + Cdial;
        }
    }
    else if (MyHand === 'Paper')
    {
        if (CompHand === 'Paper')
        {
            console.log('You chose ' + MyHand + '. Computer Chose ' + CompHand);
            console.log('Draw');
            Cdial =  myDraw[Math.floor(Math.random()*myDraw.length)];
            document.getElementById("Cscore").innerHTML = "Computer Score: " + Cscore;
    document.getElementById("Yscore").innerHTML = "Your Score: " + Yscore;
    document.getElementById("Cdial").innerHTML = "Computer: " + Cdial;
        }
        else if(CompHand === 'Scissors')
        {
            console.log('You chose ' + MyHand + '. Computer Chose ' + CompHand);
            console.log('YOU LOSE!!');
            Cdial =  MyLoss[Math.floor(Math.random()*MyLoss.length)];
            Cscore = Cscore + 1;
            document.getElementById("Cscore").innerHTML = "Computer Score: " + Cscore;
    document.getElementById("Yscore").innerHTML = "Your Score: " + Yscore;
    document.getElementById("Cdial").innerHTML = "Computer: " + Cdial;
        }
        else if(CompHand === 'Rock')
        {
            console.log('You chose ' + MyHand + '. Computer Chose ' + CompHand);
            console.log('YOU WIN!!');
            Cdial =  myWin[Math.floor(Math.random()*myWin.length)];
            Yscore = Yscore + 1;
            document.getElementById("Cscore").innerHTML = "Computer Score: " + Cscore;
    document.getElementById("Yscore").innerHTML = "Your Score: " + Yscore;
    document.getElementById("Cdial").innerHTML = "Computer: " + Cdial;
        }
    }
    else if (MyHand === 'Rock')
    {
        if (CompHand === 'Rock')
        {
            console.log('You chose ' + MyHand + '. Computer Chose ' + CompHand);
            console.log('Draw');
            Cdial =  myDraw[Math.floor(Math.random()*myDraw.length)];
            document.getElementById("Cscore").innerHTML = "Computer Score: " + Cscore;
    document.getElementById("Yscore").innerHTML = "Your Score: " + Yscore;
    document.getElementById("Cdial").innerHTML = "Computer: " + Cdial;
        }
        else if(CompHand === 'Paper')
        {
            console.log('You chose ' + MyHand + '. Computer Chose ' + CompHand);
            console.log('YOU LOSE!!');
            Cdial =  MyLoss[Math.floor(Math.random()*MyLoss.length)];
            Cscore = Cscore + 1;
            document.getElementById("Cscore").innerHTML = "Computer Score: " + Cscore;
    document.getElementById("Yscore").innerHTML = "Your Score: " + Yscore;
    document.getElementById("Cdial").innerHTML = "Computer: " + Cdial;
        }
        else if(CompHand === 'Scissors')
        {console.log('You chose ' + MyHand + '. Computer Chose ' + CompHand);
            console.log('YOU WIN!!');
            Cdial =  myWin[Math.floor(Math.random()*myWin.length)];
            Yscore = Yscore + 1;
            document.getElementById("Cscore").innerHTML = "Computer Score: " + Cscore;
    document.getElementById("Yscore").innerHTML = "Your Score: " + Yscore;
    document.getElementById("Cdial").innerHTML = "Computer: " + Cdial;
        }
    }
    else document.write ('play it right you dumbass');
}
