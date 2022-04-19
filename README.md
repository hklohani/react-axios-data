## Quick Start

```js
import useFetch from 'react-axios-data';

const { data, error } = useFetch({url :'',method: '', body: {}, headers: {}, params: {}});

Note: Required Parameter --> url,method
```

## Installation

```console
$ npm i react-axios-data
          or
$ yarn add react-axios-data
```

## Example

**_NOTE:_**
> You can add default config for your project so that you don't have to pass these again and again.
```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
```
**_NOTE:_**
> **useAxiosFetch** &rarr; It will only support GET method and work as custom hooks for calling list of data on initial render.
> **manipulateAxiosData** &rarr; It returns Promise and support all methods.

### GET

```js
const { data, error } = useAxiosFetch({
  url: "/posts",
  params: { userId: 1 },
});

manipulateAxiosData({ url: "/posts", method: "get" }).then(
  ({ error, data }) => {}
);
```

### CREATE

```js
manipulateAxiosData({
  url: "/posts",
  method: "post",
  body: { title: "foo", body: "bar", userId: 1 },
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}).then(({ error, data }) => {});
```

### UPDATE

```js
manipulateAxiosData({
  url: "/posts/1",
  method: "put",
  body: {
    title: "foo",
    body: "bar",
    userId: 1,
  },
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}).then(({ error, data }) => {});
```

### PATCH

```js
manipulateAxiosData({
  url: "/posts/1",
  method: "patch",
  body: {
    title: "foo",
  },
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}).then(({ error, data }) => {});
```

### DELETE

```js
manipulateAxiosData({ url: "/posts/1", method: "delete" }).then(
  ({ error, data }) => {}
);
```

### Filtering

```js
manipulateAxiosData({
  url: "/posts",
  method: "get",
  params: { userId: 1 },
}).then(({ error, data }) => {});
```

Made with <span style="color: #e25555;">&hearts;</span> by [Himanshu](https://github.com/hklohani)
