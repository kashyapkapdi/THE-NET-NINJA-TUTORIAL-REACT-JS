function App() {
  let title = "Welcome the new blog.";
  let person = { name: "Kashyap", age: 19 };
  let googleLink = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        {/* if you pass full object that can not work so we want pass object key */}
        <p>{person.name}</p>
        <p>{123}</p>
        <p>{"kashyap"}</p>
        <p>{[1, 2, 3, 4, 5, 6]}</p>
        {/* if want to pass dynamic value in any attribute than we will assign value like below */}
        <a href={googleLink}>Google Link</a>
      </div>
    </div>
  );
}

export default App;
