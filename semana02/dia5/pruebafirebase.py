import pyrebase

config = {
  "apiKey": "AIzaSyBnR1fKJvlqfcrKFAMQOKn6nPru7-2cm_Y",
  "authDomain": "portafolio-80f60.firebaseapp.com",
  "databaseURL": "https://portafolio-80f60-default-rtdb.firebaseio.com",
  "projectId": "portafolio-80f60",
  "storageBucket": "portafolio-80f60.appspot.com",
  "messagingSenderId": "180035497662",
  "appId": "1:180035497662:web:5774ca5a911599db1cb8ef",
  "measurementId": "G-4CBM3K6ZM6"
}

firebase = pyrebase.initialize_app(config)

#ejemplo con auth
auth = firebase.auth()
try:
    usuario = auth.sign_in_with_email_and_password('jorge@gmail.com','123456')
    print(auth.get_account_info(usuario['idToken']))
    auth.delete_user_account(usuario['idToken'])
except:
    print("usuario o password invalidos")
    
#print("enviando email de verificación")
#auth.send_email_verification(usuario['idToken'])

#cambiando la contraseña del usuario
#auth.send_password_reset_email('cesarmayta@gmail.com')
#print("se envio un correo de reseto para cesarmayta@gmail.com")

#crear usuarios
email = input("Ingrese Email : ")
password = input("Ingrese Password:")

auth.create_user_with_email_and_password(email,password)
print("Usuario creado con exito")


