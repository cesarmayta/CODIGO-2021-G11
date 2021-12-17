class Empresa:
    
    def __init__(self,ruc,rz,tel):
        self.ruc = ruc
        self.razonsocial = rz
        self.telefono = tel
        
    def mostrar(self):
        print(" RUC : " + self.ruc + " -  " + self.razonsocial)
         
class Cliente(Empresa):
    
    def __init__(self,ruc,rz,tel,credito):
        super().__init__(ruc,rz,tel)
        self.credito = 1000
        
    def mostrar(self):
        super().mostrar()
        print(" linea de credito " + str(self.credito))
        
class Proveedor(Empresa):
    
    def __init__(self,ruc,rz,tel,cal):
        super().__init__(ruc,rz,tel)
        self.calificacion = cal
        
pepitoEirl = Cliente('2020202020','PEPITO COMPUTADORAS EIRL','22332',1000)
pepitoEirl.mostrar()