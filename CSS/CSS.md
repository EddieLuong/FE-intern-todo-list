# 1. Position

>Thuộc tính postion dùng để xác định kiểu vị trí cho một phần tử

Thuộc tính Position có 5 giá trị khác nhau: static, relative, fixed, absolute, sticky. Sau đó dùng các thuộc tính top, bottom, left, right để định vị vị trí cho Element

  <!-- static -->

Vị trí Element được đặt theo vị trí mặc định, và không anh hưởng bởi các thuộc tính top, bottom, left, right

    div {
      position: static;
    }

  <!-- relative -->

    Định vị vị trí của phần tử so với vị trí bình thường của nó.
    Thông thường relative không được sử dụng một mình mà thường sử dụng trong thẻ cha và thẻ con có position: absolute; để di chuyển vị trí của thẻ con bên trong thẻ cha đó

    div.relative {
      position: relative;
      left: 30px;
      border: 3px solid #73AD21;
    }

  <!-- absolute -->

    Định vị vị trí Element so với thẻ cha gần nhất có thuộc tính position, ngoại trừ position static. Thường được dùng kết hợp với position: relative;
    Nếu không tìm thấy thẻ cha nào chứa position thẻ chứa position: absolute; sẽ lấy theo kích thước màn hình/ khung hình để làm vị trí tương đối để set các thuộc tính top, bottom, left, right.

    div.relative {
      position: relative;
      width: 400px;
      height: 200px;
      border: 3px solid #73AD21;
    }

    div.absolute {
      position: absolute;
      top: 80px;
      right: 0;
      width: 200px;
      height: 100px;
      border: 3px solid #73AD21;
    }

  <!-- fixed -->

    Element có thuộc tính position: fixed; được định vị vị trí so với khung hình, và cố định trên khung hình khi cuộn trang. Sử dụng các thuộc tính top, bottom, left, right để đặt vị trí cho phần tử này trên khung hình
    Thường được sử dụng để cố định navBar, sideBar.

    div.fixed {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 300px;
      border: 3px solid #73AD21;
    }

  <!-- Sticky -->

Element có thuộc tính position: sticky; sẽ được toggle giữa relative và fixed khi người dùng cuộn đến vị trí được set theo top, left, bottom, right thì position sẽ được đổi thành fixed.
sticky thường thấy trong các trang bán hàng, thương mại điện tử

div.sticky {
position: -webkit-sticky; /_ Safari _/
position: sticky;
top: 100px;
background-color: green;
border: 2px solid #4CAF50;
}
Ở ví dụ trên khi người dùng cuộn đến 100px thì thẻ div sẽ chuyển thành position: fixed; cố định tại 1 chỗ cách điểm trên khung hình website một khoảng 100px

# 2. Z-index

    Xét trong không gian 3 chiều, có 3 trục x,y,z; với tọa độ (0;0;0) là điểm trên cùng bên trái viewport

    Trục X trong CSS dùng để căn theo chiều ngang các thuộc tính căn theo trục X như: width, left, right,translateX...

    Trục Y trong CSS dùng để căn theo trục dọc, các thuộc tính căn theo trục Y như: height, top, bottom, translateY,...

    Trục Z hay Z-index dùng để căn theo chiều sâu, thứ tự đằng trước đằng sau, z-index càng lớn thì nó càng đứng trước các phần tử khác và sẽ đè lên các phần tử khác

# 3 - Specificity

    trong CSS có nhiều cách để css cho một element:
    - dùng inline CSS
    - dùng extenal CSS: selector bằng IDs, Class, Element, pseudo-class, pseudo-elements,..
    - hoặc dùng internal tương tự như external nhưng đặt trong thẻ <head> của file HTML

Specificity có thể hiểu là thứ tự ưu tiên khi áp CSS cho element với các cách trên, cách css nào có điểm càng lớn thì sẽ được ưu tiên trước, và đè lên các cách CSS còn lại

Thứ tự ưu tiên bắt đầu từ 0 sẽ là: + 1000 điểm cho inline CSS + 100 điểm cho CSS bằng selector Ids + 10 điểm cho CSS bằng selector bằng Class, pseudo-class, element
Khi sử dụng cả IDs kết với với elements sẽ cộng điểm của cả 2

A: h1
B: #content h1
C: <div id="content"><h1 style="color: #ffffff">Heading</h1></div>
A: được 1 điểm
B: được 101 điểm
C: được 1000 điểm

ví dụ: <div><p style="color: red">this is specificity</p></div> + trong file External: p{color: green} + trong thẻ <style> có

<style>
div p {
color: orange;
}
</style>

      ở đây CSS inline có specificity 1000 điểm nên nó sẽ bỏ qua các màu green, orange được css trong external và internal. Nếu không có CSS inline thì color sẽ ưu tiên CSS color: orange.

# 4. Box-model, box-sizing

      box-model coi mỗi phần tử đều bao gồm: margins, borders, padding, content. Hiện nay trong devtool đều có hỗ trợ box-model

      + content là kích thước phần nội dung của element đó
      + padding là khoảng cách giữa content và border
      + border là phần viền bao quanh toàn bộ padding và content
      + margin là khoảng cách giữa element và các phần tử xung quanh nó

    Box-sizing là thuộc tính xác định tùy chỉnh kích thước đối với width(height) để thiết lập chiều rộng (chiều cao) theo các giá trị của box-sizing:

    + content-box(default Value): các thuộc tính width, height sẽ đặt chiều rộng và chiều cao cho phần content của phần tử
    + border-box: các thuộc tính width, height sẽ đặt chiều rộng và chiều cao cho toàn bộ phần tử, tính từ phần border vào, khi kích thước phần tử bị ảnh hưởng thì phần content sẽ bị co lại cho phù hợp với kích thước
    + initial: sư dụng giá trị mặc định
    + inherit: kế thừa từ phần tử cha
    Box-sizing thường dùng value: border-box và được set trong css selector của thẻ <html>

    html{
      box-sizing: border-box;
    }

# 5. Media-query- Responsive

  >  được dùng để Responsive thay đổi kích thước các phần tử, layout, CSS phù hợp với kích thước màn hình ở các độ phân giải khác nhau.
    tùy theo project mà dùng responsive theo mobile first hoặc laptop first

    Các break-point thường được dùng là: 1200px, 1024px, 740px

    <!-- Mobile -->
    @media (max-width: 739px){

    }
    <!-- Tablet -->
    @media (min-width: 740px) and (max-width: 1023px){

    }
    <!-- PC -->
    @media (min-width: 1024px) and ( max-width: 1200px){

    }
    <!-- màn hình có độ phan giải cao trên 1200px -->
    @media (min-width: 1024px){

    }

# 6.Display: block, inline, inline-block

 >   - Display: inline;
        Các item của phần tử chứa display: inline; sẽ nằm trên cùng một dòng, các item vượt quá độ dài sẽ tự động xuống dòng mới
        Các item có kiểu display này không thể set width và height; chỉ có thể điều chỉnh margin và padding left và right (top và bottom không thể điều chỉnh)

 >   - Display: block;
        Các item có kiểu display: block; luôn được xuống dòng và chiểm toàn bộ width của 1 dòng nếu nó không được set width. có thể điều chỉnh box-model theo tất cả các hướng

>  - Display: inline-block;
        các item sẽ được dồn lên một hàng giống kiểu inline nhưng nó cũng có thể điều chỉnh các thuộc tính height, margin, padding đủ 4 hướng như block

# 7. !important

  >  thường đưuọc sử dụng để tăng specificity cho một element lên mức cao nhất, thuộc tính nào có !important sẽ ghi đè toàn bộ các thuộc tính tương đồng được CSS ở những chỗ khác
  >  !important thường được dùng để đặt biến trong CSS. Không nên dùng !important ở các thuộc tính bình thường vì sẽ rất khó để bảo trì code, hoặc ghi đè nếu muốn

    :root {
      --primary-color: #aqua !important;
    }
    h2{
      color: var(--primary-color);
    }

# 8. Các đơn vị px,em rem

    Các đơn vị trong CSS chia thành 2 loại: đơn vị tuyệt đối và đơn vị tương đối.
 >   + Đơn vị tuyệt đối: px . Đơn vị được định nghĩa sãn không bị thay đổi khi thay đổi kích thước màn hình

    + Đơn tương đối: %, em, rem,.. Đơn vị được đo lường dựa theo các thành phần khác. kích thước này sẽ thay đổi khi các phần tử nó phụ thuộc vào thay đổi. Phần tử mẹ mà các đơn vị này phụ thuộc như sau:
      //%: phần tử nó phụ thuộc vào là phần tử mẹ gần nhất
        Ex: <div class="box" style="width:500px">
              <div class="box1" style="width: 50%">
            </div>
            => box1 set width= 50%, tương đương với 250 px


 >     // em: tham chiếu vào giá trị thuộc tính font-size của phần tử mẹ gần nhất
        Ex: <div class="box" style="font-size: 20px">
              <div class="box1" style="width: 3em">
            </div>
            => box1 set width= 3em, tương đương với 3 lần font-size của thẻ div có class box là 60px


 >     // rem: tham chiếu vào giá trị thuộc tính font-size của phần tử gốc (hay giá trị thuộc tính font-size trong thẻ <html>)
      Ex: <html> {
        font-size: 13px;
        }
        p {
          font-size: 2rem;
        }
        => thẻ html có giá trị font-size bằng 13px, thẻ p có giá trị bằng 2rem tương đương với 2 lần 13px => p có font-size: 26px;

# 9. Overflow

    Thuộc tính này cho biết điều gì sẽ xảy ra với phần nội dung có kích thước quá lớn so với phần kích thước mà nó được set trong CSS
    Ex:
        <p style="height=10px">một nội dung gì đó dài quá 2 dòng</p>
        Khi nội dung dài quá 2 dòng nhưng kích thước thẻ chỉ cho phép cao 10px. Do vậy ta phải set thuộc tính Overflow để xử lý hiện tượng này.

    Các giá trị của Overflow:
      + visible(mặc định): phần nội dung không bi bắt bớt. nó được hiển thị bên ngoài element

      + hidden: phần nội dung quá tải sẽ bị  ẩn đi

      + scroll: phần nội dung quá tải sẽ tạo thành thanh scrollbar để cuộn xuống những phần bị quá kích thước để có thể xem nội dung bị quá tải

      + auto: tương tự như scroll nhưng chỉ tạo scroll khi cần thiết

# 10. Css preprocessors

    Hay còn gọi là ngôn ngữ tiền xử lý của CSS. Có cú pháp tương tự như CSS nhưng nó được tối ưu hóa để tránh lặp lại code và trông giống ngôn ngữ lập trình hơn, dễ bảo trì hơn.
    Một số ngôn ngữ tiền xử lý CSS gồm: SASS,SCSS, LESS. Các ngôn ngữ này cuối cùng cũng sẽ được chuyển thành CSS nhưng cú pháp của nó tối ưu hơn.

    EX:
      // SASS
         header
          margin-bottom: 20px;
          nav
            height: 30px;
          a
            color: white;

      // same in CSS
      header {
            margin-bottom: 20px;
          }

          header nav {
            height: 30px;
          }

          header a {
            color: white;
          }

      // đặt biến trong SASS
          $blue-color: blue;  /* create variable for all links */
          $padding: 20px;  /* create variable for padding */

          nav {
            padding: $padding;
          }
          .sidebar a {
            color: $blue-color;
          }

# 11. Căn giữa thẻ <div>

   > vì thẻ <div> là 1 thẻ có display mặc định là Block

    Các cách căn giữa
    1. margin-left, margin-right set là auto
    div{
          margin: 0 auto;
    }
    2. set position cho thẻ cha là relative, thẻ div đó là absolute
    #container{
      position: relative;
    }
    #container div{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%)
    }

    3. sử dụng flex-box
    #container{
      display: flex;
      justify-content: center;
      align-items:center;
    }
    #container div{
    }


# 12. Responsive element PC là hàng ngang, Mobile là hàng dọc
  Sử dụng Responsive kết hợp với flexbox

    Responsive PC first, sử dụng flex-box, khi chuyển sang màn hình Mobile dưới 740 px sẽ chuyển thành hàng dọc


    Code:

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    html{
      font-size: 15px;
    }
    .box{
      display: flex;
      justify-content: center;
    }
    .box1{
      margin: 20px;
      width: 16%;
      height: 100px;
      background-color: rgb(206, 141, 21);
    }
    @media (max-width:740px) {
      .box{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .box1{
      margin: 20px;
      width: 30%;
      height: 100px;
      background-color: rgb(206, 141, 21);
    }
    }
  </style>
</head>
<body>
    <div class="box">
        <div class="box1"></div>
        <div class="box1"></div>
        <div class="box1"></div>
        <div class="box1"></div>
        <div class="box1"></div>
    </div>
</body>
</html>


