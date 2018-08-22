var x;
var z;
var y;
var lastUpdateTime;
var lastEntryTime;
var card_one;
var card_two;

function loadResults() {
  $.ajax({
    url : "http://api.wgsystem.net/auth/game/result",
    type : "POST",
    data : { gameid : 1037 },
    datatype: "json",
    async: false,
    success : function(data) {

      //console.log(lastUpdateTime);

      var lastTenResults = data.data.slice(110, 119);
      //console.log(data.data.slice(110));
      console.log(lastTenResults.reverse());

      for(i=0; i<lastTenResults.length; i++) {
        //console.log(lastTenResults[i].result);

        var lastTenres = lastTenResults[i].result;
        var lastTenresult = lastTenres.split(';');
        
        $("#res").append("<li>" + "<span>"+ cards[indexToValue(lastTenresult[0]) - 1]+ "<i class='icon "+color[indexToFlower(lastTenresult[1])-1]+"'></i>"+"</span>"+ "<span>"+ cards[indexToValue(lastTenresult[1]) - 1] + "<i class='icon "+color[indexToFlower(lastTenresult[1]) - 1]+"'></i>" +"</span>" + "</li>");
      }

      console.log(data.data[(data.data).length - 1]);
      var result = data.data[(data.data).length - 1]['result'];
      var updatetime = data.data[(data.data).length - 1]['updatetime'];
      
      var updated = moment.unix(updatetime).add(65,"seconds").format("YYYY-MM-DD HH:mm:ss");
      var lastUpdated = moment.unix(updatetime).format("YYYY-MM-DD HH:mm:ss");
      var nowTime = moment().format("YYYY-MM-DD HH:mm:ss");

      lastEntryTime = updatetime;

      var timeNow = moment(nowTime);
      var lastUpdatedTime = moment(updated);
      x = lastUpdatedTime.diff(timeNow,"seconds");
      z = updatetime;


      var res = result.split(';');
      if(res.length > 1) {
        
        card_one = cards[indexToValue(res[0]) - 1];
        card_two = cards[indexToValue(res[1]) - 1];

        color_one = color[indexToFlower(res[0])-1];
        color_two = color[indexToFlower(res[1])-1];
      }

      //clear result box
      $("#card1").hide();
      $("#card2").hide();

      // if (!card_one == 0) {
      //   $("#card1").show();
      //   $("#card1").addClass("flipInX");
      //   $("#card1 > h1.card-number").html(card_one);
      //   $("#card1").addClass(color_one);
      // }
      
      // if(!card_two == 0 && $("#card2").css("display","none")) {
      //   $("#card2").show();
      //   $("#card2").addClass("flipInX");
      //   $("#card2 > h1.card-number").html(card_two);
      //   $("#card2").addClass(color_two);
      // }


      console.log("First card", indexToValue(res[0]));
      console.log("First card suit", color[indexToFlower(res[0])-1]);
      console.log("Second card", indexToValue(res[1]));
      console.log("Second card suit", color[indexToFlower(res[1])-1]);          
      

      //console.log(indexToValue(34));
    },
    error : function (e) {
        console.log(e.statusText)
    }
  });
}