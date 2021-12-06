window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');+
    $("body").append('<div id="Leaderboard" style="  position:absolute; width:130px; height: 200px; top:10px; right:10px; background-color:rgba(0,0,0,0.1); color:#ffffff;  padding:5px;border-radius:5px; " align="center"><span class="glyphicon glyphicon-home" style="align"left"; "></span> Leaderboard</div>');    
    $("body").append('<div id="Team" style="position:absolute; top:10px; right:150px; background-color:rgba(0,0,0,0.3); color:#ffffff;  padding:5px;border-radius:5px;"><i class="material-icons" style="font-size:18px; cursor:pointer;">supervisor_account</i></i><span style="font-size:15px"></span></div>');    

});