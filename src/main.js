
// let promise = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('я прийшов з кімнати на кухню');
//     },1000)
// })
//
// promise.then((result)=>{
//     console.log(result)
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(result+',дістав їжу з холодильника')
//         },1500);
//     }).then((result2)=>{
//         console.log(result2)
//         return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 resolve(result2+'і зїв цю їжу');
//             },2000)
//         }).then((data)=> console.log(data))
//     })
// })

// const frameworks = ['React', 'Vue', 'Angular'];
//
// const getRandomDelay = () => Math.ceil(Math.random() * 2000);
//
// const createPromise = (framework) => {
//   return new Promise((resolve, reject) => {
//     const delay = getRandomDelay();
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.5;
//       if (shouldResolve) {
//         resolve({ framework, delay });
//       } else {
//         reject({ framework, delay, error: 'Promise error' });
//       }
//     }, delay);
//   });
// };
//
// const promises = frameworks.map(createPromise);
// console.log(promises)
//
// promises.forEach(promise => {
//   promise
//     .then(result => {
//       console.log(`Resolved: ${result.framework} with delay ${result.delay}ms`);
//     })
//     .catch(error => {
//       console.error(`Rejected: ${error.framework} with delay ${error.delay}ms - ${error.error}`);
//     });
// });


// const frameworks = ['React', 'Vue', 'Angular'];
//
// const getRandomDelay = () => Math.ceil(Math.random() * 2000);
//
// const createPromise = (framework) => {
//   return new Promise((resolve, reject) => {
//     const delay = getRandomDelay();
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.5;
//       if (shouldResolve) {
//         resolve({ framework, delay });
//       } else {
//         reject({ framework, delay, error: 'Promise error' });
//       }
//     }, delay);
//   });
// };
//
// const onSuccess = ({ framework, delay }) => {
//   console.log(`✅ ${framework} won with ${delay} ms`);
// };
//
// const onError = ({ framework, delay, error }) => {
//   console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);
// };
//
// const promises = frameworks.map(createPromise);
//
// Promise.race(promises)
//   .then(onSuccess)
//   .catch(onError);




// const frameworks = ['React', 'Vue', 'Angular'];
//
// const getRandomDelay = () => Math.ceil(Math.random() * 2000);
//
// const createPromise = (framework) => {
//   return new Promise((resolve, reject) => {
//     const delay = getRandomDelay();
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.5;
//       if (shouldResolve) {
//         resolve({ framework, delay });
//       } else {
//         reject({ framework, delay, error: 'Promise error' });
//       }
//     }, delay);
//   });
// };
//
// const onSuccess = ({ framework, delay }) => {
//   console.log(`✅ ${framework} fulfilled in ${delay} ms`);
// };
//
// const onError = ({ framework, delay, error }) => {
//   console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);
// };
//
// const promises = frameworks.map(createPromise);
//
// Promise.all(promises)
//   .then((results) => {
//     results.forEach(onSuccess);
//   })
//   .catch((error) => {
//     onError(error);
//   });










// const frameworks = ['React', 'Vue', 'Angular'];
//
// const getRandomDelay = () => Math.ceil(Math.random() * 2000);
//
// const createPromise = (framework) => {
//   return new Promise((resolve, reject) => {
//     const delay = getRandomDelay();
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.5;
//       if (shouldResolve) {
//         resolve({ framework, delay });
//       } else {
//         reject({ framework, delay, error: 'Promise error' });
//       }
//     }, delay);
//   });
// };
//
// const onSuccess = ({ framework, delay }) => {
//   console.log(`✅ ${framework} won with ${delay} ms`);
// };
// const OnError = ({ framework, delay, error }) => {
//   console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);
// };
//
//
// const promises = frameworks.map(createPromise);
//
// Promise.any(promises)
//   .then(onSuccess)
//   .catch((error)=>{
//     error.errors.forEach(OnError)
//   });
