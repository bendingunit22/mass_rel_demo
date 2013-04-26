$(function() {
    poller = new window.massrel.Poller({frequency:15}, function(results) {
      $('ul#bands').html('');
      results.map(function (band) {
        return '<table>' + band.name  + '<span class="afterBand"><span class="red">+'+ band.count  + '</span><span class="ment"> mentions </span></span></table>' ;
      }).forEach(function(tag) {
        $('ul#bands').append(tag).effect('highlight', {color: 'rgba(222,22,22,.2)'}, 60);
      });                             //flashing red for refresh
    });
    poller.start();  
    

    });

  
 