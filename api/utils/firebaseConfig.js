import admin from 'firebase-admin'
// import * as admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "mokop-io",
        "private_key_id": "9d7f7ab84daf0b246d4535ea2b15fc1d5470e324",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCtIV4KvqwD54P6\nVGpeChoZ+INp4B2pOdb6cCCiQNQ0R//qXb1iwGPXkjWhja6suh/yFUFu+FTiE0vX\nT4DkvVKNkPXEv1G+nRPK5apuGr5QBXIqZ+gC+53CvpT89T3bjp/OWlOFsBsOjQRD\nTr5ppcvdPlqKeFZxoyCHJEEJSS88j4dEc346x4efZvsTTUU3AZaStqiFVzmsBnvL\nRk6a9Mx4G+97r+IxNS5aJmr/TEVPvs31mfAZxGXnbjUGURO+SdpOaKxhAsGxKOPa\nmM0SQVI9SMT7m0sJ66Vw7HGbicjrvPHMYPi5ACqn9M241TvDC+ylaaUW98YoOl3c\nMb7hPpDFAgMBAAECggEABNypqVcKXLcpcNhW80YIzoZzGwvKF/9WGe3SL7OR03rD\n9s8Mv62oYCJsu7ByRIUmrFVGHZmWc5HGnHdoGydGTTi62FmI6mwYH2G+HLVHAx0x\nIR8xV/wZ3OcG4VzLkLwSuKKIkEtfr99gqYrd7puZEzhS94IrRMEnvPgyIBhcUjxi\nKpXH9yCahH8fg2x2IFQwAk7mgUyUtwZjugDmUqTsbpOmARCBxE7jMeFBmT1F2t8R\nY+8/6qFN7XOH2Yc7gK4RwhkU/BHH97zD0Ssf+U2VUZiGlrsSUH0sgMkiOaMdpD1b\n+FH/dR/xecWaMO74pmvKc3uyatvf+SzL8DVWLCSKNQKBgQDWgubt30fcg2RSz1Ta\nsA6xlDtLYaU3Dpmjamyw1rGeU26w8axHedhm87b1t5IkgFBdHC6kH+IYji8yKlsz\nKjvoo4Zc0YJYvaxzcAPsnLO5lF1rf+glO94UwmHl4eTfdFI+/0KABgi+SiJI9qHj\n05mMhUc/WMloGt/mm7bRcoh1iwKBgQDOnZGFJCxSyDkuevrk2NhrVHF2oSXmjAyG\nLlwOPrihRUCBEST11lclJTMme515UYwrxM6ek/WFYAX9kLxp5BggJyTznBDC38jG\nvbSyhfPCEqqoJo6Y2Q/rExhO+Nj4lBiDmo5FvCREj7jAxgjje45tbZCjeY2vJp//\ng8bvTOz87wKBgQCYULS2/Q9ite1bm5qN+etFDpMX0Irm0DgpwBzTaG8Qk/+KJuCE\nlDEj0TP9v85GmtH1e1hm87iwZO2AOnEtoHSPmOWELMPYTT4Rbd1rek1nncDD3zuw\njJUBupCXEdJZFJh94PSQQTieHbfAhVeolQx3qf9QLLQ+dq67aZ/jkubwRwKBgQCy\nODQXljYtScwZDbdwwqMbIYGlhCc/EDqVW1PIbc2wPh3/tpwc+b+9qLLQVPxmczLn\nZiGbo6C6ZTOFnt0GsdslkN5My6ehkIqM84H0I5s5IgTWejuyGDmk2Zm0NO5irMvg\naOajvD/Ea/w/PBLate8K8OE8QVM3a6fDLRXhwIcDPQKBgQCTo9xFo5ulNmQwGZEn\noeq8dFmUeaBvleNUDZjQDpX/L5o/nlLKpYu6/cKEKBLVEncqmehM6X+JDmLHdEjk\nuTX5It6cZz7l9vhNL9LE2KEeDsGCae7MTd1aCxtpYLthbaWkMnRs+fLl0JMR8iuV\nYZAMKIk5RMlbHF+iE5DuqFMuvA==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-yqjej@mokop-io.iam.gserviceaccount.com",
        "client_id": "112236918668338759201",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yqjej%40mokop-io.iam.gserviceaccount.com"
      }
      ),
    })
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack)
  }
}
export default admin.firestore()