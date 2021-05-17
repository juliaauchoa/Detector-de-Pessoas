function Verificar(){
    var n1 = window.document.getElementById('x1')
    var data = new Date
    var ano = data.getFullYear()
    var msg = window.document.getElementById('mensagem')
    var fsex = window.document.getElementsByName('radsex')
    var foto = window.document.getElementById ('imagem')

var nasc = Number(n1.value)
var idade = ano - nasc 
var genero = ''

if (fsex[0].checked) {
    var genero = 'mulher'
    msg.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
        if (idade<=5){
            foto.src = 'bebef.png'
        } else if (idade>5 && idade <=13) {
            foto.src = 'criancaf.png'
        } else if (idade>13 && idade <=23) {
            foto.src = 'jovemf.png'
        } else if (idade >23 && idade <=60) {
            foto.src = 'adultof.png'
        } else {
            foto.src = 'idosof.png'
        }
} else {
    var genero = 'homem'
    msg.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
        if (idade <=5){
            foto.src = 'bebem.png'
        } else if (idade >5 && idade <=13) {
            foto.src = 'criancam.png'
        } else if (idade >13 && idade<=23) {
            foto.src = 'jovemm.png'
        } else if (idade>23 && idade<= 60) {
            foto.src = 'adultom.png'
        } else {
            foto.src = 'idosom.png'
        }
}



}