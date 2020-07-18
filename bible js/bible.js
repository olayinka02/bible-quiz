
            function press(){
                var quote=["In the beginning God created heaven and earth...............(Gen 1-1)",
                           "The grace of our Lord jesus christ be with you all...........(Rev 22-21)",
                           "for God so love the world that he giveth his only only son........(john 3-16)",
                           "blessed are the peacemaker for they shall be called children of God.(Matt 5-9)",
                            "Take heed that you do not your alms before men................(Matt 6-1)",
                              "jesus wept (john 6-35)",
                              "I commend to phebe her sister, which is a servant of the church......(Roman 16-1)",
                              "stand fast therefore in the liberty wherewith christ and be not....(Gal 5-1)",
                              "my son forget not my law but let your keep my commandement....... (pro 3-1)",
                              "my son keep your fathers commandement and forsake not the law of your mother(Pov 6-21)",
                              "But the Lord of hosts shall be exalted in judgement........(isiah 5-16)",
                              "Arise and go down to the potter's house and there i will cause you to hear....(jeremiah 18-2)",
                            ] 
                var randomnum=Math.floor(Math.random()*(quote.length));
                document.getElementById('display').innerHTML= '<hr/>'+ quote[randomnum] +'<hr/>';
                setTimeout(press,2000);

            }
            function next(){
                 var question1=document.myForm0.Name1.value;
               if(question1=="Roman 8-6"){
                 document.getElementById('display4').innerHTML=("correct");
                return false;
                }else{
                 document.getElementById('display4').innerHTML=("wrong");
                  return false;
                }};

                function next1(){
                 var question2=document.myForm1.Name2.value;
               if(question2==="King Jesse"||question2==="Jesse"){
                document.getElementById('display41').innerHTML=("correct");
                return false;
                }else{
                 document.getElementById('display41').innerHTML=("wrong");
                  return false;
                }};

                function next2(){
                 var question3=document.myForm2.Name3.value;
               if(question3=="Psalm"){
                 document.getElementById('display42').innerHTML=("correct");
                return false;
                }else{
                 document.getElementById('display42').innerHTML=("wrong");
                  return false;
                }};

                function next3(){
                 var question4=document.myForm3.Name4.value;
               if(question4=="Earth"){
                 document.getElementById('display43').innerHTML=("correct");
                return false;
                }else{
                 document.getElementById('display43').innerHTML=("wrong");
                  return false;
                }};

                function next4(){
                 var question5=document.myForm4.Name5.value;
               if(question5=="For God so love the world that he giveth his only son,that who so ever beliveth in him shall not perish but have everlasting life"){
                 document.getElementById('display44').innerHTML=("correct");
                return false;
                }else{
                 document.getElementById('display44').innerHTML=("wrong");
                  return false;
                }};

                function next5(){
                 var question6=document.myForm5.Name6.value;
               if(question6=="Psalm"){
                 document.getElementById('display45').innerHTML=("correct");
                return false;
                }else{
                 document.getElementById('display45').innerHTML=("wrong");
                  return false;
                }};

                function next6(){
                 var question7=document.myForm6.Name7.value;
               if(question7=="Holy spirit"){
                 document.getElementById('display46').innerHTML=("correct");
                return false;
                }else{
                 document.getElementById('display46').innerHTML=("wrong");
                  return false;
                }};

                function next7(){
                 var question8=document.myForm7.Name8.value;
               if(question8=="Samson"){
                 document.getElementById('display47').innerHTML=("correct");
                return false;
                }else{
                 document.getElementById('display47').innerHTML=("wrong");
                  return false;
                }};

                
                function next8(){
                 var question9=document.myForm8.Name9.value;
               if(question9=="David"){
                 document.getElementById('display48').innerHTML=("correct");
                return false;
                }else{
                 document.getElementById('display48').innerHTML=("wrong");
                  return false;
                }};

                function next9(){
                 var question10=document.myForm9.Name10.value;
               if(question10=="Third day"||question10=="3rd day"){
                 document.getElementById('display49').innerHTML=("correct");
                return false;
                }else{
                 document.getElementById('display49').innerHTML=("wrong");
                  return false;
                }};

                function next10(){
                 var question11=document.myForm10.Name11.value;
               if(question11=="Revelation"){
                 document.getElementById('display410').innerHTML=("correct");
                return false;
                }else{
                 document.getElementById('display410').innerHTML=("wrong");
                  return false;
                }};

                function nex11(){
                 var question12=document.myForm11.Name12.value;
               if(question12=="Mathew"){
                 document.getElementById('display411').innerHTML=("correct");
                return false;
                }else{
                 document.getElementById('display411').innerHTML=("wrong");
                  return false;
                }};

                function nex12(){
                  var question13=document.myForm12.Name13.value;
                if(question13=="Mathew 7-7"){
                  document.getElementById('display412').innerHTML=("correct");
                 return false;
                 }else{
                  document.getElementById('display412').innerHTML=("wrong");
                   return false;
                 }};

                 function nex13(){
                  var question14=document.myForm13.Name14.value;
                if(question14=="Abraham"){
                  document.getElementById('display413').innerHTML=("correct");
                 return false;
                 }else{
                  document.getElementById('display413').innerHTML=("wrong");
                   return false;
                 }};

                 function nex14(){
                  var question15=document.myForm14.Name15.value;
                if(question15=="Prophecy"){
                  document.getElementById('display414').innerHTML=("correct");
                 return false;
                 }else{
                  document.getElementById('display414').innerHTML=("wrong");
                   return false;
                 }};

                 function nex15(){
                  var question16=document.myForm15.Name16.value;
                if(question16=="Malachi"){
                  document.getElementById('display415').innerHTML=("correct");
                 return false;
                 }else{
                  document.getElementById('display415').innerHTML=("wrong");
                   return false;
                 }};
