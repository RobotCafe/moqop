
// export async function getStaticProps(context) {
//   const entries = await db.collection('access_tokens').get()
//   let [{access_token, refresh_token}] = entries.docs.map(entry => entry.data())
//   const resToken = await fetch(
//     `https://www.strava.com/api/v3/oauth/token?client_id=${process.env.CLIENT_ID_STRAVA}&client_secret=${process.env.CLIENT_SECRET_STRAVA}&grant_type=refresh_token&refresh_token=${refresh_token}`,
//     {
//       method: 'POST',
//     },
//   )
//   const {
//     access_token: newToken,
//     refresh_token: newRefreshToken,
//   } = await resToken.json()
//   const resStats = await fetch(
//     'https://www.strava.com/api/v3/athletes/40229513/stats',
//     {
//       headers: {
//         Authorization: `Bearer ${newToken}`,
//       },
//     },
//   )
//   db.collection('access_tokens')
//     .doc('CSXyda8OfK75Aw0vtbtZ')
//     .update({
//       access_token: newToken,
//       refresh_token: newRefreshToken,
//     })

//   const stravaStats = await resStats.json()

//   return {
//     props: {
//       stravaStats,
//     },
//     revalidate: 86400,
//   }
// }