/*

*toggle between api feed and static feed, with note about *for use in case of api changes*


*/



$(document).ready( function(){

  getTwitchStreamers();

  function getTwitchStreamers() {

    $.getJSON( "https://wind-bow.gomix.me/twitch-api/streams/featured?callback=?", function(theObj) {

      var featuredArray = theObj.featured;
      console.log(featuredArray);

      $.each(featuredArray, function(key, value){

        var featuredArrayStream = value.stream
        var featuredArrayStreamName = featuredArrayStream.channel.display_name;
        var featuredArrayChannelImg = value.image
        var featuredArrayGame = featuredArrayStream.game
        var featuredArrayStreamViewers = featuredArrayStream.viewers;
        var featuredArrayLink = "https://www.twitch.tv/" + featuredArrayStreamName;

        var theBuilder = '<div class="box"><img class="streamerImg" src="' + featuredArrayChannelImg + '" /><h3 class="streamerName">' + featuredArrayStreamName + '</h3><p class="streamerGame">Currently Streaming: ' + featuredArrayGame + '</p><br><p class="streamerViewCount">Stream Viewer Count: ' + featuredArrayStreamViewers + '</p><p><a href="' + featuredArrayLink + '">View the Stream</a></p></div>' 

        $('.theHook').append(theBuilder);

      });

    });
  };

});





