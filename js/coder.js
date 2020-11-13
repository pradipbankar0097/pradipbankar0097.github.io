
         let flag = true;
       function content()
       {
             let el=document.getElementById('java');
                el.innerHTML='python';
         let fs = require('fs');
fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
         let btn = document.getElementById('aside');
         let previous = btn.innerHTML;
         if(flag)
         {btn.innerHTML='<img src="pic.jpg" width=300px>';
            flag=!flag;
         }
         else
         {btn.innerHTML='this is aside';
            flag=!flag;
            
         }
      /* if(btn.style.display!='none')
               {btn.style.display='none';}
               else
               {btn.style.display='block';}
        */  
       }
       
