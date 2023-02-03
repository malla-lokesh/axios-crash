<<<<<<< HEAD
// AXIOS GLOBALS
axios.defaults.headers.common['loki-Auth'] = 'lokiToken'

// GET REQUEST
function getTodos() {
  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos'
  // })
  // .then(res=>console.log(res.data))
  // .catch(err=>console.log(err))

  axios
  .get('https://jsonplaceholder.typicode.com/todos', { timeout: 5 })
  .then(res=>showOutput(res))
  .catch(err=>console.log(err))
=======
// GET REQUEST
function getTodos() {
  console.log('GET Request');
>>>>>>> 9384eed06232bd79d9aab43f4fdf7458af6619cc
}

// POST REQUEST
function addTodo() {
<<<<<<< HEAD
  // axios({
  //   method: 'post',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   data: {
  //     title: 'New Todo',
  //     completed: true
  //   }
  // })
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: 'New ToDo',
    completed: false
  })
  .then(res => showOutput(res))
  .catch(err => console.error(err))
=======
  console.log('POST Request');
>>>>>>> 9384eed06232bd79d9aab43f4fdf7458af6619cc
}

// PUT/PATCH REQUEST
function updateTodo() {
<<<<<<< HEAD
  // Put
  // axios.put('https://jsonplaceholder.typicode.com/todos/1', {
  //   title: 'Updated ToDo',
  //   completed: true
  // })
  // .then(res => showOutput(res))
  // .catch(err => console.error(err))

  // Patch
  axios.put('https://jsonplaceholder.typicode.com/todos/1', {
    title: 'Updated ToDo',
    completed: true
  })
  .then(res => showOutput(res))
  .catch(err => console.error(err))
=======
  console.log('PUT/PATCH Request');
>>>>>>> 9384eed06232bd79d9aab43f4fdf7458af6619cc
}

// DELETE REQUEST
function removeTodo() {
<<<<<<< HEAD
  axios.delete('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => showOutput(res))
  .catch(err => console.error(err))
=======
  console.log('DELETE Request');
>>>>>>> 9384eed06232bd79d9aab43f4fdf7458af6619cc
}

// SIMULTANEOUS DATA
function getData() {
<<<<<<< HEAD
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  ])
  .then(axios.spread((todos, posts) => {
    showOutput(posts)
  }))
  // .then(res => {
  //   console.log(res[0])
  //   console.log(res[1])
  //   showOutput(res[1])
  // })
  .catch(err => console.log(err))
=======
  console.log('Simultaneous Request');
>>>>>>> 9384eed06232bd79d9aab43f4fdf7458af6619cc
}

// CUSTOM HEADERS
function customHeaders() {
<<<<<<< HEAD
  const config = {
    headers: {
      'Content-Type': 'application/JSON',
      Authorization: 'randomToken'
    }
  }

  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: 'New ToDo',
    completed: false
  }, config)
  .then(res => showOutput(res))
  .catch(err => console.error(err))
=======
  console.log('Custom Headers');
>>>>>>> 9384eed06232bd79d9aab43f4fdf7458af6619cc
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
<<<<<<< HEAD
  const options = {
    method: 'post', 
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello World',
      completed: true
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.completed = false
      return data
    })
  }

  axios(options).then(res => showOutput(res))
=======
  console.log('Transform Response');
>>>>>>> 9384eed06232bd79d9aab43f4fdf7458af6619cc
}

// ERROR HANDLING
function errorHandling() {
<<<<<<< HEAD
  axios
  .get('https://jsonplaceholder.typicode.com/todoss', {
    validateStatus: function(status) {
      return status < 500 // Reject only if status is greater than or equal to 500
    }
  })
  .then(res=>showOutput(res))
  .catch(err=>{
    if(err.response){
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)

      if(err.response.status===404){
        alert('Error: Page Not Found')
      }
      else if(err.request){
        // Request was made but there is no response
        console.error(err.request)
      }
      else{
        console.error(err.message)
      }
    }
  })
=======
  console.log('Error Handling');
>>>>>>> 9384eed06232bd79d9aab43f4fdf7458af6619cc
}

// CANCEL TOKEN
function cancelToken() {
<<<<<<< HEAD
  const source = axios.CancelToken.source()

  axios
  .get('https://jsonplaceholder.typicode.com/todos', {
    cancelToken: source.token
  })
  .then(res => showOutput(res))
  .catch(thrown => {
    if(axios.isCancel(thrown)){
      console.log('Request Cancelled', thrown.message)
    }
  })

  if(true){
    source.cancel('Request Cancelled')
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// AXIOS INSTANCES
const axiosInstance = axios.create({
  // can have other custom settings.
  baseURL: 'https://jsonplaceholder.typicode.com'
})

// axiosInstance.get('/comments').then(res => showOutput(res))
=======
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES
>>>>>>> 9384eed06232bd79d9aab43f4fdf7458af6619cc

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
