function calcular(){
   let soma = 0
   let acaoSocial = document.getElementById("acaoSocial").value
   soma = soma + Number(acaoSocial)
   let homenagem = document.getElementById("homenagem").value
   soma = soma + Number(homenagem)
   let leite = document.getElementById("leite").value
   soma = soma + (2 * Number(leite))
   let kit = Number(document.getElementById("kit").value)
   let equipe = document.getElementById("equipe").value
    let suplemento = document.getElementById("suplemento").value
   let pontosKitSupl = 0
   if (equipe == "Laranja"){
       if (kit >= 97 && suplemento >= 49) {

           pontosKitSupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
       }
       else if (kit >= 78 && suplemento >= 39){
           pontosKitSupl = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
       }
       else if (kit >= 49 && suplemento >= 25) {
           pontosKitSupl = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
       }
       else if (kit >= 19 && suplemento >= 10){
           pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15)
       }
       else {
           pontosKitSupl = (kit * 30)
       }
   }
   soma = soma + pontosKitSupl
   document.getElementById("soma").innerHTML = soma.toFixed(2)
}
