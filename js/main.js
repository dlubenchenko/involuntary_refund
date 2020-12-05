function tktNum() {
    for (let i = 0; i < document.getElementsByClassName('tkt').length; i++) {
        if (document.forms[i + 1].className.indexOf(document.itemsCheck.tktNumList.value) != -1) {
            document.getElementsByClassName('tkt')[i].style.display = 'grid'
        } else {
            document.getElementsByClassName('tkt')[i].style.display = 'none'
        }
    }
}

function emdNum() {
    for (let i = 0; i < document.getElementsByClassName('emd').length; i++) {
        if (document.forms[i + 10].className.indexOf(document.itemsCheck.emdNumList.value) != -1) {
            document.getElementsByClassName('emd')[i].style.display = 'grid'
        } else {
            document.getElementsByClassName('emd')[i].style.display = 'none'
        }
    }
}







// function findFp() {
//     for (let i = 0; i < document.forms.length; i++) {
//         if (document.forms[i].fp.value === 'FP CASH') {
//             document.forms[i].querySelectorAll('div')[15].style.display = 'inline-block'
//             document.forms[i].querySelectorAll('div')[16].style.display = 'none'
//         } else if (document.getElementById('fp').value === 'FP CC') {
//             document.forms[i].querySelectorAll('div')[16].style.display = 'inline-block'
//             document.forms[i].querySelectorAll('div')[15].style.display = 'none'
//         } else if (document.getElementById('fp').value === 'FP CC + FP CASH') {
//             document.forms[i].querySelectorAll('div')[16].style.display = 'inline-block'
//             document.forms[i].querySelectorAll('div')[15].style.display = 'inline-block'
//         } else {
//             document.forms[i].querySelectorAll('div')[16].style.display = 'none'
//             document.forms[i].querySelectorAll('div')[15].style.display = 'none'
//     }
// }
// }


    


function findFp() {
        for (let j = 0; j < document.getElementsByClassName('fp').length; j++) {
            if (document.getElementById('fp').value === 'FP CASH') {
                document.getElementsByClassName('cash')[0].style.display = 'grid'
                document.getElementsByClassName('cc')[0].style.display = 'none'
            } else if (document.getElementById('fp').value === 'FP CC') {
                document.getElementsByClassName('cc')[0].style.display = 'grid'
                document.getElementsByClassName('cash')[0].style.display = 'none'
            } else if (document.getElementById('fp').value === 'FP CC + FP CASH') {
                document.getElementsByClassName('cc')[0].style.display = 'grid'
                document.getElementsByClassName('cash')[0].style.display = 'grid'
            } else {
                document.getElementsByClassName('cc')[0].style.display = 'none'
                document.getElementsByClassName('cash')[0].style.display = 'none'
        }
    }
}




function findOption() {
    for (let i = 1; i < document.querySelectorAll('div').length; i++) {
        let a = document.querySelectorAll('div')[i].lastElementChild.id
        if (document.querySelectorAll('div')[i].className.indexOf(document.itemsCheck.refundType.value) != -1) {
            if (a === 'fqq' || a === 'newtax' || a === 'result' || a === 'ticket' || a === 'but') {
                document.querySelectorAll('div')[i].style.display = 'grid'
                document.querySelectorAll('select')[1].style.display = 'grid'
                document.querySelectorAll('select')[2].style.display = 'grid'
            } else {
                document.querySelectorAll('div')[i].style.display = 'grid'
                document.querySelectorAll('select')[1].style.display = 'grid'
                document.querySelectorAll('select')[2].style.display = 'grid'
            }
        } else {
            document.querySelectorAll('div')[i].style.display = 'none'
        }
    }
}

