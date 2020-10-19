
         let flag = true;
       function content()
       {
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
       
