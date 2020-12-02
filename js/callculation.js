


function twdCallculation() {
    const tempTwdTax = document.querySelectorAll('div')[0].children[0].value
    const twdTax = tempTwdTax
        .replace(/\n/g,' ')
        .replace(/:/g,' ')
        .split(' ' )
        .filter(tax => tax != '')

        console.log(twdTax)
        document.forms.ticket1[3].value = twdTax[twdTax.indexOf('TKT')+1]
        document.forms.ticket1[4].value = twdTax[twdTax.indexOf('ISSUED')+1]
}