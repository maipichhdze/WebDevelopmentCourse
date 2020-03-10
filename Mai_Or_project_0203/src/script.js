$('.collapse').not(':first').collapse(); // Collapse all but the first row on the page.

// This section makes the search work.
(function() {
  var searchTerm, panelContainerId;
  $('#accordion_search_bar').on('change keyup', function() {
    searchTerm = $(this).val();
    $('#accordion > .panel').each(function() {
      panelContainerId = '#' + $(this).attr('id');

      // Makes search to be case insesitive 
      $.extend($.expr[':'], {
        'contains': function(elem, i, match, array) {
          return (elem.textContent || elem.innerText || '').toLowerCase()
            .indexOf((match[3] || "").toLowerCase()) >= 0;
        }
      });

      // END Makes search to be case insesitive

      // Show and Hide Triggers
      $(panelContainerId + ':not(:contains(' + searchTerm + '))').hide(); //Hide the rows that done contain the search query.
      $(panelContainerId + ':contains(' + searchTerm + ')').show(); //Show the rows that do!

    });
  });
}());
// End Show and Hide Triggers

// END This section makes the search work.