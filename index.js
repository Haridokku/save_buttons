const Button = (props) => {
  //  Write your code here.
  const { name, decorate } = props;
  return <button className={`button ${decorate}`}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <h1 className="head1">Social Buttons</h1>
    <div className="buttonContainer">
      <Button name="Like" decorate="s1" />
      <Button name="Comment" decorate="s2" />
      <Button name="Share" decorate="s3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
