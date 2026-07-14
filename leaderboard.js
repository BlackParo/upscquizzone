let leaderboard =
JSON.parse(localStorage.getItem("leaderboard")) || [];

const tbody = document.getElementById("leaderboard-body");
const search = document.getElementById("search");
const filter = document.getElementById("filter");

function loadLeaderboard(list = leaderboard){

    tbody.innerHTML = "";

    list.sort((a,b)=>{

        if(b.score === a.score){
            return b.percentage - a.percentage;
        }

        return b.score - a.score;

    });

    // Top 3

    document.getElementById("first-name").innerHTML =
    list[0]?.username || "---";

    document.getElementById("first-score").innerHTML =
    list[0] ? list[0].score+"/"+list[0].total : "0";

    document.getElementById("second-name").innerHTML =
    list[1]?.username || "---";

    document.getElementById("second-score").innerHTML =
    list[1] ? list[1].score+"/"+list[1].total : "0";

    document.getElementById("third-name").innerHTML =
    list[2]?.username || "---";

    document.getElementById("third-score").innerHTML =
    list[2] ? list[2].score+"/"+list[2].total : "0";


    list.forEach((player,index)=>{

        tbody.innerHTML += `

        <tr>

        <td>${index+1}</td>

        <td>${player.username}</td>

        <td>${player.category}</td>

        <td>${player.score}/${player.total}</td>

        <td>${player.percentage}%</td>

        </tr>

        `;

    });

}

loadLeaderboard();

search.addEventListener("input",()=>{

    const value = search.value.toLowerCase();

    const filtered = leaderboard.filter(player=>

        player.username.toLowerCase().includes(value)

    );

    loadLeaderboard(filtered);

});

filter.addEventListener("change",()=>{

    if(filter.value==="All"){

        loadLeaderboard();

        return;

    }

    const filtered = leaderboard.filter(player=>

        player.category===filter.value

    );

    loadLeaderboard(filtered);

});

document.getElementById("clearBtn").addEventListener("click",()=>{

    if(confirm("Clear Leaderboard?")){

        localStorage.removeItem("leaderboard");

        leaderboard=[];

        loadLeaderboard();

    }

});
