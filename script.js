document.querySelector('button.calc').onclick = myClick;

function myClick(){
    let summary = document.querySelector(".summ").value;
    let perc = document.querySelector(".percent").value;
    let term = document.querySelector(".term").value;
    let cred_type = document.querySelector(".type").value
    let over_pay = 0

    console.log(summary)
    console.log(perc)
    console.log(term)
    console.log(cred_type)
    console.log()

    let m_term = term*12
    let m_per = (perc/12)/100
    let platezh_sum = 0

    if (cred_type == 'annuitet'){
        platezh_sum = summary*m_term*((m_per*((1+m_per)**m_term))/(((1+m_per)**m_term) - 1))
    } else{
        let sum_tela = summary/m_term
        let per = 0
        let sum = 0
        
        for (let i=0; i < m_term; i++){
            per = ((summary-sum_tela*i)*perc*30/365)/100
            platezh_sum += sum_tela + per 
        }
    }    
    over_pay = platezh_sum - summary

    document.querySelector('.res-summ').innerHTML = Math.round(platezh_sum) + ' &#8381'
    document.querySelector('.res-over').innerHTML = Math.round(over_pay) + ' &#8381'
}
