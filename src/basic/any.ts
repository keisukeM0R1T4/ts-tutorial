export default function anySample() {
  let name: any = 'Keisuke' //string型を代入
  console.log('any sample 1:', typeof name, name)

  name = 20
  console.log('any sample 2:', typeof name, name)
}
