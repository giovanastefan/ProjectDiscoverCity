import { CardEstablishment } from "../../components/CardEstablishment/CardEstablishment";
import { Establishment } from "../../types/Establishment";

interface Props {
  items: Array<Establishment>;
  handleOpenModal: (establishment: Establishment) => void;
}

export const CardsContainer = ({ items, handleOpenModal }: Props) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {items.map((e) => {
        return (
          <CardEstablishment
            image={e.image}
            title={e.name}
            onClick={() => handleOpenModal(e)}
            description={e.description}
            key={e.id}
          />
        );
      })}
    </div>
  );
};
