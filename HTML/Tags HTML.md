<!-- ### Các thẻ Tag thường dùng ### -->

1.  <head></head> chứa các thông tin của document: title, link tới các file, tạo icon cho doc

2.  <title>Eddie</title> : đặt title cho document

3.  <link rel="stylesheet" ref="./intern/eddie"></link> : tạo một đường link tới các external file, liên kết với các thư viện font, icon, jquery,... Các attribute thường dùng: href (chèn link), rel(xác định kiểu liên kết: icon, stylesheet,...)

4.  <body>
        <div>
        </div>
        <a></a>
        ...
    </body> là phần thân của document, chứa các thẻ con khác và nội dung của nó

5.  <a href="https://www.google.com.vn/?hl=vi">Hello world</a> chèn một đường link tới. ở ví dụ trên "Hello world" sẽ hiển thị trên UI và khi click vào "Hello world" sẽ được chuyển sang trang google

6.  <b>Hello world</b> thẻ này dùng để bôi đen nội dung bên trong

7.  <br> dùng để xuống dòng

8.  <button type="submit">Click me!!!/button> tạo một nút có thể click (mặc định có CSS tương tự cursor: pointer;)

9.  <audio src=".mp3"></audio> dùng để chèn file audio

10. <code><p>định dạng code</p></code> chèn một đoạn code vào, các ký tự nằm bên trong thẻ sẽ được hiển thị dưới định dạng code

11. <div  class="divElement">
        <i class="iconElement"></i>
        <p class="textElement"><p>
    </div>
    tạo một block chứa các thẻ khác bên trong, được dùng để chia layout web thành các thành phần nhỏ, dễ cho CSS và JS, căn chỉnh các thành phần của web và nội dung bên trong thẻ div dễ hơn

12. <footer>
       "contain element childen"
    </footer>
    tạo phân footer cho document, Dev khác dễ xác định được các thành phần của HTML document

13. <form action="/action_page.php" method="get">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"><br><br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br><br>
      <input type="submit" value="Submit">
    </form>

    tạo một form, nhận input từ người dùng; chứa các thẻ con khác như:

    # <input> tạo một vùng để user nhập dữ liệu, có thể hiện thị nhiều kiểu khác nhau tùy vào "type attribute" mặc định type ="text", các type khác thường dùng như: checkbox, radio,password, email, date, range, number, file, submit

    # <button> (mục số 8)

    # <select name="cars" id="cars">

      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
      </select>
        dùng để tạo một thẻ có thể lựa chọn một trong những option bên dưới, giá trị trả lại sẽ là các value của thẻ option

    # <option>

        tạo các option, làm element trong các  thẻ <select>, <optgroup>, <datalist>. Thường chứa value attribute để define value khi gửi form

    # <fieldset>

        dùng để nhóm các element trong form lại
        <form action="/action_page.php" method="get">
          <fieldset>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"><br><br>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname"><br><br>
          <input type="submit" value="Submit">
          </fieldset>
        </form>

    # <label> dùng để định nghĩa tiêu đề cho các element của form, thường đi kèm với attribute for để liên kết với id của thẻ input. Khi click vào label thẻ input chứ id đó sẽ autoFocus

      <label for="username">
      <input type="text"  id="username">
      </label>

14. Các thẻ heading từ h1 -> h6
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3>
    <h4>This is heading 4</h4>
    <h5>This is heading 5</h5>
    <h6>This is heading 6</h6>
    dùng đễ xác định các heading, kích thước, mức độ quan trọng sẽ giảm dần từ <h1> xuống <h6>. <h1> kích thước lớn và quan trọng nhất, <h6> kích thước bé và ít quan trọng nhất

15. <html></html>
    là phần tử gốc chứa tất cả các thẻ khác của HTML document trừ thẻ <!DOCTYPE>

16. <i>this is italic chracter</i>
    dùng để tạo chữ nghiêng cho đoạn văn bản
    các thư viện font thường dùng thẻ này để sử dụng icon

17. <img src="/public/image/image.png" alt="image" > sử dụng để tạo ảnh trong trang HTML
    các attribute thường dùng với <img> :
    "src": truyền được link của ảnh vào
    "alt": Khi ảnh không load được thì đoạn text trong alt attribute sẽ được hiển thị

18. <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
     tạo một danh sách không có thứ tự
    <ol>
        <li></li>
        <li></li>
        <li></li>
    </ol>
    tạo một danh sách có thứ tự 1,2,3,..
     # <li> là các element bên trong list thường dùng bên trong <ol>,<ul>

19. <p>Hello Eddie</p>
    Tạo một đoạn văn bản

20. <small>Hello Eddie</small>
    dùng để tạo văn bản có cỡ chữ nhỏ, thường dùng với các đoạn @Coppyright, description,..

21. <strong>Hello Eddie</strong>
    dùng đê tạo một đoạn văn bản bôi đen

22. <span>Hello Eddie</span>
    Dùng để tạo một thẻ inline, chi tiết bên phần CSS

23. <style>
        p {
          color: red;
          font-size:13px;
        }
    </style>

    sử dụng để thêm CSS cho file HTML, dùng cho internal CSS

24. <script>
        const btn = document.querySelector("#btn");
        btn.onClick = () => {
          alert(""hello)
        }
    </script>

    dùng để thêm trực tiếp script cho file HTML
    hoặc để liên kết với file Javascript thông qua chèn link file js vào attribute src của thẻ <script>

25. <table>
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
    </table>

    <table> dùng để tạo một bảng
    các Element thường dùng bên trong <table>: <tr>, <th>, <td>

    # <tr> là tạo ra một hàng trong bảng

    # <th> là một element nằm trong <tr> tạo ra một hàng heading, chứa thuộc tính của bảng, chữ trong thẻ <tr> sẽ được bôi đen như heading

    # <td> dùng để tạo ra một ô trong bảng

<!--  -->
