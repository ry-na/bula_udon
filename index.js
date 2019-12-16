function load() {
  $.get(
    `https://script.google.com/macros/s/AKfycbzMTMnJlks-ESlCVqmtHsZWLsxvMgdF7HsLsYB2lyhMzLnj9SJ5/exec`
  ).done(function(data) {
    $(".talk_theme").text(data);
  });
}
load()
