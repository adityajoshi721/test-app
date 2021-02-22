
let i=0;
let count=document.createElement('p');
count.innerHTML=`${i}`;
document.getElementById('heading').appendChild(count);
let inc=document.querySelector('.increase');
let dec=document.querySelector('.decrease');
let z=document.querySelector('.zero');
inc.addEventListener("click",function(){
    i++;
    // let count=document.createElement('p');
    count.innerHTML=`${i}`;
    if(i<0)
    {
        document.getElementById('heading').appendChild(count).style.color='red';
    }
    else if(i==0)
    {
        document.getElementById('heading').appendChild(count).style.color='white';
    }
    else
    {
        document.getElementById('heading').appendChild(count).style.color='#03C03C';
    }
});
dec.addEventListener("click",function(){
    i--;
    // let count=document.createElement('p');
    count.innerHTML=`${i}`;
    if(i<0)
    {
        document.getElementById('heading').appendChild(count).style.color='red';
    }
    else if(i==0)
    {
        document.getElementById('heading').appendChild(count).style.color='white';
    }
    else
    {
        document.getElementById('heading').appendChild(count).style.color='#03C03C';
    }
});
z.addEventListener("click",function(){
    i=0;
    // let count=document.createElement('p');
    count.innerHTML=`${i}`;
    document.getElementById('heading').appendChild(count).style.color='white';

});