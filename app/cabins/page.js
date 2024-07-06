import Counter from "../components/Counter";
import Test from "../components/test";

export default async function Cabins() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  // console.log(data);

  return (
    <div className="bg-red-400">
      <h3>Cabins</h3>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Counter />
      <Test />
    </div>
  );
}
