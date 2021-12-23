function firstCharToUpperCase(string) {
  // Kiểm tra input có phải string hay không
  if (typeof string !== "string") {
    return "Input must be string data type !\nPlease try again!!!";
  }
  // Loại bỏ khoảng trống hai bên string
  const stringWithoutSpaceTwoSide = string.trim();
  // Check input string at least 1 character
  if (stringWithoutSpaceTwoSide.length === 0) {
    return "You have enter Space!\nPlease try again!";
  }
  // Tạo một mảng chứa các ký tự của string
  const arr = [];
  for (let param of stringWithoutSpaceTwoSide) {
    arr.push(param);
  }
  // Lặp qua mảng chuyển phần tử đầu thành Uppercase, các phần tử còn lại chuyển hết thành LowerCase
  const arrayFirstCharcterUppercase = arr.map((character, index) => {
    if (index === 0) {
      return character.toUpperCase();
    }
    return character.toLowerCase();
  });
  // Join các phần tử của mảng lại và return hàm
  return arrayFirstCharcterUppercase.join("");
}
