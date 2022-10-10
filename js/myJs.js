const textConfig = {
  text1: "Hế Lu em!",
  text2: "Anh có điều này muốn hỏi em rằng nhưng nhớ trả lời thật lòng nha",
  text3: "Đọc đi ngại lém :))",
  text4: "Chào em, well thì em nhìn cái web này thì cũng đủ hiểu nó là cái gì rồi. Anh cũng nói lun không lòng vòng là ANH THÍCH EM từ khi hc chung QP3 rồi. Kiểu như trong lớp đó a chỉ tia mỗi mình em thui nên cũng chả biết sao a tia, nói chung là bị ấn tượng v đó. Thì a cũng lên FB mò ra được FB của em và r nhắn tin làm quen các kiểu, nói chung bữa h em cảm thấy a nhắn tin lâu lâu có mấy không hỏi cũng biết câu trả lời mà cũng hỏi, đó là do a cố ý hỏi v để kéo dài cuộc nói chuyện cho có chuyện nhắn,cái này thì a cũng biết em rất khó nhiều a xin lỗi rất nhiều ạ, còn lâu lâu tối mà em nhắn a ko trả lời đợi sáng mới trả lời là để dành cho ngày hôm sau có chuyện để nói tiếp. Tại a cũng không biết nói gì với lại em thường trả lời “Ồ” với lại thả icon a cũng không biết bắt chuyện sao để nói tiếp nên thường nghĩ mấy câu hỏi đó để đi hỏi. Em biết mà khi mình thích người khác thì lun sẽ tìm cách để nói chuyện cho bằng được. Chỉ có chuyện đó thì a mới hỏi những câu ngớ ngẩn đó thui ở ngoài thường thì a ít hỏi mấy cái đó tại ko hỏi a cũng thừa biết, ngay đến cả chuyện giờ giấc e học phòng nào ngày nào a cũng nắm được. Hmmm giờ nên nói gì nữa ta, thật sự a không giỏi trong việc ăn nói gây cảm lạnh hay lãng mạng gì đâu. Chắc mấy câu mà ngôn tình không phù hợp với anh lắm, a chỉ nghĩ sao nói v thích là thích chứ không chiêm thêm gì nhiều. Vì vậy, hì khúc này hơi gây cấn. Vì vậy, a chỉ hy vọng xin phép em cho a một cơ hội để được quen em được hum ạ ?",
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
