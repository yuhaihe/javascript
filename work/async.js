function main() {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle()
    }, 10 * 1000)
  })
}

async function fun () {
  console.time()
  let x =  main()
  let y =  main()
  let z =  main()
  await x
  await y
  await z
  console.timeEnd()
}
fun()