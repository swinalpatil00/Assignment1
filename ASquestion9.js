function difference(no1,no2) {
  
  var x1= num(no1,true);
  var x2= num(no2,true);
  
 var a=[], opt=[];
  for(var i=0;i< x1.length;i++)
    a[x1[i]]=false;
  for(i=0;i< x2.length;i++)
  if(a[x2[i]]===true) 
     { delete a[x2[i]];}
    else a[x2[i]]=true;
  for(var k in a)
    opt.push(k);
  return opt;   
  }

var num = function(a,z,y){
  if(!y){ y = [];}
if (z) {
  return y.concat.apply(y,a);
  }  
   for(i=0; i< a.length; i++){
        if(a[i].constructor == Array){
            num(a[i],z,y);
        }else{
            y.push(a[i]);
        }
    }
    return y;
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
