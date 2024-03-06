const Book = props => {
    return (
        <li key={props.id} className={"single-listing"}>
            <div className="book-container">
                <div className="image-box">
                    <img src={props.image} className="book-image" alt={props.title} />
                </div>
                <div className="book-details">
                    <div className={"title-box"}>
                        <p className={"title"}>{props.title}</p>
                    </div>
                    <div className={"price-box"}>
                        <p className={"price"}>${props.price}</p>
                    </div>
                    <div className={"description-box"}>
                        <p className={"description"}>{props.description}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Book;