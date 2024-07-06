import Counter from "../components/Counter";

export default async function Cabins() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  console.log(data);

  return (
    <div>
      <h3>Cabins</h3>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Counter />
    </div>
  );
}
