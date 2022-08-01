export default function callbackSample() {
  const url = 'https://api.github.com/users/keisukeM0R1T4'

  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        // レスポンスのbodyをJSONで読み取った結果を返す
        res
          .json()
          .then((json) => {
            console.log('Asynchronous Callback sample 1:', json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log('Asynchronous Callback sample 2:', profile)
}
