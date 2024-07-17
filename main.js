window.onload = function () {
  var seconds = 0;
  var tens = 0;
  //   khai báo biến , dùng var để khai báo biến dạng global scrope
  //   getElementById trả về phần tử có thuộc tính ID là giá trị được chỉ định.
  var appendTens = document.getElementById("tens"); // Phần tử để hiển thị số phần mười giây.
  var appendSeconds = document.getElementById("seconds"); // Phần tử để hiển thị số giây.
  var buttonStart = document.getElementById("button-start"); // Nút bắt đầu.
  var buttonStop = document.getElementById("button-stop"); // Nút dừng.
  var buttonReset = document.getElementById("button-reset"); // Nút đặt lại

  var Interval; // Khai báo biến 'Interval' để lưu trữ ID của bộ đếm thời gian.

  // Sự kiện 'onclick' cho nút 'buttonStart' để bắt đầu bộ đếm thời gian.
  buttonStart.onclick = function () {
    clearInterval(Interval); // Xóa bất kỳ bộ đếm thời gian nào đang chạy.

    Interval = setInterval(startTimer, 10); // Đặt bộ đếm thời gian chạy mỗi 10ms (1/100 giây).
  };

  // Sự kiện 'onclick' cho nút 'buttonStop' để dừng bộ đếm thời gian.
  buttonStop.onclick = function () {
    clearInterval(Interval); // Xóa bộ đếm thời gian đang chạy.
  };

  //Sự kiện 'onclick' cho nút 'buttonReset' để đặt lại bộ đếm thời gian.
  buttonReset.onclick = function () {
    clearInterval(Interval); // Xóa bộ đếm thời gian đang chạy.
    tens = "00"; // Đặt lại số phần mười giây về "00".
    seconds = "00"; // Đặt lại số giây về "00".
    //innerHTML là đoạn mã chứa các node phần tử và cả node text để chuyển đổi thành mã HTML.
    appendTens.innerHTML = tens; // Cập nhật hiển thị số phần mười giây.
    appendSeconds.innerHTML = seconds; // Cập nhật hiển thị số giây.
  };

  // Hàm 'startTimer' để cập nhật số phần mười giây và giây.
  function startTimer() {
    tens++; // Tăng số phần mười giây lên 1.

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens; // Nếu số phần mười giây <= 9, thêm số 0 phía trước và cập nhật hiển thị.
    }

    if (tens > 9) {
      appendTens.innerHTML = tens; // Nếu số phần mười giây > 9, cập nhật hiển thị trực tiếp.
    }
    //
    if (tens > 99) {
      console.log("seconds");
      //
      seconds++; // Tăng số giây lên 1.
      appendSeconds.innerHTML = "0" + seconds; // Cập nhật hiển thị số giây với số 0 phía trước.
      tens = 0;
      appendTens.innerHTML = "0" + 0; // Cập nhật hiển thị số phần mười giây về "00".
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds; // Nếu số giây > 9, cập nhật hiển thị trực tiếp.
    }
  }
};
