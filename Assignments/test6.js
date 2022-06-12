// const skills = [
//     { skill: 'css', user: 'Bill' },
//     { skill: 'javascript', user: 'Chad' },
//     { skill: 'javascript', user: 'Bill' },
//     { skill: 'css', user: 'Sue' },
//     { skill: 'javascript', user: 'Sue' },
//     { skill: 'html', user: 'Sue' }
//   ];

//   // Output
//   [
//     { skill: 'css', users: ['Bill', 'Sue'], count: 2 },
//     { skill: 'javascript', users: ['Chad', 'Bill', 'Sue'], count: 3 },
//     { skill: 'html', users: ['Sue'], count: 1 },

//   ]

//   const countSkills=(arr)=>{
//   let map={};
//    for(let i=0;i<arr.length;i++){
//      if(!map[arr[i].skill]){
//       map[arr[i].skill] = {skill:arr[i].skill,users:[arr[i].user],count:1};
//      }else{
//       let Obj = map[arr[i].skill];
//       Obj.users.push(arr[i].user);
//       Obj.count += 1;
//      }
//    }
//    return Object.values(map);
//   }

//   console.log(countSkills(skills));

//   Emitter

//   const e = new Emitter()
//   const sb1 = e.subscribe('event1', callback1);
//   const sb2 = e.subscribe('event1', callback2);

//   const sb3 = e.subscribe('event2', callback3);
//   const sb4 = e.subscribe('event2', callback4);

//   btn.addEventListener('click', function() {
//     e.emit('event1')
//   });

//sb1.release();

function Emitter() {
  let cache = {};
  this.subscribe = function (eventName, fn) {
    if (!cache[eventName]) {
      cache[eventName] = [fn];
    } else {
      cache[eventName].push(fn); //
    }
    return {
      release: () => {
        cache[eventName] = cache[eventName].filter((item) => fn !== item);
        return true;
      },
    };
  };
  this.emit = function (eventName) {
    cache[eventName].forEach((fn) => fn());
  };
}

let t = new Emitter();

let r = t.subscribe("event1", function () {
  console.log("12");
});
let n = t.subscribe("event1", function () {
  console.log("123");
});

console.log(t.emit("event1"));
console.log(r.release());
console.log(t.emit("event1"));
