export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 200))

  return <h1>Hello world</h1>
}
