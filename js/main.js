function tktNum() {
    for (let i = 1; i < document.forms.length; i++) {
        if (document.forms[i].className.indexOf(document.itemsCheck.tktNumList.value) != -1) {
            document.forms[i].style.display = 'inline'
        } else {
            document.forms[i].style.display = 'none'
        }
    }
}


    


function findFp() {
        for (let j = 0; j < document.getElementsByClassName('fp').length; j++) {
            if (document.getElementById('fp').value === 'FP CASH') {
                document.getElementsByClassName('cash')[0].style.display = 'inline-block'
                document.getElementsByClassName('cc')[0].style.display = 'none'
            } else if (document.getElementById('fp').value === 'FP CC') {
                document.getElementsByClassName('cc')[0].style.display = 'inline-block'
                document.getElementsByClassName('cash')[0].style.display = 'none'
            } else if (document.getElementById('fp').value === 'FP CC + FP CASH') {
                document.getElementsByClassName('cc')[0].style.display = 'inline-block'
                document.getElementsByClassName('cash')[0].style.display = 'inline-block'
            } else {
                document.getElementsByClassName('cc')[0].style.display = 'none'
                document.getElementsByClassName('cash')[0].style.display = 'none'
        }
    }
}




function findOption() {
    for (let i = 0; i < document.querySelectorAll('div').length; i++) {
        let a = document.querySelectorAll('div')[i].lastElementChild.id
        if (document.querySelectorAll('div')[i].className.indexOf(document.itemsCheck.refundType.value) != -1) {
            if (a === 'fqq' || a === 'newtax' || a === 'result' || a === 'ticket' || a === 'but') {
                document.querySelectorAll('div')[i].style.display = 'inline'
            } else {
                document.querySelectorAll('div')[i].style.display = 'inline-block'
            }
        } else {
            document.querySelectorAll('div')[i].style.display = 'none'
        }
    }
}