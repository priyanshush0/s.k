//---------map

// arr=[10,2,30,4,5];
// let newarr= arr.map((num,index,arr)=>{
    
//     if(num%2==0){
//        return num*5 
//     }
//     else{
//         return num;
//     }
    
// })
// console.log(arr);
// console.log(newarr);


//---------------fitler
// arr=[1,2,3,4,5];
// const evenNums= arr.filter((num,index)=>{
//     return num %2 == 0;
// })
// console.log(evenNums);


// //------reduce
// let sum=arr.reduce((acc,num,index)=>{
//     return acc+num;
// },0)
// console.log(sum);

  let str1='this is some string';
  let str2= 'I.S.R.O';
  let str3= '    suraj shirvastav';
  
  console.log(str1.split(''));
  console.log(str1.split(' '));


  const profile= 'suraj.jpg';
  let arr=profile.split('.')
  console.log(arr)

 function upload(jpg,jpge) {
    if (arr[1]==='jpg' ||arr==='jpge' ){
        console.log('file uploded');
    }
    else{
        console.log("file can't be uploaded");
    }
    // upload()
 }
 upload();


