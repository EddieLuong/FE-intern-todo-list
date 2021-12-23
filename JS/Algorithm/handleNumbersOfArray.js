function handleNumbersOfArray(arr) {
  // Kiểm tra input
  for (let param of arr) {
    if (typeof arr !== "object" || !Number.isInteger(param)) {
      return "Input must be an Array and all elements must be integer Number!!\nPlease try again and enter right data type!!! ";
    }
  }
  // Check number of elements
  if (arr.length === 0) {
    return "Array must be at least 1 element to handle";
  }
  // Remove phần tử giống nhau
  const removeSameNumber = new Set(arr);
  // Sort theo thứ tự trước khi tách lẻ và chẵn
  const sortArray = [...removeSameNumber].sort((a, b) => a - b);
  const oddNumbers = [];
  const evenNumbers = [];
  // Lặp qua mảng số chẵn push vào mảng chẵn, số lẻ push vào mảng lẻ
  sortArray.forEach((item) => {
    if (item % 2 == 0) {
      evenNumbers.push(item);
    } else oddNumbers.push(item);
  });
  // dùng Spread để concat hai mảng lại và return
  return [...oddNumbers, ...evenNumbers];
}

console.log(handleNumbersOfArray([]));
