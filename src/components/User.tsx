export async function User() {
  const response = await fetch("http://api.github.com/users/salvatoreDeploy");

  const user = await response.json();

  return (
    <div>
      <h1>Hello Word Next</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
