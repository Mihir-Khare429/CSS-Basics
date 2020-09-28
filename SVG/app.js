const logo = document.querySelectorAll('#logo path')
console.log(logo)
for( var i = 2 ; i< logo.length ; i++){
    console.log(logo[i].getTotalLength())
}