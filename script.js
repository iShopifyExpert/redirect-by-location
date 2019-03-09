<script>
jQuery.ajax( {
  url: '//freegeoip.net/json/',
  type: 'POST',
  dataType: 'jsonp',
  success: function(location) {
    // UK -- United Kingdom
    if (location.country_code === 'UK') {
      // Redirect visitor to the UK store
      window.top.location.href = 'http://uk.blackclaw.com';
    }
  }
});
</script>
