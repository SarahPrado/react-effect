export const Card = (props) => {
    let titleCard = props.cardTitle
    let textCard = props.cardText
    let imgCard = props.cardImg
    // console.log(titleCard);
    // console.log(textCard);
    // console.log(imgCard);
    
  return (
    <div className="col">
        <div className="card">
            <img src={imgCard} alt="" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{titleCard}</h5>
                <p className="card-text">{textCard}</p>
            </div>
        </div>
    </div>
  )
}
