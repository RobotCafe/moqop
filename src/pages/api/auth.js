// export default async function handler(req, res) {

//   console.log('asdf')
//   const options = {
//     clientId: 80214,
//     clientSecret: '25b8bfd5d74d1ed03eee1acb88f3ff664fdcc346',
//     scope: 'write',
//     httpPort: 3001
//   };
//   const callback = (error, accessToken) => {
//     console.log('asdf')
//     if (error) {
//       console.error('Failed: ', error);
//       res.json(error);
//     } else {
//       console.log('Access token: ', accessToken);
//       res.json(accessToken);
//     }
//     res('asdf');
//   };
//   authorize(options, callback);

// }