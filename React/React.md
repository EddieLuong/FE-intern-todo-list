# 1. Function conponent và class component

## Function component

> là một hàm trong JS trả về một phần tử/ element React
> Funtionc conponent là có thể nhận một props làm tham số nếu cần.

- Ví dụ :

```
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
```

> Function component còn được gọi là stateless component vì chúng không có nhiều thứ phức tạp như state (để quản lý data) hoặc phương thức life-cycle trong funtion component

## Class (Stateful) component

> Các class component là những Class trong ES6. Nó phức tạp hơn function components vì cần có phương thức khởi tạo, life cycle, hàm render() và quản lý state (data)

Ví dụ

```
  import React, {Component} from "react";

  class ExampleComponent extends Component {

    render(){
      return (
        <div> This is an example component </div>
      )
    }
  }
  export default ExampleComponent;
```

> Note:

- Là một class trong ES6, nó sẽ là một component khi nó kế thừa React Component
- Có thể nhận props (trong hàm khởi tạo) nếu cần qua "this.props"
- Dùng State để lưu trữ dữ liệu
- Phải có 1 method render() trả về một React element (JSX)

# 2. JSX

> JSX - Javascript and XML là một cú pháp mở rộng để có thể viết HTML trong React dễ hơn. React dùng JSX để return HTML thay vì phải dùng JS thông thường

> Dung JS thông thường: sử dụng createElement() hoặc appendChild()

```
    const myelement = React.createElement('h1', {}, 'I do not use JSX!');

    ReactDOM.render(myelement, document.getElementById('root'));
```

> Sử dụng JSX

```
  const myelement = <h1>I Love JSX!</h1>;

  ReactDOM.render(myelement, document.getElementById('root'));
```

> JSX còn hỗ trợ đặt các biến dễ dàng trong dấu "{}"

```
    import React from 'react';

    class App extends React.Component {
      let title = "Header";

      render() {

          return (

            <div>

                <h1>{title}</h1>

                <h2>Content</h2>

                <p data-myattribute = "somevalue">This is the content!!!</p>

            </div>

          );

      }

    }

    export default App;

```

# 3. Các Hook thường dùng

## useState hook

> Hook này dùng để quản lý các state (thông tin/dữ liệu) của component thay vì phải đặt ra một biến state như class component

> Cú pháp sử dụng :

```
``const [state, setState] = useState(initValue)
```

- state là biến chứa thông tin/ dữ liệu, giống state ở class component
- setState là method để đặt lại giá trị cho state, sau khi đặt lại thì component App() sẽ tự động được render lại
- initValue là giá trị khởi tạo được chuyền cho state

```
    import React, { useState } from 'react';

    function Example() {
      //Sử dụng useState khai báo một biến "count"
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
```

## useEffect hook

> Dùng để gộp logic các lifeCycle method như componentDidMount, ComponentDidUpdate, componentWillUnmount thành một.

```
    import React, { useState, useEffect } from 'react';

    function Example() {
      const [count, setCount] = useState(0);

      // Similar to componentDidMount and componentDidUpdate:
      useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }

```

> Cách sử dụng useEffect

- useEffect thường được dùng sau khi setState, sau khi setState thì sẽ lấy dữ liệu từ State đó và gửi nó lên API hoặc thao tác với nó
- callback được gọi ngay sau khi component mounted

### Các loại useEffect

> useEffect(callback )

- Gọi lại callback sau khi component được re-render/ setState lại
- Gọi callback sau khi component thêm element vào DOM(mounted)
- Nếu đặt setState vào useEffect(callback) thì sẽ tạo ra 1 vòng lặp vô hạn

> useEffect(callback, [])

- callback trong useState chỉ được gọi duy nhất 1 lần sau khi re-render, k có lần thứ 2
- Dùng để render giao diện cho màn hình lần đầu tiên

> useEffect(callback, [dependencies])

- callback được gọi lại mỗi khi dependencies được setState lại

> Cleanup trong useEffect

- Hàm Cleanup sẽ được gọi khi component được Unmount

```
    import React, { useState, useEffect } from 'react';

    function FriendStatus(props) {
      const [isOnline, setIsOnline] = useState(null);

      function handleStatusChange(status) {
        setIsOnline(status.isOnline);
      }

      useEffect(() => {
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
          ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
      });

      if (isOnline === null) {
        return 'Loading...';
      }
      return isOnline ? 'Online' : 'Offline';
    }
```

# 4. Props và state

## Props

> Viết tắt của Properties

> Khi gọi một component trong một component khác thì ta có thể truyền các thuộc tính cho component được gọi đó và component cha sẽ nhận được những props đó như những tham số của hàm hoặc biến
> Sử dụng props để set các thuộc tính cho component, tránh set cứng, component có thể được render ra nhiểu kiểu UI khác nhau tùy vào thuộc tính được set

- Function component

```
    function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
    }
```

- class component

```
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }
```

> Có thể truyền cả biến hoặc một hàm qua props

## State

> State cũng dùng để lưu trữ thông tin về component. Tuy nhiên khác với props, state là một thành phần của component không thể truyền ra ngoài, trong khi đó props có thể truyền giá trị khi được gọi.
> Sử dụng State khi cần thay đổi dữ liệu trong component và sau khi thay đổi cần re-render và thay đổi UI

> Dùng state trong class component

```
    class Form extends React.Component {
      constructor (props) {
        super(props)
        this.state = {
          input: <<
        }
      }
    handleChange = (text) => {
        this.setState({ input: text })
      }

      render () {
        const { input } = this.state
        return (
        <div>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </div>
          )
        }
    }

```

# 5. Khi nào React sẽ re-render

> React sẽ re-render sau khi thực hiện setState

> Sử dụng useEffect

> useEffect(callback )

    - Gọi lại callback sau khi component được re-render/ setState lại
    - Gọi callback sau khi component thêm element vào DOM(mounted)
    - Nếu đặt setState vào useEffect(callback) thì sẽ tạo ra 1 vòng lặp vô hạn

> useEffect(callback, [])

    - callback trong useState chỉ được gọi duy nhất 1 lần sau khi re-render, k có lần thứ 2
    - Dùng để render giao diện cho màn hình lần đầu tiên

> useEffect(callback, [dependencies])

    - React sẽ render lại mỗi khi dependencies có thay đổi
    - callback được gọi lại mỗi khi dependencies được setState lại

# 6. Use setState as variable/function

> Truyền một giá trị vào setState được sử dụng khi ta chỉ muốn cập nhật giá trị của state và muốn thay đổi ở UI mà không liên quan gì đến giá trị trước đó

```
    import React, { useState } from 'react';

    function Example() {

      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
```

> Truyền một function vào setState khi chúng ta cần thực hiện nhiều hành động khác nhau sau đó mới lấy giá trị return của hàm làm giá trị mới cho state hoặc cần sử dụng đến giá trị của state cũ

Ví dụ

```
    import React, { useState } from 'react';

    function Example() {

      const [increase, setIncrease] = useState(0);
      const dosomething = (prevValue) =>{
        let a =1;
        let b = 2;
        console.log(a+b);
        return a+b;
      }
      return (
        <div>
          <p>{increase}</p>
          <button onClick={() => setIncrease(dosomething)}>
            Click me
          </button>
        </div>
      );
    }
```

# 7. Event Handler

> Dùng để xử lý các sự kiện từ người dùng giống như trong DOM event nhưng có một vài điểm khác biệt

> React quy ước đổi tên các event theo quy tắc camelCase
> VD: onclick --> onClick, onfocus --> onFocus,...

```
    <button onClick={activateLasers}>
      Activate Lasers
    </button>
```

> React truyền JSX vào một function để handle event chứ không phải truyền một string

- Với HTML DOM

```
    <button onclick="activateLasers()">
      Activate Lasers
    </button>

```

- Với React

```
    <button onClick={activateLasers}>
      Activate Lasers
    </button>
```

> Có thể truyền tham số "event" của sự kiện đó vào trong hàm

```
      <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
      <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

```

# 8. Key trong React

> Key là một props đặc biệt trong React, props này chỉ được gán nhưng không thể lấy ra để sử dụng.

> Khi sử dụng vòng lặp để render ra UI nhiều element tương tự nhau thì React cần có thuộc tính "Key" để phân biệt giữa các element đó

```
    const todoItems = todos.map((todo) =>
      <li key={todo.id}>
        {todo.text}
      </li>
    );
```

> Các giá trị của Key phải là độc nhất (không lặp lại giữa các phần tử), nếu các phần tử có key giống nhau hoặc không được set key thì cửa sổ "console.log" sẽ đưa ra một cảnh báo

```
    const todoItems = todos.map((todo, index) =>
      // Only do this if items have no stable IDs
      <li key={index}>
        {todo.text}
      </li>
    );
```

> Lưu ý: không nên sử dụng tham số index trong Array.map để đặt làm Props key.

# 9. React router

> React sử dụng Single Page Application, do đó muốn chuyển qua lại giữa các trang (Ví dụ: Homepage, aboutpage, Contactpage,...) mà không cần reload lại toàn bộ trang thì cần phải sử dụng một bộ định tuyến giúp giao diện không thay đổi khi chuyển qua lại giữa các Page.

> React router là một thư viện định tuyến (routing) tiêu chuẩn của React. Nó giúp cho giao diện ứng dụng đồng bộ với URL trên trình duyệt

> Các thành phần trong React-Router thường dùng

- BrowserRouter

- Route: các thuộc tính hay dùng path(đường link trùng với to của Link tag), component(chuyển tới component nào khi click), exact(Chỉ hoạt động nếu URL trên trình duyệt giống y hệt giá trị path của nó)

```
    <Router>
        <div className="App">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound}/>
        </div>
    </Router>

```

- Link: là cặp thẻ điều hướng thay cho thẻ ` <a>`, trong React sẽ sử dụng thẻ Link, to giống như href trong thẻ a

```
    <Link to="/about">About</Link>
```
