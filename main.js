score1=0;
score2=0;
name1=;
name2=;
function update()
{
 name1=document.getElementById("i1").value;
 name2=document.getElementById("i2").value;
 localStorage.setItem("name1",name1);
 localStorage.setItem("name2",name2);
 console.log("registered"+name1+name2);
};
