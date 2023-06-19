const image = document.querySelector('img')
const input = document.querySelector('input')
const button = document.querySelector('button')
const link = document.querySelector('a')
const api = `https://api.qrserver.com/v1/`
const api2 = `create-qr-code/?size=450x450&data=`
input.addEventListener('input', (e)=>{
    image.src = `${api}${api2}${input.value}`
    link.href = `${api}${api2}${input.value}`

    if(input.value == '') {
         image.src = `${'./QR.jpg'}`
         link.href = `${'./QR.jpg'}`
        }

})


