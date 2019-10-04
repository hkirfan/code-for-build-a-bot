export default function (element) {
  element.style.position = 'absolute';
  element.style.bottom = '5px';
  element.style.right = '5px';
}
// above syntax is for both bind and update hooks
// , To use with bind lifecycle hook
//   bind: (element) => {
//     element.style.position = 'absolute';
//     element.style.bottom = '5px';
//     element.style.right = '5px';
//   },
// };
// likewise update, inserted, componentUpdate and unbind can be handled
