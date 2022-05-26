function myfunc() {
 
    // Setting DOM to all boxes or input field
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("1").value;
    b2 = document.getElementById("2").value;
    b3 = document.getElementById("3").value;
    b4 = document.getElementById("4").value;
    b5 = document.getElementById("5").value;
    b6 = document.getElementById("6").value;
    b7 = document.getElementById("7").value;
    b8 = document.getElementById("8").value;
    b9 = document.getElementById("9").value;
  
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X') || (b1 == '0' || b1 == '0') && (b2 == '0' ||
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('print')
            .innerHTML = `Player ${b1} won`;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert(`Player ${b1} won`);
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X') || (b1 == '0' || b1 == '0') && (b4 == '0' ||
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = `Player ${b1} won`;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
 
        window.alert(`Player ${b1} won`);
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
    b8 == 'X') && (b9 == 'x' || b9 == 'X') || (b7 == '0' || b7 == '0') && (b8 == '0' ||
    b8 == '0') && (b9 == '0' || b9 == '0')) {
    document.getElementById('print')
        .innerHTML = `Player ${b7} won`;
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    window.alert(`Player ${b7} won`);
}
else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')||(b3 == '0' || b3 == '0') && (b6 == '0' ||
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = `Player ${b3} won`;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        window.alert(`Player ${b3} won`);
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')||(b1 == '0' || b1 == '0') && (b5 == '0' ||
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = `Player ${b1} won`;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        window.alert(`Player ${b1} won`);
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')|| (b3 == '0' || b3 == '0') && (b5 == '0' ||
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = `Player ${b3} won`;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert(`Player ${b3} won`);
    } else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
    b5 == 'X') && (b8 == 'x' || b8 == 'X')||(b2 == '0' || b2 == '0') && (b5 == '0' ||
    b5 == '0') && (b8 == '0' || b8 == '0')) {
    document.getElementById('print')
        .innerHTML = `Player ${b2} won`;
    document.getElementById("1").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("9").disabled = true;
    window.alert(`Player ${b2} won`);
}
else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')||(b4 == '0' || b4 == '0') && (b5 == '0' ||
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('print')
            .innerHTML = `Player ${b4} won`;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        window.alert(`Player ${b4} won`);
    }
     
// Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
        b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}

// Function to reset game
function reset() {
    location.reload();
    for(let i =1;i<=9;i++){
        document.getElementById(i.toString()).value = '';   
    }
}
// Here onwards, functions check turn of the player
// and put accordingly value X or 0
document.getElementById("grids").addEventListener('click',myfuncMain);
flag = 1;
function myfuncMain(event) {
    if (flag == 1 &&  !document.getElementById(event.target.id).disabled) {
        document.getElementById(event.target.id).value = "X";
        document.getElementById(event.target.id).disabled = true;
        flag = 0;
    }
    else {
        if (!document.getElementById(event.target.id).disabled) {
        document.getElementById(event.target.id).value = "0";
        document.getElementById(event.target.id).disabled = true;
        flag = 1;
        }
    }
    myfunc();
}
