from tkinter import *
from math import sin,cos,tan

janela = Tk() 
#janela.geometry("680x640+30+30") 
janela.title("Calculadora Cientifica Renan 2.3") 
janela.resizable(0,0) 
janela.attributes('-fullscreen', False)
janela.configure(bg="grey")
inp = StringVar() 
gr = StringVar()
gr.set("grau")
RG = Button(janela,highlightbackground="blue",highlightthickness=6, bd=4, textvariable=gr,width=2,height=1, font=("arial",8))
RG.grid(row=0,column=0, columnspan=1)
screen=Entry(janela,text=inp,width=24,justify='right',bg="light blue",font=('arial',11),bd=4) 
screen.grid(row=0,column=1, columnspan=4, padx=5,pady=15, ipady=5) 
screen.config(font=("arial",11,"bold"))

key_matrix = [["sin",   "cos",  "tan",    "x²",     u"\u221Ax"],  
              ["2ªf",   "Pi",   "x<>y",   " ",      "Hex"], 
              ["mc",    "mr",   "m+",     "m-",     "C"], 
              ["7",     "8",    "9",      "x!",     "<--"], 
              ["4",     "5",    "6",      "*",      "/"],  
              ["1",     "2",    "3",      "+",      "-"], 
              ["0",     " . ",  "(",      "1/x",    "="]] 

btn_dict = {} # dicionario para montar Botoes
resp = 0 # opciona usado para respotas
mc = 0 # conteudo da memoria mr 
p="" # numero em str de parenteses abertos
last="" # ultimo conteudo do visor
Pi = 3.14159265358979
f2=0 # 2ª função ativada=1 , desativada=0

def senx(x): # calcula seno com graus
    global Pi
    return sin(Pi*x/180)

def cosx(x): # calcula cosseno com graus
    global Pi
    return cos(Pi*x/180)

def tanx(x): # calcula tangente com graus
    global Pi
    return tan(Pi*x/180)
def f20():
    global f2
    btn_dict["btn_2ªf"].configure(bg="light grey")
    f2=0
    btn_dict["btn_("].configure(text=f"{str(p)}(")

def cor_mem(): # cor do botao memoria mr
    global mc 
    if mc<0:
        btn_dict["btn_mr"].configure(bg="magenta")
    elif mc>0:
        btn_dict["btn_mr"].configure(bg="green")
    elif mc==0:
        btn_dict["btn_mr"].configure(bg="light grey")
        
def grau(self): # botao para graus ou radianos
    global gr
    if gr.get()=="rad":
        gr.set("grau")
    else:
        pass
        gr.set("rad")

RG.bind("<Button-1>",grau) # executa função grau se clicar com botao nª1 do mouse
    
def Calcula(event):
    global p
    global f2
    global mc 
    global last
    global Pi
    button = event.widget.cget("text") 
    global key_matrix, inp, resp
    
    try: 
        if button == u"\u221Ax": 
            resp = float(inp.get())**(0.5) 
            inp.set(str(resp)) 
        elif button == "1/x":
            resp = 1/float(inp.get())
            inp.set(str(resp))
        elif button == "hex":
            num = int(float(inp.get()))
            tab=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
            hex=""
            while num > 0:
                r = num%16
                hex = tab[r]+hex
                num = num//16
            inp.set(hex)
        elif button == "x²":
            resp = float(inp.get())**2 
            inp.set(str(resp)) 
        elif button == " Pi":
            inp.set(inp.get()+"Pi")
        elif button == "x<>y":
            trc = inp.get()
            inp.set(last)
            last = trc
        elif button == "2ªf":
            if f2==1:
                f20() # desativa f2
            else:
                btn_dict["btn_2ªf"].configure(bg="cyan")
                f2=1
                btn_dict["btn_("].configure(text=f"{str(p)})")
        elif button[-1] == "(" or button[-1] == ")":
            pc= int("0"+p)
            if f2==0:
                p = str(pc+ 1)
                inp.set(inp.get()+ "(")
                btn_dict["btn_("].configure(text=f"{str(p)}(")
            else:
                if pc>0:
                    p = str(pc- 1)
                    if pc==1:
                        p=""
                    inp.set(inp.get()+ ")")
                    btn_dict["btn_("].configure(text=f"{str(p)})")
                else:
                    pass
        elif button == "C":
            p = ""
            f20()
            inp.set("")
            btn_dict["btn_<--"].configure(bg="light grey")
        elif button == "x!":  
            def fact(n): return 1 if n == 0 else n*fact(n-1)
            num = fact(int(inp.get()))
            inp.set(str(float(num))) 
        elif button == "<--":  
            if inp.get()=="ERROU":
                inp.set(last)
                btn_dict["btn_<--"].configure(bg="light grey")
            else:
                inp.set(inp.get()[:len(inp.get())-1]) 
        elif button == "sin":
            f20()
            p = str(int("0"+p)+ 1)
            btn_dict["btn_("].configure(text=f"{str(p)}(")
            if gr.get()=="rad":
                inp.set(inp.get()+"sin(")
            else:
                inp.set(inp.get()+"senx(")
        elif button == "cos":
            f20()
            p = str(int("0"+p)+ 1)
            btn_dict["btn_("].configure(text=f"{str(p)}(")
            if gr.get()=="rad":
                inp.set(inp.get()+"cos(")
            else:
                inp.set(inp.get()+"cosx(")
        elif button == "tan":
            f20()
            p = str(int("0"+p)+ 1)
            btn_dict["btn_("].configure(text=f"{str(p)}(")
            if gr.get()=="rad":
                inp.set(inp.get()+"tan(")
            else:
                inp.set(inp.get()+"tanx(")
        elif button == "mc":
            mc=0
            cor_mem()
        elif button == "mr":
            inp.set(inp.get()+"("+str(mc)+")")
        elif button == "m+":
            pass
            mc += float(inp.get())
            cor_mem()
        elif button == "m-":
            pass
            mc -= float(inp.get())
            cor_mem()
        elif button == ".":
            if inp.get()[-1]!=".":
                inp.set(inp.get()+str(button.strip())) 
        
        elif button == "=":
            if inp.get() == "ERROU":
                inp.set(last)
            else:
                last = inp.get() 
                # segurança ao EVAL
                resp = str(round(eval(inp.get()),14)) 
                if len(resp)>25: resp=str(float(resp))
                inp.set(resp) 
        else: 
            inp.set(inp.get()+str(button.strip())) 
            cor_mem()
    except:
        last = inp.get() 
        inp.set("ERROU")
        btn_dict["btn_<--"].configure(bg="green")

for i in range(len(key_matrix)):   
    for j in range(len(key_matrix[i])):   
        btn_dict["btn_"+str(key_matrix[i][j])] = Button( 
          janela, bd=2, text=str(key_matrix[i][j]),width=2,height=1, font=("arial",11,"bold")) 
        btn_dict["btn_"+str(key_matrix[i][j])].grid( 
          row=i+1, column=j, padx=1, pady=6, ipadx=1, ipady=3) 
        btn_dict["btn_"+str(key_matrix[i][j])].bind('<Button-1>', Calcula) 
btn_dict["btn_sin"].configure(highlightbackground="blue",highlightthickness=2, bd=3)
btn_dict["btn_cos"].configure(highlightbackground="blue",highlightthickness=2, bd=3)
btn_dict["btn_tan"].configure(highlightbackground="blue",highlightthickness=2, bd=3)

janela.mainloop()