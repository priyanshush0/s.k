let data =[{l:8,b:9},{l:12,b:7},{l:7,b:11}];

const area=(l,b)=>l*b;
const parameter=(l,b)=>2*(l+b);

let areaRes=[];
let parameterRes=[];

// for (let rect of data){
//     let ans=area(rect.l,rect.b);
//     areaRes.push(ans);

// }

// for (let rect of data){
//     let ans=parameter(rect.l,rect.b);
//     parameterRes.push(ans);

// }
// let pythagoras=(l,b)=>Math.floor(Math.sqrt(l*l+b*b));
let pythagoras=(l,b)=>Math.sqrt(l*l+b*b);

let pythagorasres=[];

function calculate( data,logic){
    let result=[];
    for(let rect of data){
        let ans =logic(rect.l,rect.b);
        result.push(ans);
    }
    return document.getElementById('qq').innerHTML=result;

}

areaRes=calculate(data ,area);
parameterRes=calculate(data ,parameter);
pythagorasres=calculate(data ,pythagoras);
console.log(areaRes);

console.log(parameterRes);
console.log(pythagorasres);
// console.log(this);

//this function---------

// fun=()=>{
//     return this;
// }

// console.log(fun());


// let obj={
//     name:'suraj',
//     id:13133,
// };

// console.log(obj);

// const person1={
//     name:'suraj',
//     surname:'shrivastav',
//     sayname:function(city,country)
//     {
//         return `${this.name} ${this.surname} ${city} ${country}`;
//     }
// };

// const person2={
//     name:'bittoo',
//     surname:'kumar',
// };

// console.log(person1.sayname.call(person2,'noida'));

// const p2=person1.sayname.bind(person2,'delhi','bhart');
// console.log(p2());
function student(name,age,rollno){
    this.name=name;
    this.age=age;
    this.rollno=rollno;

}
// console.log(student.call(student,'suraj',25,245));

// let s2 = new student('ram',12,5225);
// console.log(s2);

let obj={
    name:'suraj',
    age:24,
    isadult:true,
};

const p1=Object.create(obj);

console.log(p1);

const p2=Object.create(p1);
console.log(p2.name);
console.log(obj.__proto__===Object.prototype);


// let stu2=new  student('suraj',25,245);
let isbittto=false;
console.log(typeof(isbittto));
console.log(isbittto.__proto__===Boolean.prototype);
console.log(Boolean.prototype.__proto__===Object.prototype);

// -------class ---

class person{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
};
const p= new person('suraj',21);
console.log(p);

class car{
    constructor(name,color,price){
        this.name=name;
        this.color=color;
        this.price=price;
       
    }
    
    
// getter--------
get getname(){
    return this.name;
}
// setter
set setprice(Newprice){
    
    if (Newprice>30000000) {
         this.price=Newprice;
    
    }
    else{
    return this.Newprice;
    }
}

};

const cars= new car('Royal Royce','Silver',80000000);
console.log(cars);
console.log(cars.setprice=9999992000);
console.log(cars);


class racingcar extends car{
    constructor(name,color,price,topspeed){
        super(name,color,price);
        this.topspeed=topspeed;
    }

}

const cars2= new racingcar('Porsche','white',1500000,220);
console.log(cars2);


let collage={
    name:'SAITM',
    city:'delhi',


}
let{name,city} = collage
console.log(name);
console.log(city);

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[...arr1,...arr2];
// console.log(arr3);

// function imagefile(url,image){
//     console.log('start downloading');
//     setTimeout(()=>{
//         let Path =url.split('/').pop();
//         image(Path);
//     },2000);

    
// }
// function compressfile(Path,compress){
//     console.log('start compressing');
//     setTimeout(()=>{
//     let  comp=Path.split('.')[0]+'Zip';
//     compress(comp);
//     },2000);
// }
// imagefile('https://www.facebook.com/profile.jpg',function(Path){
//     console.log(`imagefile downloaded successful 
//     ${Path}`);

//     compressfile(Path,function(comp){
//         console.log(`file compressed
//         successfully... ${comp}`);
//     });
// });


function downloadfile(url){
    return new Promise(function(resolve,rejecy){
        console.log('file is start downloading...')
        setTimeout(()=>{
            const path=url.split('/').pop();
            resolve(path);

        },2000);
    })
}

function compressfile(path){
    return new Promise(function(resolve,reject){
        console.log('file is start compressing');
        setTimeout(()=>{
            const copm=path.split('.')[0]+'Zip';
            resolve(copm);
        },2000)
    })

}

function uploadfile(copm){
    return new Promise(function(resolve,reject){
        console.log('file is start uoloading');
        setTimeout(()=>{
            const upl='https://LocalStorage'+copm;

            resolve(upl);
        },2000)
    })

}

downloadfile('https://www.facebook.com/profile.jpg')
// .then((path)=>{
//     console.log(`file is downloaded successfully ...${path}`);
//     compressfile(path)
//     .then((copm)=>{
//       console.log(`file is compress successfully..${copm}`);
//         uploadfile(copm)
//         .then((upl)=>{
//             console.log(`file is uploaded successfully ...${upl}`);
//             console.log('Everrything is done');
//         })
//     })    
// })

.then(compressfile)
.then(uploadfile)
.then((upl)=>{
    console.log(`file is uploaded successfullu ...${upl}`);
    console.log('Everything is done ');
})