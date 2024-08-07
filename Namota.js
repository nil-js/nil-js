

let namotaGhor = [];

 function NamotaWriter(u){   
    for (let num=1; num<11; num++){
        namotaGhor.push(u+' x '+num+' = '+u*num);
    }
 }
 NamotaWriter(prompt('Kon ghorer namota chao??'));
 document.getElementById('p1').innerHTML=namotaGhor.join('<br>');

 
 
 //document.getElementById('p1').innerHTML=(u+' x '+num+' = '+u*num);