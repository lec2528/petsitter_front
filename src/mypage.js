document.addEventListener("DOMContentLoaded", function() {
    const changeAddressBtn = document.getElementById("changeAddressBtn");
    const changePasswordBtn = document.getElementById("changePasswordBtn");
  
    // 주소 변경 버튼 클릭 이벤트 처리
    changeAddressBtn.addEventListener("click", function() {
      const newAddressInput = document.getElementById("newAddress");
      const newAddress = newAddressInput.value;
      if (newAddress.trim() === "") {
        alert("새로운 주소를 입력해주세요.");
        return;
      }
  
      // 주소 변경 처리 로직 작성
      // (서버로 데이터 전송 및 데이터베이스 업데이트 등)
      alert("주소가 변경되었습니다: " + newAddress);
      newAddressInput.value = ""; // 입력값 초기화
    });
  
    // 패스워드 변경 버튼 클릭 이벤트 처리
    changePasswordBtn.addEventListener("click", function() {
      const newPasswordInput = document.getElementById("newPassword");
      const newPassword = newPasswordInput.value;
      if (newPassword.trim() === "") {
        alert("새로운 패스워드를 입력해주세요.");
        return;
      }
  
      // 패스워드 변경 처리 로직 작성
      // (서버로 데이터 전송 및 데이터베이스 업데이트 등)
      alert("패스워드가 변경되었습니다.");
      newPasswordInput.value = ""; // 입력값 초기화
    });
  });
  