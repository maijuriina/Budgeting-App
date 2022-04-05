import "./Card.css";

// by passing props and referencing props.children, it is possible to use the Card as a wrapper component
function Card(props) {
  const classes = "card " + props.className; // enables use of classname on Card, using {classes} on returning div
  return <div className={classes}>{props.children}</div>;
}

export default Card;
