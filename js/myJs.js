const textConfig = {
  text1: "Hế Lu em!",
  text2: "Anh có điều này muốn hỏi em rằng nhưng nhớ trả lời thật lòng nha",
  text3: "Đọc đi em :)))",
  text4: "Chào em, well thì em nhìn cái web này thì cũng đủ hiểu nó là cái gì rồi. Anh cũng nói lun không lòng vòng là ANH THÍCH EM từ khi hc chung QP3 rồi. Kiểu như là thích từ cái nhìn đầu tiên. Anh cũng lên Zalo mò ra tên em xong vào FB tìm thì thấy nên kb r gửi tin nhắn này nọ làm quen. Thật ra thì a ngại lắm á chứ. Anh biết a sợ nói ra điều này thì em sẽ cạch mặt a. Nhưng a không thể nào mà kiểu như mà nhút nhát như trước được. Được ăn cả ngã về không thui (mà phần không chắc nhiều rồi). Hổm rài là a biết em bận nên a ko dám nói ra, nên a chờ đợi. Nói chung việc chờ đợi đối với a không có gì mà vất vả cả a có thể chờ 2-3 để đi xe tại sao a không chờ được câu trả lời của em. Nói chung là chờ đợi là hạnh phúc. Nói chung thì mấy bữa nay a nhắn a hỏi toàn mấy cái kì cục lắm nói chung là a biết mà vẫn cứ hỏi. Tại a muốn kéo dài cuộc nói chuyện :((. Xin lỗi em vì đã cho em đọc được cái này. A chỉ hy vọng là em có thể cho a MỘT CƠ HỘI tìm hiểu và làm quen em được không?",
  text5: "No :333",
  text6: "Oki nè <3",
  text7: "Cho anh xin lý do em chọn có đi ?",
  text8: "Gửi",
  text9: "Vì như vậy thui",
  text10: "Yeah It's Right!!!",
  text11:
    "Nếu mà có việc gì cần giúp đỡ hay ăn uống hay bất cứ gì đó alo, 1 phút 30s a sẽ có mặt (trừ những ngày học :v",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/Shygif.gif",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.youtube.com/watch?v=neXPAg7fhlk";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
