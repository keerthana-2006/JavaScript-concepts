// console.log("Hello World!");
// console.log("Welcome to JavaScript");
// let firstName="Oruganti";
// let lastName="Keerthana";

// console.log(`My name is ${firstName+lastName}.Very nice to meet you.`);

// let color="green";
// if(color==='red'){
//     console.log("Stop!");
// }
// if(color==='yellow')
// {
//     console.log('slow down');
// }
// if(color==='green')
// {
//     console.log('Go');
// }

// let size='S';
// if(size==='XL')
// {
//     console.log(`Price is Rs.250`);
// }
// else if(size==='L')
// {
//     console.log(`Price is Rs.200`);
// }
// else if(size==='M')
// {
//     console.log(`Price is Rs.100`);
// }
// else if(size==='S')
// {
//     console.log(`Price is Rs.50`);
// }


// let str="amsterdam";
// if((str[0]==='a')&& (str.length>3))
// {
//     console.log("Good string");
// }
// else{
//     console.log("Not a good string");
// }

// let day=4;
// switch(day){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Give valid number between 1 to 7');
// }

//Assignment 2
//question1
// let num=12;
// if((num%10)==0)
// {
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

//Question2
// let myName=prompt('Enter your name');
// let age=prompt("Enter your age");
// alert(`${myName} is ${age} years old`);
// console.log(`${myName} is ${age} years old`);

//Question3
// let quarter=1;
// switch(quarter)
// {
//     case 1:
//         console.log("January,February,March");
//         break;
//     case 2:
//         console.log("April,May,June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
//     default:
//         console.warn("Enter valid quarter");
// }

//Question4
// let str="accountable";
// if(((str[0]==='a')||(str[0]==='A'))&&(str.length>5))
// {
//     console.log("golden string");
// }
// else{
//     console.log('not a golden string');
// }


//Question5
// let a=10;
// let b=20;
// let c=13;
// if((a>=b) && (a>=c))
// {
// console.log('a is larger');
// }
// else if((b>=a)&&(b>=c))
// {
//   console.log('b is larger');  
// }
// else{
//     console.log('c is larger');
// }

//Question6
// let num1=586;
// let num2=957;
// let lastDigit1=num1%10;
// let lastDigit2=num2%10;
// if(lastDigit1===lastDigit2)
// {
//     console.log("same");
// }
// else{
//     console.log("not same");
// }

//Assignment 3
//Question1
// let arr=[7,9,0,-2];
// let n=3;
// console.log(arr.slice(0,n));

//question2
// let arr=[7,9,0,-2];
// let n=3;
// console.log(arr.slice(-n));

//question3
// let str="";
// let len=str.length;
// if(len===0)
// {
//     console.log("blank");
// }
// else{
//     console.log("not blank");
// }

//question4
// let str='apPle';
// let ch='P'
// // let index=str.indexOf(ch);
// let lower=ch.toLowerCase();
// if(ch==lower)
// {
//     console.log('lower');
// }
// else{
//     console.log('upper');
// }

//question5
// let str="   hello ";
// console.log(str.trim());

//question6
// let arr=['a','b','c','d','e'];
// console.log(arr.includes('c'));

// //print odd numbers
// for(let i=1;i<=15;i=i+2)
// {
//     if(i%2!=0)
//     {
//         console.log(i);
//     }
// }

//multiplication table of 5
// for(let i=1;i<=10;i++)
// {
//     console.log(`5*${i}=${i*5}`);
// }
// let n=prompt("Enter a number");
// n=parseInt(n);
// for(let i=1;i<=10;i++)
// {
//     console.log(`${n}*${i}=${i*n}`);
// }

//favourite movie  guess
// let favMovie='avatar';
// let guess=prompt("Guess the movie:");
// while((guess!=favMovie)&&(guess!='exit'))
// {
//     guess=prompt("Guess or exit");
    
// }

// if(guess==favMovie)
// {   
//     console.log('you guessed it correctly.'); 
// }
// else{
//     console.log("you're exited.");
// }

//Assignment 4

//question1
// let arr=[1,2,3,4,5,6,2,3];
// console.log(arr);
// let num=prompt("Enter the number to delete");
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==num)
//     {
//         arr.splice(i,1);
//     }
// }

// console.log(arr);

//question2
// let number=prompt("Enter a number");
//number=parseInt(number,10);
// let count=0;
// let copy=number;
// while(copy>0)
// {
//     count++;copy=Math.floor(copy/10);

// }
// console.log(count);

//question3
// let num=prompt("Enter a number:");
// num=parseInt(num,10);
// let sum=0;
// while(num>0)
// {
//     sum=sum+(num % 10);
//     num=Math.floor(num/10);
// }
// console.log(sum);

//question4
// let number=prompt("Enter a number:");
// number=parseInt(number,10);
// let fact=1;
// for(let i=1;i<=number;i++)
// {
//     fact=fact*i;
// }
// console.log(fact);

//question5
// let arr=[10,56,478,2,69];

// let max=0;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         max=arr[i];
//     }
// }
// console.log('largest no:',max);


//To Do List

let todo=[];
let request=prompt("Enter your request:");
while(true)
{
    if(request=='quit')
    {
        console.log('quitting the app');
        break;
    }

    if(request=='list')
    {
        console.log('-----------------------------');
        for(tasks of todo)
        {
            console.log(tasks);
        }
         console.log('-----------------------------');
    }
    else if(request=='add')
    {
        let task=prompt("Enter the task:");
        todo.push(task);
    }
    else if(request=='delete')
    {
        let  index=prompt("Enter the task index to delete:");
        index=parseInt(index,10);
        todo.splice(index,1);
    }
    else{
        console.log('Wrong request,Enter correct one:');
    }
    request=prompt("Enter your request:");
}






