

const smart_watch1 = document.querySelector('.smart_watch')

setInterval( function(){

    const tarikh = document.querySelector('.tarikh')
    const month = document.querySelector('.month')
    const shal = document.querySelector('.year')
    const ampm = document.querySelector('.ampm')
    const b_h = document.querySelector('.b_h')
    const b_m = document.querySelector('.b_m')
    const b_s = document.querySelector('.b_s')
    const day = document.querySelector('.day')

    let date = new Date()
    let monthname = ['Jan','Feb','March','April','May','Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov','Dec']
    let dayname = ['Sun', 'Mon' , 'Tues' , 'Wed' , 'Thus' , 'Fri' , 'Sat']
    let h = date.getHours()
    let min = date.getMinutes()
    let s = date.getSeconds()
    let d = date.getDate()
    let din = date.getDay()
    let m = date.getMonth()
    let year = date.getFullYear()

    tarikh.innerHTML = d < 10 ? '0'+d : d
    month.innerHTML = monthname[m]
    shal.innerHTML = year

    b_h.innerHTML = h > 12 ? ( h - 12 ) : h
    b_m.innerHTML = min < 10 ? '0'+min : min 
    b_s.innerHTML = s < 10 ? '0'+s : s

    day.innerHTML = dayname[din]

    ampm.innerHTML = h > 12 ? 'PM' : 'AM'


},1000 )