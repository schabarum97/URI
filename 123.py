import requests
import tkinter as tk

def pegar_cep():
    if len(ed_cep.get()) != 9:
        response = f'Digite o um CEP válido!'
        lb_response["text"] = response
    else:
        ed_cep.get().replace("-", "")
        request = requests.get(f'https://viacep.com.br/ws/{ed_cep.get()}/json/')
        adress_data = request.json()
        if 'code' not in adress_data:
            city = adress_data['localidade']
            states = adress_data['uf']
            response = f'''
                Cidade: {city}
            Estado: {states}'''
            lb_response["text"] = response
        else:
            response = f'CEP não encontrado'
            lb_response["text"] = response

window = tk.Tk()
window.title('Buscas de CEP')

lb_title = tk.Label(window, text=f"Buscas por CEP", font=("Arial 13 bold")) 
lb_title.place(x=88, y=40)

lb_cep = tk.Label(window, text="Digite o CEP: ")
lb_cep.place(x=30, y=120)

ed_cep = tk.Entry(window, width=20)
ed_cep.insert('end', '00000-000')
ed_cep.place(x=110, y=120)

button_search = tk.Button(window, text='Buscar por CEP', font=("Arial 10 bold"), width=15, height=2, command=pegar_cep)
button_search.place(x=90, y=170)

lb_response = tk.Label(window, text="", font=("Arial 10 bold"))
lb_response.place(x=28, y=250)

window.geometry("300x350") 
window.resizable(0,0)
window.mainloop()