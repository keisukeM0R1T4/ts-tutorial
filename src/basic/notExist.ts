export default function notExistSample() {
  let name = null
  console.log('notExist sample 1:', typeof name, name)

  name = 'Keisuke'

  if (name === null) {
    console.log('notExist sample 2:', '吾輩は猫である。名前はまだ' + name)
  } else {
    console.log('notExist sample 3:', '吾輩は猫である。名前は' + name)
  }

  let age = undefined
  console.log('noExist sample 4:', typeof age, age)

  age = 24
  if (!age) {
    console.log('notExist sample 5:', '年齢は秘密です')
  } else {
    console.log('notExist sample 6:', '年齢は' + age + 'です。')
  }
}
