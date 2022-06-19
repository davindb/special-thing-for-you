function click_btn() {
  //   $("#exampleModalCenter").hide();
  //   $("#modal_2").modal("show");
  jQuery.noConflict();
  $("#modal_1").modal("hide");
  $("#modal_2").modal("show");
}

function click_btn_3() {
  //   $("#exampleModalCenter").hide();
  //   $("#modal_2").modal("show");
  jQuery.noConflict();
  $("#modal_2").modal("hide");
  $("#modal_3").modal("show");
}

function click_btn_final() {
  //   $("#exampleModalCenter").hide();
  //   $("#modal_2").modal("show");
  jQuery.noConflict();
  $("#modal_3").modal("hide");
  $("#modal_4").modal("show");
}

function ditasari() {
  jQuery.noConflict();
  $("#modal_4").modal("hide");
  setTimeout(function () {
    document.location = "./#sixthings";
  }, 1000);
}

function pass_input() {
  const pass = $("#pass").val().toLowerCase().trim();
  const realpass = "specialthingforditaaa";
  jQuery.noConflict();
  if (pass === realpass) {
    $("#modal_first").modal("hide");
    $("#modal_1").modal("show");
  } else {
    alert("Wrong password!");
    $("#pass").val("");
  }
}
