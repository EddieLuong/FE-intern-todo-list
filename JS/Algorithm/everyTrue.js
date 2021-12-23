function everyTrue(arr) {
  let errMessage =
    "Input must be an Array, Its elements must be boolean data type and at least 1 element.\nPlease try again!";
  // Check input is Array
  if (typeof arr !== "object" || arr.length === 0) {
    return errMessage;
  }
  // Tạo biến kiểm tra có phần tử Array nào không phải kiểu boolean không
  const anElementNotBoolean = arr.some((item) => {
    return typeof item !== "boolean";
  });
  // Check các phần tử con đều là boolean và kiểm tra xem tất cả các phần tử có phải true không vả return
  if (!anElementNotBoolean) {
    return arr.reduce((prevValue, currentValue) => {
      return prevValue === currentValue;
    });
  }
  return errMessage;
}
