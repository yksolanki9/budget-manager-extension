$(function(){
  chrome.storage.sync.get('limit', function(budget){
    $('#limit').val(budget.limit);
  })
  $('#saveLimit').click(function(){
    var limit = $('#limit').val();
    if(limit) {
      chrome.storage.sync.set({'limit': limit}, function(){
        close();  // This will close the current tab
      });
    }
  });

  $('#resetTotal').click(function(){
    chrome.storage.sync.set({'total': 0}, function(){
      var notifOptions = {
        type: 'basic',
        iconUrl: '../../assets/icons/icon48.png',
        title: 'Total Reset',
        message: "Total has been reset to 0"
      };
      chrome.notifications.create('resetNotif', notifOptions);
    });
  })
})