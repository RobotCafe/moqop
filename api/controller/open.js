const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();


exports.usersCount = async function(req, res) {
  const userRef = db.collection('users');
  const snapshot = await userRef.get();
  var data = [`2022-04-21T00:00:00.000Z`]
  snapshot.forEach(doc => {
    data.push(new Date(doc.data().moqop.created_at))
    // console.log(doc.id, '=>', doc.data().moqop.created_at);
    // console.log(new Date(doc.data().moqop.created_at));
  });
  data = data.sort((date1, date2) => date1 - date2);

  res.json(data);
}

exports.shotsCount = async function(req, res) {
  db.collection('shots').get().then(snap => {
    res.status(200).send({length: 150 + snap.size});
  });

  res.json(data);
}


exports.saveShot = async function(req, res) {
  var shotData = {
    shot: req.body,
    time: new Date().toISOString()
  }
  
  await db.collection('shots').doc().set(shotData);

  // Send webhook request
  var discordUrl = `https://discord.com/api/webhooks/980779489778868284/imqYAQyz82fF-y_FafbOOxjMi66rt7phDy3mxiw7b3QK4nohSSYAAWIpbgebNiAH-u1N`
  var params = {
    username: "moqop",
    content: `New shot — "${shotData.shot.name}" by ${shotData.shot.athlete.id}: ${shotData.shot.type}: ${shotData.shot.distance}m - ${shotData.shot.moving_time}s`
  }
  fetch(discordUrl, {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
      console.log('Shot saved to firebase');
  })

  res.sendStatus(200);
}