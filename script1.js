document.querySelector('button').onclick = myClick;

function myClick(){
    let summary = document.querySelector(".summ").value;
    let perc = document.querySelector(".percent").value;
    let term = document.querySelector(".term").value;
    let cap = document.querySelector(".freq").value;

    console.log(summary)
    console.log(perc)
    console.log(term)

    let result = summary*((1+perc/100))**(term*cap)

    over_pay = result - summary

    document.querySelector('.res-summ').innerHTML = Math.round(result) + ' &#8381'
    document.querySelector('.res-over').innerHTML = Math.round(over_pay) + ' &#8381'
}