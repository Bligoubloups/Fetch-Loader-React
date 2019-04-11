Fetch-Loader-React
=======================

Fetch-Loader-React is a simple and lightweight React Component which allows you to display a custom loader while fetching assynchronously one or more requests.  

* Supports fetch api and axios
* Supports multiple ansynchronous fetches
* Requires React 16.8.0 or above

See an [example](https://jsfiddle.net/Bligoubloups/0bf248ce/22/) using multiple fetches with fetch api and axios.

## Installation

```
npm i fetch-loader-react
```

## How to use

```js
import FetchLoader from 'fetch-loader-react';
```

### Using Fetch API

```js
const fetchPromise1 = fetch('https://jsonplaceholder.typicode.com/todos/1'));
const fetchPromise2 = fetch('https://jsonplaceholder.typicode.com/todos/1'));
```
```js
<FetchData fetch={ [fetchPromise1, fetchPromise2] } type="json">
    {
        ({ loading, err, res }) => {
            if (loading) return <YourLoader />
            if (err) {
                console.error(err);
                return;
            }
            return <YourComponent res={res} />;
        }
    }
</FetchData>
```

### Using Axios

```js
const axiosPromise1 = axios.get('https://jsonplaceholder.typicode.com/todos/1'));
const axiosPromise2 = axios.get('https://jsonplaceholder.typicode.com/todos/1'));
```
```js
<FetchData fetch={ [axiosPromise1, axiosPromise2] }>
    {
        ({ loading, err, res }) => {
            if (loading) return <YourLoader />
            if (err) {
                console.error(err);
                return;
            }
            return <YourComponent res={res} />;
        }
    }
</FetchData>
```

## Props

| Name              | Type         | Values  | Description|
|:----              |:----          |:---- |:----|
| `fetch`           | `Object`     | `Promise` | The fetch or axios promise |
| `type`            | `String`      | `'json'`, `'text'`, `'blob'`, `'arrayBuffer'`, `'formData'` | The type of the fetched data. Must not be provided when using axios. |

## Authors
* Marc Leonetti
* Sven Mathieu