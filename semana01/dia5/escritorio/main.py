import tkinter as tk
import tkinter.font as tkFont
from tkinter import messagebox
import mysql.connector
import psutil
import platform

mydb = mysql.connector.connect(
    host="btcb8knq37mi7aulkk2j-mysql.services.clever-cloud.com",
    user="ujslqzcjfuqqcd8u",
    password="elSv2jqDW6UqqLkuXaeM",
    database="btcb8knq37mi7aulkk2j"
)

class App:
    
    def ejecutarSql(self,sql,parametros = ()):
        mycursor = mydb.cursor()
        mycursor.execute(sql,parametros)
        mydb.commit()
        #resultado = mycursor.fetchall()
        #return resultado
    
    def get_size(self,bytes, suffix="B"):
        factor = 1024
        for unit in ["", "K", "M", "G", "T", "P"]:
            if bytes < factor:
                return f"{bytes:.2f}{unit}{suffix}"
            bytes /= factor
    
    def __init__(self, root):
        #setting title
        root.title("pc")
        #setting window size
        width=395
        height=273
        screenwidth = root.winfo_screenwidth()
        screenheight = root.winfo_screenheight()
        alignstr = '%dx%d+%d+%d' % (width, height, (screenwidth - width) / 2, (screenheight - height) / 2)
        root.geometry(alignstr)
        root.resizable(width=False, height=False)

        GLabel_959=tk.Label(root)
        ft = tkFont.Font(family='Times',size=10)
        GLabel_959["font"] = ft
        GLabel_959["fg"] = "#333333"
        GLabel_959["justify"] = "center"
        GLabel_959["text"] = "Sistema Operativo :"
        GLabel_959.place(x=20,y=30,width=130,height=33)

        
        
        GLineEdit_534=tk.Entry(root)
        GLineEdit_534["borderwidth"] = "1px"
        ft = tkFont.Font(family='Times',size=10)
        GLineEdit_534["font"] = ft
        GLineEdit_534["fg"] = "#333333"
        GLineEdit_534["justify"] = "center"
        GLineEdit_534["text"] = ""
        GLineEdit_534.place(x=150,y=30,width=227,height=30)
    
        
        
        GLabel_942=tk.Label(root)
        ft = tkFont.Font(family='Times',size=10)
        GLabel_942["font"] = ft
        GLabel_942["fg"] = "#333333"
        GLabel_942["justify"] = "center"
        GLabel_942["text"] = "Procesador"
        GLabel_942.place(x=30,y=80,width=70,height=25)

        GLineEdit_230=tk.Entry(root)
        GLineEdit_230["borderwidth"] = "1px"
        ft = tkFont.Font(family='Times',size=10)
        GLineEdit_230["font"] = ft
        GLineEdit_230["fg"] = "#333333"
        GLineEdit_230["justify"] = "center"
        GLineEdit_230["text"] = ""
        GLineEdit_230.place(x=150,y=80,width=227,height=30)
        
        GLabel_182=tk.Label(root)
        ft = tkFont.Font(family='Times',size=10)
        GLabel_182["font"] = ft
        GLabel_182["fg"] = "#333333"
        GLabel_182["justify"] = "center"
        GLabel_182["text"] = "Memoria Ram"
        GLabel_182.place(x=30,y=140,width=104,height=30)

        GLineEdit_55=tk.Entry(root)
        GLineEdit_55["borderwidth"] = "1px"
        ft = tkFont.Font(family='Times',size=10)
        GLineEdit_55["font"] = ft
        GLineEdit_55["fg"] = "#333333"
        GLineEdit_55["justify"] = "center"
        GLineEdit_55["text"] = ""
        GLineEdit_55.place(x=150,y=140,width=223,height=30)
    
        GButton_974=tk.Button(root)
        GButton_974["bg"] = "#efefef"
        ft = tkFont.Font(family='Times',size=10)
        GButton_974["font"] = ft
        GButton_974["fg"] = "#5fb878"
        GButton_974["justify"] = "center"
        GButton_974["text"] = "Guardar"
        GButton_974.place(x=150,y=210,width=70,height=25)
        GButton_974["command"] = self.GButton_974_command
        
        self.sistema = GLineEdit_534
        self.procesador = GLineEdit_230
        self.memoria = GLineEdit_55
        
        #capturamos valores de los sistemas
        uname = platform.uname()
        self.sistemaop = uname.system + ' ' + uname.release
        self.svmem = psutil.virtual_memory()
        print(self.svmem)
        
        self.procesador.insert(0,uname.processor)
        self.sistema.insert(0,self.sistemaop)
        self.memoria.insert(0,self.get_size(self.svmem.total))

    
        
    def GButton_974_command(self):
        sqlInsertar = "insert into computadoras(sistema,procesador,memoria) values(%s,%s,%s)"
        parametros = (self.sistema.get(),self.procesador.get(),self.memoria.get())
        print(sqlInsertar)
        print(parametros)
        self.ejecutarSql(sqlInsertar,parametros)
        messagebox.showinfo("Registro Exitoso", "Computadora registrada con Exito")

if __name__ == "__main__":
    root = tk.Tk()
    app = App(root)
    root.mainloop()
