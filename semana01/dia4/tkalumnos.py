from tkinter import  *
from tkinter import messagebox
from tkinter.ttk import Treeview
import sqlite3

class Alumno:
    
    db_name = 'alumnos.s3db'
    
    def ejecutarSql(self,sql,parametros = ()):
        with sqlite3.connect(self.db_name) as conn:
            cursor = conn.cursor()
            resultado = cursor.execute(sql,parametros)
            conn.commit()
        return resultado
    
    def registrarAlumno(self):
        sqlInsertarAlumno = "insert into alumnos(nombre,email) values(?,?)"
        parametros = (self.nombre.get(),self.email.get())
        self.ejecutarSql(sqlInsertarAlumno,parametros)
        messagebox.showinfo("Registro Exitoso", "Alumno registrado con Exito")
        self.mostrarAlumnos()
        
    def mostrarAlumnos(self):
        rAlumnos = self.TrvAlumnos.get_children()
        for a in rAlumnos:
            self.TrvAlumnos.delete(a)
        
        sqlMostrarAlumnos = "select nombre,email from alumnos"
        resultado = self.ejecutarSql(sqlMostrarAlumnos)
        for fila in resultado:
            self.TrvAlumnos.insert('',0,text=fila[0],values=fila[1])
        
    
    def __init__(self,window):
        self.wind = window
        self.wind.title('Alumnos')
        
        #FRAME
        frame = LabelFrame(self.wind,text='Registro de Nuevo Alumno')
        frame.grid(row=0,column=0,columnspan=3,pady=10)
        
        ####### CAMPO NOMBRE ################
        #LABEL NOMBRE
        lbNombre = Label(frame,text='Nombre: ')
        lbNombre.grid(row=1,column=0)
        #TEXTO NOMBRE
        self.nombre = Entry(frame)
        self.nombre.grid(row=1,column=1)
        
        ####### CAMPO EMAIL ################
        #LABEL NOMBRE
        lbEmail = Label(frame,text='Email: ')
        lbEmail.grid(row=2,column=0)
        #TEXTO NOMBRE
        self.email = Entry(frame)
        self.email.grid(row=2,column=1)
        
        ###### BOTON DE REGISTRO DE ALUMNO ####
        btnNuevoAlumno = Button(frame,text='Registrar Alumno',command=self.registrarAlumno)
        btnNuevoAlumno.grid(row=4,columnspan=2,sticky=W + E)
        
        ##### LISTA DE ALUMNOS CON TREEVIEW
        self.TrvAlumnos = Treeview(height=10,columns=2)
        self.TrvAlumnos.grid(row=5,column=0,columnspan=2)
        self.TrvAlumnos.heading('#0',text='Nombre',anchor=CENTER)
        self.TrvAlumnos.heading('#1',text='Email',anchor=CENTER)
        self.mostrarAlumnos()
        
window = Tk()
app = Alumno(window)
window.mainloop()
        
        