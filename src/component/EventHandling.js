function onButtonClick() {
  alert("button clicked");
}

return (
  <div>
    <button onClick={onButtonClick}>Click Me</button>
    <button
      onClick={() => {
        //anonmyus fun.
        alert("hello");
      }}
    >
      Click Me
    </button>
  </div>
);
