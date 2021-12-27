# VCS và Git

## VCS

> VCS - Version Control System là hệ thống quản lý các phiên bản, ghi lại và lưu lại những sự thay đổi của các file theo thời gian, để có thể phục hồi hoặc khôi phục code về một thời điểm trước đó.

> Khi project lớn cần nhiều người tham gia thì VCS còn giúp kiểm soát xem những ai đã thay đổi file code, thay đổi những cái gì, vào lúc nào. Tránh các trường hợp vào vào sửa code lung tung, lúc hỏng thì không ai nhận

## Git

> Git là một trong những hệ thống VCS

> Ưu điểm của Git: tốc độ nhanh, đơn giản, phân tán, phù hợp với cả dự án lớn và dự án cá nhân.

> Git lưu trữ các commit dưới dạng các ảnh chụp (snapshot) của tập hợp các file. Khi thực hiện commit thì Git tiến hành chụp lại hệ thống các file tại thời điểm đó và lưu giữ ảnh chụp đó tại chính thời điểm chụp

> Các thao tác với Git hầu như đều diễn ra ở Local như thêm mới, chỉnh sửa,... Trừ commit lên server, Clone 1 file khác

> Các trạng thái file với Git:

- Modified: file có chỉnh sửa nhưng chưa được lưu trong database máy tính (local).
- Staged: file đã được add vào khu vực Staged và đang trong trạng thái chờ để commit.
- Committed: file đã được commit (được chụp lại) và lưu tring Database

> Các khái niệm cần biết khác khi làm việc với Git

- Github Acount
- Working tree
- Staging
- Local
- Remote
- Repository (repo)
- Con trỏ HEAD

# Các lệnh Git cơ bản cần phải biết

> Đây là những lệnh git dù làm dự án cá nhân hay nhóm thì cũng cần phải nắm rõ

> Trước khi nhập các lệnh git này, trong terminal cần phải truy cập đến file trực tiếp chứa sourcecode của project.

## 1. git config - cấu hình git

> Đây là lệnh git liên kết git trên local và Github acount, lệnh này chỉ thực hiện 1 lần khi vừa install Git tại local

> Liên kết username Github acount

```
    git config --global user.name "(usename)"
```

> Liên kết email Github acount

```
    git config --global user.email emailcuaban@domain.com
```

> Hiển thị các tham số khi thiết lập Git

```
    git config --list
```

## 2. git init - Khởi tạo thư mục

    Dùng để khởi tạo kho chứa git mới. Báo với Git là ở đây tao sẽ dùng Git để quản lý code của mình, báo cho nó điều 1 thằng sang quản lý code cho

> Cú pháp

```
    git init
```

## 3. git add - chuẩn bị commit

> Lệnh git add dùng để lựa chọn các thư mục để chuẩn bị commit (snapshot).

> Khi thực hiện lệnh này các thư mục có thay đối sẽ được chuyển sang khu vực Staging (khu vực chờ để commit)

> Cú pháp

- Chọn một số file cần Add

```
   git add file1 file2 file3...
   Ex:
   git add index.html about.html main.js
```

- Lựa chọn tất cả những file có thay đổi

```
   git add --all

   hoặc

   git add -A

   hoặc

   git add .
```

## 4. git status - kiểm tra trạng thái các thư mục

> Hiển thị thông tin khác nhau (thêm mới, sửa, xóa các file) giữa các file

> Cú pháp

- Hiển thị đầy đủ thông tin

```
    git status
```

- Hiển thị ngắn gọn thông tin

```
    git status -s
```

Các ký hiệu - '' = unmodified (không đổi) - M = modified (có sửa đổi) - A = added (file mới thêm) - D = deleted (file bị xóa) - R = renamed (đổi tên file) - C = copied (file copy từ file khác) - U = update but unmerged ( đã cập nhật nhưng chưa merge(merge giải thích phần nâng cao))

## 5. git commit - đưa file vào Git

> Git commit thực hiện chụp ảnh lại các thay đôi và lưu tất cả các thay đổi trong khu vực Staging vào CSDL của Git kèm theo một đoạn message mô tả sự thay đổi này so với bản commit trước đó

> Nếu commit mà không thêm message mô tả sự thay đổi thì git sẽ báo lỗi

> Cú pháp

- Thực hiện commit đơn giản

```
    git commit -m "Ghi chú về commit"
```

- Có thể thực hiện gộp 2 lệnh git add và git commit

```
    git commit -a -m "ghi chú về commit"
```

- Nếu như chưa push commit đó lên repo thì có thể sửa thông tin commit, message mô tả.

```
    git commit --amend -m "thông tin về commit"
```

> Chú ý:

    - Sửa lỗi "non-fastforward": xảy ra khi chưa đồng thay đổi từ repo và local. Có nghĩa là khi tham gia vào dự án nhiều người, khi mình tải về ở một thời điểm và làm việc với commit đó thì trong thời gian mình đang làm việc lại có người khác commit một bản mới lên, nếu như chưa đồng bộ bản mới này và bản mình đang làm việc thì sẽ gặp lỗi "non-fastforward"

    - Để sửa lỗi này thì cần dùng lệnh " git fetch sau đó commit một lần mới bằng git commit --amend -m "something"

## 6. git reset - undo

> git reset dùng để undo, hủy commit cuối hoặc hủy đưa thay đổi vào vùng staging

### git reset để hủy commit cuối

> git reset với tham số --soft

- Hủy commit cuối, con trỏ HEAD sẽ chuyễn về commit cha. Đồng thời những thay đổi của commit cuối sẽ được đưa vào vùng staging để có thể commit lại hoặc sửa đối

- Cú pháp:

```
    git reset --soft HEAD~1
```

> git reset với tham số --hard

- Kết quả giống với dùng --soft, chỉ có một khác biệt là nội dung thay đổi của commit cuối cùng sẽ bị hủy luôn mà không đưa vào Staging

- Cú pháp:

```
    git reset --hard HEAD~1
```

### git reset để hủy git add

- Lệnh này tương đương với git reset có tham số --mixed. Vì --mixed là giá trị default của git reset
- Nếu đã dùng git add để cập nhật thay đổi vào vùng Staging thì có thể undo thao tác này bằng lệnh:

```
    git reset
```

### git reset để hủy đưa một file vào Staging

- Nếu chỉ muốn undo một file nào đó trong Staging chứ không phải toàn bộ thì dùng lệnh:

```
    git reset --filename
```

## 7. git remote - liên kết tới remote repo

> Tạo, xem, xóa liên kết giữa local repo và remote repo trong git

> Liệt kê các liên kết

```
    git remote

    //liệt kê chi tiết hơn

    git remote -v
```

> Tạo một liên kết mới

    - remote-name: tên của remote
    - url: là đường link tới repo

```
    git remote add (remote-name) (url)
```

> Đổi tên địa chỉ remote

```
    git remote rename ten-cu ten-moi
```

> Xem thông tin về remote

```
    git remote show origin
```

## 8. git push - đẩy commit lên remote repo

> Dùng để đẩy các commit mới ở local repo lên server (remote repo). Commit sẽ được đẩy lên branch mà con trỏ HEAD đang trỏ tới

> Các tham số hay dùng với git push

    --all: đẩy tất cả các nhánh lên server
    --tags: đẩy tất cả các tag lên server
    --delete: xóa một nhánh chỉ ra trên server
    -u đẩy và tạo một upstream(luồng upload tương ứng với nhánh của local), hay sử dụng cho lần đầu đẩy lên server

> Sử dụng git push

- Đẩy commit lên Server lần đầu tiên:

  Nếu đây là lần đầu tiên đẩy Local Repo lên Remote Repo mới khởi tạo thì cần tạo một luồng kết nối, upstream giữa local và remote. VD: đẩy lên remote có tên là origin và tạo upstream cho nhánh master

```
    git push -u origin master
```

- Đẩy commit lên server

```
    git push

    //Hoặc đẩy một nhánh cụ thể

    git push origin beta      //đẩy nhánh beta lên remote origin
```

- Đẩy tất cả các nhánh ở local lên server có tên remote là origin

```
    git push origin --all
```

    - Xóa một nhánh trên remote repo

```
    // Xóa nhánh beta trên remote có tên origin

    git push origin --delete beta

```

# Các lệnh Git nâng cao, cần thiết khi làm nhiều người

## 1. git merge và git rebase

> Dùng để gộp và viết lại lịch sử commit

### Git merge

> Dùng để gộp nhánh này vào nhánh khác. Khi gộp nhánh git thường căn cứ vào 3 commit để tạo ra một commit gộp, lịch sử tạo ra commit theo thời gian sẽ không bị thay đổi

- Ví dụ con trỏ HEAD đang trỏ vào nhánh master và muốn gộp các commit trong nhánh beta vào nhánh master

```
    git merge beta
```

EX: - Nhánh beta: C1 --> C2 --> C3 --> B1 -------> B2 - Nhánh master: C1 --> C2 -->C3 --> D1 --> D2

    Khi gộp nhánh beta vào nhánh master, dùng git merge ta được:
    C1 --> C2 --> C3 --> B1 --> D1 -->D2 -->B2 -->M (commit mới)

### Git rebase

> Cũng dùng để gộp các commit từ nhánh này vào nhánh khác, bằng cách xây dựng lại các commit base kế thừa từ nhánh khác và viết lại lịch sử commit sau các commit cơ sở mới

```
    git rebase beta
```

giải thích: - Nhánh beta: C1 --> C2 --> C3 --> B1 -------> B2 - Nhánh master: C1 --> C2 -->C3 ----> D1 --> D2

    Khi gộp nhánh beta vào nhánh master, dùng git merge ta được:
    C1 --> C2 --> C3 --> B1 -->B2 -->D1' --> D2  (commit mới)

> git rebase sẽ đưa toàn bộ các nhành beta nhánh beta làm base của master, do vậy các commit tiếp theo sau commit cơ sở của master sẽ được nối tiếp vào, trong đó có thay đổi lịch sử commit, xử lý xung đột giữa B2 và D1 để viết lại commit D1 thành D1'

> Lưu ý

    -  git rebase nên dùng trên branch riêng, nó sẽ đẩy lịch sử commit của branch đó nên, lịch sử commit sẽ tách biệt hắn với những commit từ branch khác, tiện cho quản lý các branch.
    - Cả rebase và merge sẽ bị lỗi conflict nếu không update code thường xuyên
    - git merge làm cho git commit list dài ra.

## 2. git fetch và git pull

> Cả hai lệnh đều được dùng để đồng bộ dữ liệu thay đổi từ remote repo về local repo

### git fetch

> update những thay đổi mới nhất ở tất cả các branch từ remote repo về máy

> Những dữ liệu được tải về này chưa chưa áp dụng ngay về local nhưng có thể dùng các lệnh git khác để xem sự thay đổi

> git fetch không cập nhật dữ liệu của working copy. Nghĩa là nếu có bất cứ thay đổi nào trên remote server thì cũng không ảnh hưởng đến các tập tin trên local mà nó chỉ update thêm những thay đổi trên remote repo để thực hiện các lệnh tiếp theo

> Cú pháp

    - Đồng bộ trên tất cả các nhánh

```
    git fetch
```

    - Đồng bộ trên tất cả các nhánh của remote có tên origin

```
    git fetch remote-name
```

    - Đồng bộ thông tin của một nhánh

```
    git fetch origin master
```

### git pull

> Cập nhật những commit mới từ remote về local và lưu các thay đổi này vào thư mục và tập tin ở working copy

> Nghĩa là các tập tin ở local sẽ bị thay đổi

> git pull có thể gây ra xung đột trong khi merge

> Cú pháp

```
    git pull

    //hoặc chỉ rõ remote

    git pull origin
```

- lệnh git pull origin sẽ tải về thông tin và ngay lập tức merge cho nhánh đang làm việc, nó tương đương với

```
    git fetch origin
    git merge origin/master
```

### So sanh git fetch và git pull

> Git pull sẽ tải về (fetch) dữ liệu từ branch từ remote server và sau đó sẽ merge các thay đổi từ remote này vào repository dưới local

> Git fetch thì ngược lại, nó sẽ tải về (fetch) dữ liệu của branch nhưng không thực hiện merge các thay đổi này vào local

## 3. git diff

> Dùng để xem sự thay đổi giữa các commit với nhau

```
        git diff <index-commit1> <index-commit2>

        Ex:

        git diff a47c3 da985
```

## 4. git log

> Dùng để liệt kê ra lịch sử các commit trên branch mà con trỏ HEAD đang trỏ tới

- Cú pháp git log `-<n>`

```
    git log
```

- Hiển thị mỗi commit trên một dòng

```
   git log --oneline
```

## 5. git clone

> Tải về một project trên một repo có sẵn đường link

> Cú pháp

```
   git clone <url>
```
