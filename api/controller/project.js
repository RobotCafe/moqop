// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// const db = getFirestore();


exports.getData = async function(req,res) {
  var firstProject = {
    'id' : '',
    'name' : 'My first project',
    'data': {
      'avatar': 'https://milangladis.com/images/milangladis.png',
      'image': 'https://milangladis.com/images/3Dcomments@2x.png',
      'title': 'Blog post title',
      'perex': 'Automatise your design process and render images with different data unlimited times without manual editing.'
    },
    'size': {
      'width': '1080px',
      'height': '1920px'
    },
    'objects': [
      {
        'id': '234132',
        'name': 'Background Image',
        'type': 'image',
        'src': '{data.image}',
        'style': {
          't': '0px',
          'r': '0px',
          'l': '0px',
          'b': '0px',
          'z': 0,
          'position': 'absolute',
          'bg': 'blue',
        }
      }, {
        'id': '234132',
        'name': 'Floating element',
        'text': 'testing character',
        'style': {
          't': 40,
          'l': 50,
          'w': 100,
          'h': 200,
          'z': 1,
          'bg': 'grey',
          'position': 'absolute'
        }
      }
    ]
  }

  // var save = await db.collection('projects').doc().set(firstProject);
  res.json(firstProject)

}
