export function Item({ name, isPacked }) {
  return (
    <li className="item">{isPacked ? <del>{name + " ✅"}</del> : name}</li>
  );
}

export function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item isPacked={true} name="Traje de vuelo" />
        <Item isPacked={true} name="Casco con dorado a la hoja" />
        <Item isPacked={false} name="Fotografía de Tam" />
      </ul>
    </section>
  );
}

export function ItemLogic({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && "✅"}
    </li>
  );
}

export function PackingListLogic() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item isPacked={true} name="Traje de vuelo" />
        <Item isPacked={true} name="Casco con dorado a la hoja" />
        <Item isPacked={false} name="Fotografía de Tam" />
      </ul>
    </section>
  );
}
export function ItemSimple({ name, isPacked }) {
  let itencounter = name;
  if (isPacked) {
    itencounter = name + " ✅";
  }
  return <li className="item">{itencounter}</li>;
}

export function PackingListSimple() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item isPacked={true} name="Traje de vuelo" />
        <Item isPacked={true} name="Casco con dorado a la hoja" />
        <Item isPacked={false} name="Fotografía de Tam" />
      </ul>
    </section>
  );
}
