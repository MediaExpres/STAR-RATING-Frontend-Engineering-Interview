import '.star-rating.styles.css'

const starRating = () => {
    const maxRating =5;

    return (
        <div className='star-rating-container'>
        {
            [...Array(5)].map((_, idx) => {
                const ratingValue = idx + 1;
                return <p key={idx}>{ratingValue}</p>
        })
        }
        </div>
    

}

export default starRating