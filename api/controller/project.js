// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// const db = getFirestore();


exports.getData = async function(req,res) {
  var firstProject = {
    id: '',
    name: 'My first project',
    data: {
      avatar: 'https://milangladis.com/images/milangladis.png',
      image: 'https://milangladis.com/images/3Dcomments@2x.png',
      title: 'Blog post title',
      perex: 'Automatise your design process and render images with different data unlimited times without manual editing.'
    },
    size: {
      width: '360px',
      height: '640px'
    },
    children: [
      {
        id: '234132',
        name: 'Background Image',
        type: 'image',
        data: {
          image: 'https://dgtzuqphqg23d.cloudfront.net/KIEYq_tzqXFc4KRPWI5r0GsLeCN5Xu4f1nH-ayoPuXs-1536x2048.jpg'
        },
        style: {
          top: '0px',
          right: '0px',
          left: '0px',
          bottom: '0px',
          zIndex: 0,
          position: 'absolute',
          // background: '#cccccc',
          background: 'url(https://dgtzuqphqg23d.cloudfront.net/KIEYq_tzqXFc4KRPWI5r0GsLeCN5Xu4f1nH-ayoPuXs-1536x2048.jpg)',
          backgroundSize: 'cover'
        }
      }, {
        id: '2323492',
        name: 'Floating element',
        data: {
          text: 'testing character',
        },
        style: {
          top: 40,
          left: 50,
          width: 100,
          height: 200,
          zIndex: 1,
          background: '#555',
          color: 'white',
          position: 'absolute',
          borderRadius: '4px',
          padding: '16px'
        }
      }, {
        id: '234234',
        name: 'stats',
        style: {
          bottom: '50px',
          left: '50px',
          right: '50px',
          display: 'flex',
          position: 'absolute',
          display: 'flex',
          zIndex: '100',
          gap: '16px'
        },
        children: [
          {
            id: '1234899213',
            name: 'distance',
            data: {
              text: '10km',
            },
            style: {
              background: 'blue',
              flex: '1',
              color: '#fff',
              borderRadius: '4px',
              textAlign: 'center'
            },
            children: [
              {
                id: '2823147',
                name: 'title of "Wuaw, it works 🤯"',
                data: {
                  text: 'wuaw, it works 🤯',
                },
                style: {
                  background: 'white',
                  color: 'black',
                  position: 'absolute',
                  top: '-45px',
                  left: '0',
                  right: '0',
                  whiteSpace: 'nowrap',
                  borderRadius: '4px',
                  padding: '4px 16px'
                }
              }
            ]
          },
          {
            id: '234129383',
            name: 'pace',
            data: {
              text: '5:00',
            },
            style: {
              background: 'yellow',
              flex: '1',
              color: '#black',
              borderRadius: '4px',
              textAlign: 'center'
            }
          },
          {
            id: '91234783',
            name: 'time',
            data: {
              text: '60:00',
            },
            style: {
              background: 'green',
              flex: '1',
              color: '#fff',
              borderRadius: '4px',
              textAlign: 'center'
            }
          }
        ],
      }
    ]
  }

  // var save = await db.collection('projects').doc().set(firstProject);
  res.json(firstProject)

}
