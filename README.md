## Quick Start

```js
import useFetch from 'react-axios-data';

const { data, error } = useFetch({url :'',method: '', body: {}, headers: {}, params: {}});

*Note: Required Parameter --> url,method
```

## Installation

```console
$ npm i react-axios-data
```

# Example

You can add default base url to your project

     - axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

## GET

```js
const { data, error } = useFetch({ url: "/posts", method: "get" });
```

## CREATE

```js
const { data, error } = useFetch({
  url: "/posts",
  method: "post",
  body: { title: "foo", body: "bar", userId: 1 },
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
```

## UPDATE

```js
const { data, error } = useFetch({
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
});
```

## PATCH

```js
const { data, error } = useFetch({
  url: "/posts/1",
  method: "patch",
  body: {
    title: "foo",
  },
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
```

## DELETE

```js
const { data, error } = useFetch({ url: "/posts/1", method: "delete" });
```

## Filtering

```js
const { data, error } = useFetch({
  url: "/posts",
  method: "get",
  params: { userId: 1 },
});
```

Made with <span style="color: #e25555;">&hearts;</span> by [Himanshu](https://github.com/hklohani)
