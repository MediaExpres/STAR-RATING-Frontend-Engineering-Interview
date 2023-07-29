
const StarRating = () => {
    const maxRating = 5;
    return (
        <div>
            {
                [...Array(5)].map((_, index) => <p key={index}>{index + 1}</p>) // the stars
            }
        </div>
    )
}

export default StarRating;