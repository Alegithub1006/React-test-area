//import reactLogo from "../assets/react.svg";

export function Profile(props) {
  return (
    <>
      <Avatar
        data={{
          name: "alejandro",
          lastName: "gonzalez",
          age: 24,
        }}
        ci={1100668002}
      />
      <Avatarbreak
        data={{
          name: "alejandro",
          lastName: "gonzalez",
          age: 24,
        }}
        ci={1100668002}
      />
      <Avatarfixed
        data={{
          name: "alejandro",
          lastName: "gonzalez",
          age: 24,
        }}
        //ci={ci}
      />
      <AvatarPropagated
        data={{ ...props }}
        //ci={ci}
      />
      <Card>
        <h1>JSX anidando el hijo dentro de un componente </h1>
        <p>
          puedes anidar tus propios componentes JSX en vez de tener que anidar
          las etiquetas nativas
        </p>
        <Avatar
          data={{
            name: "Componente: Card",
            lastName:
              "Anidado dentro de profile como \n <Cards>({Children})</Cards>",
            age: 24,
          }}
          ci={1100668002}
        />
      </Card>
    </>
  );
}

export function Avatar({ data, ci }) {
  return (
    <div>
      <h1>My Personal Data</h1>
      <p>
        {data.name} {data.lastName}
      </p>
      <p>{data.age}</p>

      <p>{ci}</p>
    </div>
  );
}

export function Avatarbreak(props) {
  let data = props.data.name;
  let ci = props.ci;
  return (
    <div>
      <h1>My Personal Data [props]-guardando las props en variables</h1>
      <h2>desestructurado</h2>
      <p>
        {data.name} {data.lastName}
      </p>
      <p>{data.age}</p>

      <p>{ci}</p>
    </div>
  );
}
export function Avatarfixed({
  data,
  ci = "el carnet es una prop fija no cambia y es 1006",
}) {
  return (
    <div>
      <h1>My Personal Data [props]fijas</h1>
      <h2>con las props fijas</h2>
      <p>
        {data.name} {data.lastName}
      </p>
      <p>{data.age}</p>

      <p>{ci}</p>
    </div>
  );
}
export function AvatarPropagated({
  data,
  ci = "el carnet es una prop fija no cambia y es 1006",
}) {
  return (
    <div>
      <h1>My Personal Data [props]</h1>
      <h2>props progagadas (...props)</h2>
      <p>
        {data.name} {data.lastName}
      </p>
      <p>{data.age}</p>

      <p>{ci}</p>
    </div>
  );
}

function Card({ children }) {
  return <div>{children}</div>;
}
