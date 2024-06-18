
//     let api = new XMLHttpRequest();
//     console.log(api);
//     api.open("get","https://jsonplaceholder.typicode.com/posts");
//     api.send()
// api.onreadystatechange = function() {
//     if(this.readyState === 4 && this.status === 200) {
//       let data = JSON.parse(this.responseText);
//       console.log(data);
//      }
      
//     }


    

// let promise = new Promise((resolved,rejected)=>{
//     let control = false;
//     if(control) {
//         resolved("good");
//     }
//     else {
//         rejected(Error("not good"))
//     }

// }).then((resolveValue)=>{console.log("good" ,resolveValue )},
// (rejectValue)=>{console.log("not good",rejectValue);})
    
// console.log(promise);





fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
   return res.json();
}).then((data)=>{
    console.log(data[0].title);
})

.catch((rej)=>{
    console.log(rej);
})

console.log("mahmoflkbf"); 
