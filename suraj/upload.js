// function download(url,download){
//     console.log('file start diwnload..')
//     setTimeout(()=>{
//         let path=url.splite('.').pop();
//         download.path;
//     })
// }

function DownloadFile(url,download)
{
    console.log('file start downloading..... ')
    setTimeout(()=>{
        let path=url.split('/').pop();
        download(path);
    },2000);
}

function compressFile(path,compress)
{
    console.log('file start compress');
    setTimeout(()=>{
        const comp=path.split('.')[0]+'.Zip';
        compress(comp);
    },2000);
}
function uploadfile(comp,upload){
    console.log('file start upload');
    setTimeout(()=>{
        let upl='https:LocalStorage'+comp;
        upload(upl);
    },2000)
}

DownloadFile('https://www.facebook.com/profile.jpg',function(path){
    console.log(`file downloaded successfully ${path}`);
        compressFile(path,function(comp){
        console.log(`file compressed successfully....${comp}`);
        uploadfile(comp,function(upl){
        console.log(`file upload successsful...
        ${upl}`);
        })
    })

})

// ------Promise

new Promise(function(resolve,reject){
    resolve()

})


// ---------math

// -----randommath

// let randommath=Math.floor(Math.random()*10);
// console.log(randommath);

let x= new Promise(function(resolve,reject){
    let num=Math.floor(Math.random()*10);
    console.log(num);
    if(num%2===0){
        resolve();
    }
    else{
        reject();
    }
})

x
.then(()=>{
    console.log("successful");
})
.catch(()=>{
    console.log("error");
})

