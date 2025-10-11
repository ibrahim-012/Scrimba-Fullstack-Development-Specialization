import http from 'node:http'

const PORT = 8000


const server = http.createServer( (req, res)=> {
  res.write('This is some data \n')
  res.write('This is some more data \n')
  res.end()

  /*
  // res.end('This is from the server', 'utf8', ()=> console.log('response end'))

  // res.end() method takes 3 parameters:
  // 1. data to send (string or buffer)
  // 2. encoding (optional, default is 'utf8')
  // 3. callback function (optional, called when response is finished)

  // res.write() method can be called multiple times to send data in chunks
  // res.end() method signals that all data has been sent and ends the response

  // If you call res.end() without any data, it will just end the response
  // If you call res.end() with data, it will send that data and then end the response

  // res.end() must be called to end the response, otherwise the browser will not know that the response has ended
  */
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
