import { CardEstablishment } from "../../components/CardEstablishment/CardEstablishment";

interface Props {
    /*Should change type here!! */
    itens: Array<any>;
    handleOpenModal: (id: String) => void;
}

export const CardsContainer = ({ itens, handleOpenModal } : Props) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {itens.map((e) => {
        return (
          <CardEstablishment
            image={e.image}
            title={e.title}
            onClick={() => handleOpenModal(e.id)}
            description={e.description}
          />
        );
      })}
    </div>
  );
};
