function load() {
  $.get(
    `https://script.google.com/macros/s/AKfycbzMTMnJlks-ESlCVqmtHsZWLsxvMgdF7HsLsYB2lyhMzLnj9SJ5/exec`
  ).done(function(data) {
    $(".talk_theme").text(data);
  });
  $.get(
    `https://script.google.com/macros/s/AKfycby-S_ncR_NABga_kHjkSNnIPpr7CyvKiBuhFcPZ1h5rHFO08mY/exec`
  ).done(function(groups) {
    $(".group_area").empty();
    for (let [i, members] of groups.entries()) {
      $(".group_area").append(`<div class="group_num">${i + 1}</div>`);
      let memberDom = "";
      for (let member of members) {
        memberDom += `<div class="group_member_name">${member}</div>`;
      }
      $(".group_area").append(`<div class="group_member">${memberDom}</div>`);
    }
  });
}
load();
