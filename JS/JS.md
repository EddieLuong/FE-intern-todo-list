`'!-- Javascript world -->`

# 1. Cookies, Sesstion Storage, local Storage

> Local storage:

- Khả năng lưu trữ vô thời hạn: chỉ bị xóa bằng JS, xóa bằng localStorage API, hoặc xóa bộ nhớ trình duyệt
- Lưu trữ tối đa 5MB
- Không gửi thông tin lên server như Cookie nên bảo mật tốt hơn

- Sử dụng:

  - Khởi tạo localStorage:

```
  localStorage.setItem("key", "value");
  //hoặc
  localStorage.key = 'value';
  //hoặc
  localStorage['key'] = 'value';

```

- Lấy giá trị từ localStorage:

```
  localStorage.getItem('key');
  // hoặc
  localStorage.key;
```

- Xóa biến trong localStorage

```
  //Xóa một biến
  localStorage.removeItem(key);

  //Xóa tất cả các biến
  localStorage.clear();
```

> Sesstion storage

    - Lưu trên Client: cũng dùng để lưu trữ data trên trình duyệt
    - Mất dữ liệu khi đóng tab
    - Dữ liệu không được gửi lên Server
    - Thông tin lưu trữ được nhiều hơn cookies (ít nhất 5MB)

```
  - Sử dụng

if ( typeof(Storage) !== 'undefined') {

// Khởi tạo sesionStorage
sessionStorage.setItem('name', 'Ted Mosby');

// get sessionStorage
sessionStorage.getItem('name');

// lấy ra số lượng session đã lưu trữ
sessionStorage.length;

// xóa 1 item localStorage
sessionStorage.removeItem('name');

// xóa tất cả item trong sessionStorage
sessionStorage.clear();

} else {
alert('Trình duyệt của bạn không hỗ trợ!');
}
```

> Cookie

- Thông tin được gửi lên server: cookie được truyền từ server tới browser và được lưu trữ trên máy tính khi truy cập vào ứng dụng, mỗi khi người dùng tải ứng dụng, trình duyệt sẽ gửi cookie để thông báo cho ứng dụng về dữ liệu hoạt động trước đó. thông tin trong cookie có thể bị sửa đổi và đánh cắp
- Cookie chủ yếu được đọc ở phía máy chủ; localStorage và sessionStoragee chỉ có thể đọc được ở phía máy khách
- Thời gian sống: mỗi cookie thường có khoảng thời gian timeout nhất định do dev xác định trước
- Dung lượng: cho phép lưu trữ tối đa 4KB và vài chục cookie cho một domain

- Sử dụng

  - Tạo cookie:

```
      document.cookie = 'username=Ted Mosby';
```

- Thêm ngày hết hạn cho cookie

```
      document.cookie = 'username=Ted Mosby; expires=Thu, 18 Dec 2018 8:00:00 UTC';
```

- Đặt hẹn thời gian hết hạn cho cookie với max-age(second)

```
      document.cookie = <username=Ted Mosby; max-age=9000<;
```

- Đọc cookie

```
      var x = document.cookie;
```

- Lấy giá trị của cookie

```
    function getCookie(cname) {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == '') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return <<;
    }

```

- Thay đổi giá trị Cookie

```
      document.cookie = "username=Barney Stinson; expires=Wed, 26 Dec 2018 8:00:00 UTC";
```

- Xóa cookie: Để xóa cookie chỉ cần xét lại ngày hết hạn về 1 thời điểm đã qua

```
      document.cookie = <username=; expires=Thu, 01 Jan 1970 00:00:00 UTC<;
```

Note:

- Vì localStorage và sessionStorage được lưu trữ trên trình duyệt của người dùng, nên các bạn cần phải xem xét nội dung lưu trữ có liên quan đến vấn đề bảo mật hay không.
- Và cũng chính vì localStorage và sessionStorage được lưu trữ trên trình duyệt nên việc sử dụng nó sẽ không ảnh hưởng đến hiệu xuất của trang web nhưng nó sẽ làm nặng trình duyệt của người dùng (không đáng kể).
- Về phạm vi: sessionStorage: giới hạn trong một cửa sổ hoăc thẻ của trình duyệt. Một trang web được mở trong hai thẻ của cùng một trình duyệt cũng không thể truy xuất dữ liệu lẫn nhau. Như vậy, khi bạn đóng trang web thì dữ liệu lưu trong sessionStorage hiện tại cũng bị xóa. Còn localStorage: có thể truy xuất lẫn nhau giữa các cửa sổ trình duyệt. Dữ liệu sẽ được lưu trữ không giới hạn thời gian.

# 2. Javascript data type

- String: trình bày kiểu văn bản

```
  "hello world!"
  'hello'
```

- Number: kiểu số (số nguyên, số hữu tỷ)

```
  3, 3.234, 3e-2
```

- Boolean: 2 giá trị true, false

```
  let a = true;
```

- undefined: undefined sẽ được trả về khi khai báo biến nhưng không gán giá trị cho nó

```
  let a;
```

- null: là kiểu giá trị đặc biệt biểu thị empty hoặc unknown value

```
  const number = null;
```

- Symbol: là kiểu dữ liệu duy nhất và không thể thay đổi

```
  let value = Symbol('hello')
```

- Object: dùng một cặp key-value để lưu trữ dữ liệu

```
  let student = {}
```

- NaN: Not a Number

# 3. Hoisting

Đưa các biến khai báo với "var" và khai báo hàm lên đầu Block Scope nhưng không gán giá trị cho nó.

> Hoisting với "var", "function declaration"

- Với "var"

```
  console.log(age)  // undefined
  console.log(fullName)  // ReferenceError: fullName is not defined

  var age = 16
```

- Với function declaration

```
 console.log(sum(6,9))  //15

 function sum(a,b) {
   return a+b;
 }
```

> Hoisting với "let" và "const"
> Khai báo biến với let và const khi được hoisted không được tạo giá trị và bị đưa vào "Temporal dead zone"

```
    {
    console.log(fullName) //ReferenceError: Cannot access 'fullName' before initialization

    let fullName = "nguyen van A"
    }
```

# 4. "==" và "==="

> "==" là toán tử so sánh giá trị. Trong JS trước khi so sánh các số hạng sẽ được biến đổi về cùng kiểu nếu có thể

    - Khi so sánh một chuỗi với 1 số, JS sẽ chuyển đổi chuỗi thành số. chuỗi không có giá trị sẽ được chuyển thành NaN

```
    console.log('2'==2) //true
```

> "===" là toán tử so sánh nghiệm ngặt. so sánh cả về giá trị và kiểu dữ liệu

```
    console.log('2'===2) //false
```

# 5. 'this' trong javascript

Từ khóa "this" sẽ trả về đối tượng mà nó thuộc về, hay gọi tới phương thức, thuộc tính đó

## Đặc tính

> 1. Trong một phương thức, this tham chiếu tới đối thượng truy cập phương thức( đối tượng trước dấu chấm)
> 2. Đứng ngoài phương thức, this tham chiếu tới đối tượng global

```
    const iphone6 {
      name: "iphone6",
      color:"pink"

      takePhoto() {
        console.log(this)
      }
      objChild: {
        name: "child"
        aMethod(){
          console.log(this)
        }
      }
    }

    iphone6.takePhoto() // trả về chính object iphone6
    iphone6.objChild.aMethod() // trả về object objChild
```

# 6. Arrow function

- Function bình thường

```
  (function (log){
    console.log(log);
  })("hello Eddie");
```

- Arrow Function

```
  (log=>console.log(log);
  )("hello Eddie");
```

- Mục đích sinh ra là để viết ngắn gọn hơn, bỏ từ khóa function
- Nếu chỉ return 1 giá trị duy nhất mà không thực hiện lệnh nào thì có thể bỏ từ khóa return
- Arrow function không thể sử dụng làm constructor function

# 7. Func.bind() và Fucn.Apply()

## Func.bind()

    Ràng buộc từ khóa "this" trở thành một đối tượng khác

> Ví dụ

```
    this.firstName = "Minh"
    this.lastName = "Thu"

    const teacher = {
      firstName:"Minh",
      lastName: "Thao",
      getFullName() {
        return `${this.firstName} ${this.lastName}`
      }
    }
    // case 1:
    console.log(teacher.getFullName()) // "Minh Thao"
    // case 2:
    const getTeacherName = teacher.getFullName
    console.log(getTeacherName())   // "Minh Thu"
```

> - Phương thức bind() sẽ trả về một hàm mới giống với hàm đối tượng hoặc phương thức trong hàm đối tượng.

```
    const $ = document.querySelector.bind(document);
```

> - Có thể nhận các đối số như hàm ban đầu
>   Không giống call() và apply(), bind() không thực thi ngay hàm
>   Argument (object,args1,args2,....argsN)

    - Object muốn ràng buộc this
    - Các args được khởi tạo tương ứng với các đối số của hàm

## Fucn.Apply()

> Có thể viết một phương thức có thể sử dụng trên nhiều object khác nhau, tùy vào object gán vào argument đầu tiên của apply()

> Gọi hàm ngay và cho phép truyền vào một object và các đối số thông qua mảng

```
    Func.apply(thisArg, [argsArray])
```

Example: with Math.max and Math.min

```
    const numbers = [5, 6, 2, 3, 7];

    const max = Math.max.apply(null, numbers);

    console.log(max);
    // expected output: 7

    const min = Math.min.apply(null, numbers);

    console.log(min);
    // expected output: 2

```

# 8. If-else và Switch-case

    "if-else" và "switch-case" đều là các câu lệnh điều kiện trong Javascript

## If-else

> - Chứa hai khối lệnh, nếu expression của if đúng thì khối code trong if sẽ được thực thi. Nếu điều kiện sai thì khối code trong else sẽ được thự thi

```
    if(true){
      console.log("Expression is true")
    }
    else
    console.log("Expression is false")
```

> - Các giá trị được coi là Truthy: chuỗi khác rỗng, số khác 0, tất cả cả object (cả [] và {}) sẽ coi là true và thực hiện khối code trong if

```
      Boolean(true);   //true
      Boolean([]);   //true
      Boolean([]);   //true
      Boolean(25);   //true
      Boolean('0');   //true
      Boolean("false");   //true
      Boolean(new Date);   //true
      Boolean(-42);   //true
      Boolean(12n);   //true
      Boolean(3.14);   //true
      Boolean(Infinity);   //true

```

> - Các giá trị Falsy là: undefined, null, false, 0, -0, 0n, NaN,

```
      Boolean(false)    //false
      Boolean(0)    //false
      Boolean(-0)    //false
      Boolean(0n)    //false
      Boolean("")    //false
      Boolean(null)    //false
      Boolean(undifined)    //false
      Boolean(NaN)    //false
```

## Switch-case

>     Thường sử dụng để rẽ nhiều nhánh hơn. Nếu dùng if-else thì các câu lệnh sẽ bị lồng nhau và rất khó nhìn

>     Giúp cấu trức chương trình rõ ràng, dễ đọc, dễ hiểu hơn so với if-else

>     Giá trị trong switch được so sánh với các "case" nếu trùng khớp thì khối code trong "case" đó sẽ được thực thi

```
   switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";

      default:
        text = "Looking forward to the Weekend";
    }
```

> Nếu không có giá trị nào khớp, sẽ trả lại giá trị trong default

# 9. “iterate" Array

> Array.map((item,index, Array)=> {do somthing}, thisValue) //return new Array

```
     const newArr = [1,2,3,4].map((item,index, arr)=> {
        if(item%2===0){
          return item*2;
        }
        return item;
      })
      console.log(newArr)                    //outputs: [1,4,3,8]
```

> Array.reduce((total,currentValue,currentIndex, array)=>{}, initValue) //return total(string/number)

```
      const newArr = [1,2,3,4].reduce((prevValue, currentValue,currentIndex,arr)=>
            prevValue + currentValue)
      , 0 )
      console.log(newArr)                    //outputs: 10
      //
```

> Array.forEach((item,index,arr)=>{do something}) //return undefine

      Lặp qua từng phần tử của mảng và thực hiện lệnh nào đó

```
      [1,2,3,4].forEach(item => console.log(item))

      //output expect: 1
                       2
                       3
                       4
```

> Array.filter((item,index, arr)=>{return element have condition}) //return elements Array have condition

      Lặp qua mảng lọc ra các phần tử đáp ứng yêu cầu

```
      const newArr  = [1,2,3,4,5,6,7].filter((item)=>{
              return item % 2 !== 0;
      })

      console.log(newArr)   // output expect: [1,3,5,7]
```

> Array.some((item,index, arr)=>{if one element have condition return true, else return false}) //return true/false

      Lặp qua mảng tìm phần tử thỏa mãn yêu cầu, nếu tìm thấy sẽ break ngay lập tức và bỏ qua các phần tử phía sau,
      Trả về kiểu Boolean

```
      const newArr = [true,false,true,true].some((item)=> item === false)
      console.log(newArr)   // output expect: true

```

> Array.every((item,index,arr) =>{if all elements have condition return true, else return false}) //return true/false

      Lặp qua tất cả các phần tử của mảng nếu đáp ứng yêu cầu sẽ return true, nếu có 1 phần tử không đáp ứng sẽ return false và break ngay lập tức

```
      const newArr = [true,true,true,true].every((item)=> item === true)
      console.log(newArr)   // output expect: true

```

> Các cách khác: dùng for, do-while,while , for-of

# 10. Các method Array.map, Array.filter, Array.reduce, Array.sort

> Array.map((item,index, Array)=> {do somthing}, thisValue) //return new Array

```
     const newArr = [1,2,3,4].map((item,index, arr)=> {
        if(item%2===0){
          return item*2;
        }
        return item;
      })
      console.log(newArr)                    //outputs: [1,4,3,8]
```

> Array.reduce((total,currentValue,currentIndex, array)=>{}, initValue) //return total(string/number)

```
      const newArr = [1,2,3,4].reduce((prevValue, currentValue,currentIndex,arr)=>
            prevValue + currentValue)
      , 0 )
      console.log(newArr)                    //outputs: 10
      //
```

> Array.filter((item,index, arr)=>{return element have condition}) //return elements Array have condition

      Lặp qua mảng lọc ra các phần tử đáp ứng yêu cầu, trả lại một mảng chứa những phần tử đó

```
      const newArr  = [1,2,3,4,5,6,7].filter((item)=>{
              return item % 2 !== 0;
      })

      console.log(newArr)   // output expect: [1,3,5,7]
```

> Array.sort()

     - Phương thức dùng để sắp xếp các phần tử của một Array theo thứ tự alphabet
     - Giá trị mặc định là sort "string"

```
      const fruits = ["Banana", "Orange", "Apple", "Mango"];
      fruits.sort();
```

     - Nếu muốn sắp xếp các số phải truyền vào 1 function

```
  - Theo tự nhỏ -> lớn

    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});

  - Theo tự lớn -> nhỏ

    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return b - a});
```

# 11. Var / let và const

    Cả 3 thằng đều được dùng để khai báo biến

> Var / let và Const: Scope

    - Scope/ code block: if else, loop, {},..
    - Var có thể sử dụng được bên ngoài scope block nhưng let và const thì không thể

```
     {
      var course = 'Javascript basic';
    }
      console.log(course)     //output expect: Javascript basic

    //Same code with let
    {
      let course = 'Javascript basic';
    }

    console.log(course)     // get an error: ReferenceError: course is not defined

```

> Hoisting

    Nêu rõ tại mục #3

> Const / var , let: Assignment

    - Var và let có thể gán lại giá trị
    - const không thể gán lại giá trị tới lần thứ 2 cho nó với các biến, nhưng với object thì có thể thay đổi giá trị của các key

```
  - Assign with "var"

    var a=1;
    a = 100;
    console.log(a)   //output expect: 100

  - Assign with "let"

    let a=1;
    a = 100;
    console.log(a)   //output expect: 100

    - Assign  with "const"

    const a=1;
    a = 100;
    console.log(a)   //TypeError: Assignment to constant variable

    const a = {
      name: 'eddie'
      age: 21
    }
    a.age = 22;

    console.log(a.age)  //output : 22
```

Note: - Code thuần: dùng Var - Babel: dùng const, let - Khi định nghĩa biến và không gán lại biến đó: dùng Const - Khi cần gán lại giá trị cho biến: dùng Let

# 12. String interpolation

> Sử dụng để truyền biến vào trong string dễ dàng hơn
> Cú pháp: ${...}
> Sử dụng kết hợp với template literals

- Cách chèn biến vào string thông thường

```
    let a = 5;
    let b = 10;
    console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
    // "Fifteen is 15 and
    // not 20."

```

- Sử dụng String interpolation kết hợp với template literals

```
    let a = 5;
    let b = 10;
    console.log(`Fifteen is ${a + b} and
    not ${2 * a + b}.`);
    // "Fifteen is 15 and
    // not 20."
```

# 13. SetTimeout và SetInterval

> SetTimeout

    - Dùng để thiết lập một hàm call back sẽ được thực thi sau một khoảng thời gian xác định nào đó
    - Cú pháp: setTimeout(function, milliseconds);
          + function là chức năng mà bạn muốn thực thi
          + Sau khoảng thời gian milliseconds thì function sẽ được thực thi (Lưu ý: 1000 milliseconds = 1 giây)

```
    <button type="button" onclick="setTimeout(abc, 3000)">Click</button>
    <script>
        function abc(){
            alert("Hello");
        }
    </script>
```

Khi click vào button thì sau 3 giây, trình duyệt sẽ bật lên alert với dụng dung "Hello"

    - Kết thúc thực thi hàm trong setTimeout: sử dụng phương thức clearTimeout();

```
    var tên-biến = setTimeout(function, milliseconds);
    clearTimeout(tên-biến);
```

> setInterval

      - Dừng để thiết lập một hàm sẽ được thực thi và lặp lại lại mãi mãi sau một khoảng thời gian xác định

      - Cú pháp: setInterval(function, milliseconds);
             + function là chức năng mà bạn muốn thực thi.
             + milliseconds là khoảng thời gian giữa mỗi lần function được thực thi

```
      <script>
          setInterval(displayTime, 1000);
          function displayTime(){
              var d = new Date();
              document.getElementById("demo").innerHTML = d.toLocaleTimeString();
          }
      </script>
```

      Sau mỗi một giây element có id="demo" sẽ được cập nhật thời gian và hiển thị ra UI

      - ClearInterval(): dùng để kết thúc việc lặp lại thực thi hàm được thiết lập trong setInterval()

```
    var tên-biến = setInterval(function, milliseconds);
    clearInterval(tên-biến);
```

# 14. Promise

> Promise được sinh ra để xử lý vấn đề bất đồng bộ trong Javascript, trước khi có Promise thì người ta dùng callback, nhưng khi cần thực hiện quá nhiều thao thác với nhau thì sẽ xuất hiện một vấn đề gọi là callback Hell. Chính vì vậy Promise được sinh ra để giải quyết vấn đề đó

```
    getData(function(a){
      getMoreData(a, function(b){
          getMoreData(b, function(c){
              getMoreData(c, function(d){
                  getMoreData(d, function(e){
                      ...
                  });
              });
          });
      });
  });
```

- Syntax:

```
      var promise = new Promise((resolve, reject)=>{
        // Logic
        // Thành công: resolve()
        // Thất bại: reject;
      })
```

> Để tạo ra 1 Promise, ta sử dụng từ khóa "new Promise", và truyền vào 1 excutor; khi excutor thực thi thì function truyền vào excutor có 2 tham số resolve và reject: resolve sẽ được gọi khi thực hiện hàm thành công, reject sẽ được gọi khi hàm thực hiện thất bại

> Sử dụng Promise thông qua các phương thức .then hoặc .catch. "Then" và "catch" đều nhận các callback function, và function trong "then" sẽ được thực thi khi Promise Resolve, ngược lại function trong "catch" sẽ được thực thi khi Promise Reject

> Các status của Promise: pending, fullfill, reject

```
    var promise = new Promise((resolve, reject)=>{
        // Logic
        // Thành công: resolve()
        // Thất bại: reject;
      })

    promise
          .then((data)=>
            console.log(data);
          )
          .catch((error)=>
            console.log(error);
          )
```

# 15-16. Async - Await

> Khi sử dụng Promise cũng gặp phải một vấn đề tương tự như callback đó là Promise Hell

> Async-await làm cho việc viết promise dễ dàng hơn

> Async sử dụng để tạo một function return 1 Promise

```
    async function myFunction() {
       return "Hello";
    }

    Same as

    function myFunction() {
       return Promise.resolve("Hello");
    }

    Uing "async function" with ".then"

    async function myFunction() {
      return "Hello";
    }
    myFunction().then(
      function(value) {myDisplayer(value);}
    );
```

> Await được sử dụng để chờ một Promise được return và thực hiện hành động kế tiếp, có thể sử dụng "await" bên trong "async function"

```
    async function getFile() {
      let myPromise = new Promise(function(resolve) {
        let req = new XMLHttpRequest();
        req.open('GET', "mycar.html");
        req.onload = function() {
          if (req.status == 200) {
            resolve(req.response);
          } else {
            resolve("File not Found");
          }
        };
        req.send();
      });
      document.getElementById("demo").innerHTML = await myPromise;
    }

    getFile();
```

# 17 Try - catch

```
    try {
        // Code that we will <try<
    }
    catch(error) {
        // Code that handles any potential errors
    }
```

- Ví dụ trên có 2 code block. Đoạn đầu tiên là những code sẽ được thực thi, đoạn thứ 2 dùng để catch những lỗi có thể xảy ra

> try cho phép kiểm tra các lỗi xảy ra việc thực thi các lệnh trong khối code. Nếu khối code xảy ra lỗi các lỗi sẽ được truyền vào argument của catch và có thể lấy arg đó để in ra

> catch nhận vào 1 argument là 1 object chứa các lỗi và khối code sau nó thực hiện xử lý các lỗi đó

> Ngoài ra còn có thể Custom các message lỗi bằng throw

```
    function myFunction() {
      const message = document.getElementById("p01");
      message.innerHTML = "";
      let x = document.getElementById("demo").value;
      try {
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
      }
      catch(err) {
        message.innerHTML = "Input is " + err;
      }
    }
```

# 18. Generators trong javascript

> Generators là function có thể dùng giữa chừng để làm một việc gì đó, sau đó lại tiếp tục từ chỗ mà nó đã dừng

> Async, await được xây dựng dựa trên generators

> Sử dụng 1 generators:

```
     function * generatorFunction() { // Line 1
       console.log("This will be executed first.");
       yield "Hello, ";   // Line 2
       console.log("I will be printed after the pause");
       yield "World!";
     }
     const generatorObject = generatorFunction(); // Line 3
     console.log(generatorObject.next().value); // Line 4
     console.log(generatorObject.next().value); // Line 5
     console.log(generatorObject.next().value); // Line 6
     // This will be executed first.
     // Hello,
     // I will be printed after the pause
     // World!
     // undefined

```

    - Sử dụng cú pháp "function *" thay vì function đê khai báo 1 generator

    - Một generator sẽ trả về một hàm sẽ trả về một object có thể gọi phương thức next(). Mỗi lần gọi next() sẽ trả về một object có dạng:

```
    {
      value: Any,
      done: true|false
    }

```

- Khi return từ Generator thì sẽ thiết lập giá trị done thành true và không thể sinh ra giá trị nào nữa

# 19. Toán tử "..."/ Rest và Spread trong ES6

> "..." Khi sử dụng kết hợp với Destructuring để định nghĩa ra các tham số thì gọi là Rest. Khi sử dụng để truyền đối số hoặc rải trong array hoặc object thì gọi là truyền đối số

> "..." là Rest: có thể hiểu là lấy ra những phần còn lại, có thể sử dụng kết hợp với destructuring chia nhỏ các object hoặc array thành các phần tử nhỏ hơn. Thường sử dụng để rải các tham số khi tạo hàm để không phải khai báo các biến nữa

```

    // Với Function
    function myFunc ([a,b...params]){
      console.log(a+b);
    }

    myFunc([1,2,3,4,5,6,7])  //output: 3


```

> "..." là Spread:

```
    const arr = [1,2,3,4];
    const arr2 = [5,6,7,8];

    const arr3 = [...arr,...arr2];
```

    - Spread ngược lại so với Rest, dùng để nhóm lại hoặc concat các  mảng, array lại với nhau. trước khi có Spread thì phải dùng concat method để nói mảng lại

# 20. TypeScript

> TypeScript là một phiên bản nâng cao của Javascript, bổ sung kiểu tĩnh (static) và lớp hướng đối tượng (class) giống ngôn ngữ Java mà những điều này không có ở Javascript

> TypeScript có tất cả các tính năng của ES6 như classes, modules

> Lý do nên sử dụng TypeScript:

    - Dễ phát triển ứng dụng lớn do sử dụng lập trình hướng đối tượng
    - Nhiều framework hỗ trợ
    - Có thể sử dụng lẫn lộn cú pháp Javascript vào TypeScript

> Install:

```
      npm install -g typescript
```

> Data types

    - Boolean

```
      var isDone: boolean = true;
```

    - String

```
    let color: string = "blue";
```

    - Number:

```
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;
```

    - Array

```
    let list: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];
```

    - Tuple
    - Enum
    - Unknown
    - Any
    - Void
    - Null and Undefined
    - Never
    - Object
    - Symbol
