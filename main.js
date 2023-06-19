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
        }

})

// share

const shareBtn = document.querySelector('.btn_d')

const title = window.document.title
const url = "https://salom.uz"

shareBtn.addEventListener('click', ()=>{
    if(navigator.share){
        navigator.share({
            title : `${title}`,
            url: `${api}${api2}${input.value ? input.value : 'Assalomu alaykum'}`
        }).then(()=>{
        }).catch(console.error)
    }
})


