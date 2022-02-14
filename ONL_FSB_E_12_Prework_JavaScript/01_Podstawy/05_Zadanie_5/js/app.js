function rockPaperScissors(player1Choice, player2Choice){
    let answers = ["papier", "nożyce", "kamień"];

    if (answers.includes(player1Choice) && answers.includes(player2Choice)){
        const choices = player1Choice + '/' + player2Choice

        switch (choices) {
            case "papier/nożyce":
            case "nożyce/kamień":
            case "papier/kamień":
                return console.log('Gracz 2 wygrał');
                break;
            case "nożyce/papier":
            case "kamień/nożyce":
            case "kamień/papier":
                return console.log('Gracz 1 wygrał');
                break;
            case "nożyce/nożyce":
            case "kamień/kamień":
            case "papier/papier":
                return console.log('Remis');
        };
    } else {
        return console.log("Błędne informacje")
    };
    };

rockPaperScissors("papier", "papier")
rockPaperScissors("kamień", "papier")
rockPaperScissors("papier", "kamień")
rockPaperScissors("nożyce", "dildo")
