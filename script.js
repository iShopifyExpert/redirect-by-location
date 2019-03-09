<script type="text/javascript">
  //Coded by Codehouse - Aaliyan Gul
  jQuery.ajax({
    url: 'https://ipapi.co/json',
    type: 'POST',
    async: false,
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    success: function (location) {
      // AU -- Australia
      if (location.country === 'AU') { // Redirect visitor to the AU store
          window.top.location.href = 'https://au.dittybird.com/';
      } else if (location.country === 'DE') { // Redirect visitor to the UK store
          window.top.location.href = 'https://de.dittybird.com/';
      }
    }
  });
</script>
