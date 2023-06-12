interface Props {
  image: string;
  title: string;
  onClick: () => void;
  description: string;
}

export const CardEstablishment = ({
  image,
  title,
  onClick,
  description,
}: Props) => {
  return (
    <div className="card" style={{ width: "14rem", margin: '12px'}}>
      <img src={image ? image : "https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg"} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a onClick={onClick} className="btn btn-primary">
        Learn more about
        </a>
      </div>
    </div>
  );
};
