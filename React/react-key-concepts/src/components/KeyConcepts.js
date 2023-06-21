import KeyConcept from './KeyConcept';

const KeyConcepts = (props) => {
  return (
    <div>
      <ul id='concepts'>
        <KeyConcept items={props.items[0]} />
        <KeyConcept items={props.items[1]} />
        <KeyConcept items={props.items[2]} />
      </ul>
    </div>
  );
};

export default KeyConcepts;
