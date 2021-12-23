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

- Thông tin được gửi lên server: cookie được truyền từ server tới browser và được lưu trữ trên máy tính khi truy cập vào ứng dụng, mỗi khi người dùng tải ứng dụng, trình duyệ sẽ gửi cookie để thông báo cho ứng dụng về dữ liệu hoạt đọng trước đó. thông tin trong cookie có thể bị sửa đổi và đánh cắp
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

Đưa các biến khai báo với "var" và khai báo hàm lên đầu phạm vi được khai báo nhưng không gán giá trị cho nó

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
> Khai báo biên với let và const khi được hoisted không được tạo giá trị và bị đưa vào "Temporal dead zone"

```
    {
    console.log(fullName) //ReferenceError: Cannot access 'fullName' before initialization

    let fullName = "nguyen van A"
    }
```

# 4. "==" và "==="

> "==" là toán tử so sánh giá tr. Trong JS trước khi so sánh các số hạng sẽ được biến đổi về cùng kiểu nếu có thể

    -Khi so sánh một chuỗi với 1 số, JS sẽ chuyển đổi chuỗi thành số. chuỗi không có giá trị sẽ được chuyển thành NaN

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
> argument (object,args1,args2,....argsN)
    - object muốn ràng buộc this
    - các args được khởi tạo tương ứng với các đối số của hàm