           var start=new Date().getTime();
           var times=[];
            var avg=0;
            var bTime=0;
           var countDown=0;
           var timeTaken=0;
           function makeShapeAppear(){
               var left=(document.getElementById("gamePanel").offsetWidth)-150;
               var top=(document.getElementById("gamePanel").offsetHeight)-150;
                top=Math.random()*top;
                left=Math.random()*left;
               var width=(Math.random()*100)+50;
               if(Math.random()>0.5)
                   {
                       document.getElementById("shape").style.borderRadius="50%";
                   }
               else{
                   document.getElementById("shape").style.borderRadius="0";
               }
               document.getElementById("shape").style.width=width+"px";
               document.getElementById("shape").style.height=width+"px";
               document.getElementById("shape").style.top=top+"px";
               document.getElementById("shape").style.left=left+"px";
               document.getElementById("shape").style.display="block";
               document.getElementById("shape").style.backgroundColor=rndmClr();
               start=new Date().getTime();
           }
           
           function appearTime(){
               setTimeout(makeShapeAppear,Math.random()*3000);
               document.getElementById("start").style.display="none";
               document.getElementById("stop").style.display="inline";
                document.getElementById("head").style.display="none";
           }
           document.getElementById("start").onclick=overlayVisible;
           
            document.getElementById("shape").onclick=function(){
                document.getElementById("shape").style.display="none";
                var end=new Date().getTime();
                timeTaken=(end-start)/1000;
                document.getElementById("time").innerHTML=timeTaken+"s";
                times.push(timeTaken);
                document.getElementById("avgtime").innerHTML=avgTime()+"s";
                bTime=Math.min.apply(Math,times);
                document.getElementById("btime").innerHTML=bTime+"s";
                appearTime();
            }
            document.getElementById("stop").onclick=function(){
                document.getElementById("shape").style.display="none"
                document.getElementById("start").style.display="inline";
                document.getElementById("stop").style.display="none";
                document.getElementById("gamePanel").style.display="none";
                if(bTime>0.4)
                    {
                        alert("Your Best Time was: "+bTime+"\nAverage time was:"+avg.toFixed(4)+"\nYou are slow!!!");
                    }
                else{
                    alert("Your Best Time was: "+bTime+"\nAverage time was:"+avg.toFixed(4)+"\Itti baar m to koi b kr leta.")
                }
                times=[];
                timeTaken=0;
                bTime=0;
                avg=0;
                document.getElementById("time").innerHTML=timeTaken+"s";
                document.getElementById("avgtime").innerHTML=avg+"s";
                document.getElementById("btime").innerHTML=bTime+"s";
                
            }
            function rndmClr(){
                var r=Math.floor(Math.random()*130)+124;
                var g=Math.floor(Math.random()*130)+70;
                var b=Math.floor(Math.random()*130)+70;
               var clrCode="rgb("+r+","+g+","+b+")";
               return clrCode;
           }
           function avgTime()
           {
               for(var i=0;i<times.length;i++){
                   avg=avg+times[i];
               }
               return avg.toFixed(4);
           }
           function timer()
           {
               setTimeout(counter,1000);
           }
           function counter()
           {
               if(countDown<4)
                   {
                       document.getElementById("count-down-style").innerHTML=countDown;
                       countDown++;
                       timer();  
                   }
               else if(countDown==4)
                   {
                       document.getElementById("count-down-style").innerHTML="GO!";
                       countDown++;
                       timer();  
                   }
               else
               {
                   
                    document.getElementById("overlay").style.display="none";
                   countDown=0;
                   appearTime();
               }
           }
           function overlayVisible()
           {
               document.getElementById("overlay").style.display="block";
               document.getElementById("gamePanel").style.display="block";
               timer();
           }
           function setheight()
           {
               var bheight=document.getElementById("bod").offsetHeight;
               var rowheight=document.getElementById("row").offsetHeight;
               var gamePanel=bheight-rowheight;
               document.getElementById("gamePanel").style.height=gamePanel+"px";
           }
            setheight(),
        /*Remove the overlay2 and put the set height outside the onload event*/
            document.getElementById("bod").onload=function(){
                document.getElementById("overlay2").style.display="block";
                setTimeout(function(){document.getElementById("overlay2").style.display="none";},10000);
            }
           