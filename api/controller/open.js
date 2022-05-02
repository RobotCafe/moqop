const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();


exports.metrics = async function(req, res) {
  const userRef = db.collection('users');
  const snapshot = await userRef.get();
  var data = [`2022-04-21T00:00:00.000Z`]
  snapshot.forEach(doc => {
    data.push(new Date(doc.data().moqop.created_at))
    // console.log(doc.id, '=>', doc.data().moqop.created_at);
    console.log(new Date(doc.data().moqop.created_at));
  });
  data = data.sort((date1, date2) => date1 - date2);

  res.json(data);
}
