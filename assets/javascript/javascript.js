$(document).ready(function () {



    var compPick = Math.floor(Math.random() * 199) + 1;
    console.log("compPick: " + compPick);
    $(".randomNumber").html(compPick);

    var randomArray = [];
    console.log("randomArray: " + randomArray);

    for (i = 0; i < 4; i++) {
        var gemNumber = Math.floor(Math.random() * 12) + 1;
        console.log("gemNumber: " + gemNumber);
        randomArray.push(gemNumber);
    }

    var bluegem = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 1: " + bluegem);
    $("#img1").html("<img src=" + "assets/images/bluegem.png" + " value=" + bluegem + ">");

    var greengem = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 2: " + greengem);
    $("#img2").html("<img src=" + "assets/images/greengem.png" + " value=" + greengem + ">");

    var pinkgem = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 3: " + pinkgem);
    $("#img3").html("<img src=" + "assets/images/pinkgem.png" + " value=" + pinkgem + ">");

    var gemFour = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 4: " + gemFour);
    $("#img4").html("<img src=" + "assets/images/redgem.png" + " value=" + gemFour + ">");

    var wins = 0;
    console.log("wins: " + wins);

    var losses = 0;
    console.log("losses: " + losses);

    var score = 0;
    console.log("score: " + score);

    function reset() {
        compPick = Math.floor(Math.random() * 102) + 19;
        console.log("compPick: " + compPick);
        $(".randomNumber").html(compPick);

        score = 0;
        $(".scoreDisplay").html(score);

        bluegem = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 1: " + bluegem);
        $("#img1").html("<img src=" + "assets/images/bluegem.png" + " value=" + bluegem + ">");

        greengem = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 2: " + greengem);
        $("#img2").html("<img src=" + "assets/images/greengem.png" + " value=" + greengem + ">");

        pinkgem = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 3: " + pinkgem);
        $("#img3").html("<img src=" + "assets/images/pinkgem.png" + " value=" + pinkgem + ">");

        gemFour = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 4: " + gemFour);
        $("#img4").html("<img src=" + "assets/images/redgem.png" + " value=" + gemFour + ">");

        $("img").on("click", function () {
            var newScore = score += parseInt($(this).attr("value"));
            console.log("New Score: " + newScore);
            $(".scoreDisplay").html(newScore);

            if (newScore === compPick) {
                wins++;
                $(".wins").html("Wins: " + wins);
                console.log("Wins: " + wins);
                reset();

            }

            else if (newScore > compPick) {
                losses++;
                $(".losses").html("Losses: " + losses);
                console.log("Losses: " + losses);
                reset();

            }

        });



    }

    $("img").on("click", function () {
        var newScore = score += parseInt($(this).attr("value"));
        console.log("New Score: " + newScore);
        $(".scoreDisplay").html(newScore);

        if (newScore === compPick) {
            wins++;
            $(".wins").html("Wins: " + wins);
            console.log("Wins: " + wins);
            reset();
        }

        else if (newScore > compPick) {
            losses++;
            $(".losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
            reset();
        }

    });

});


