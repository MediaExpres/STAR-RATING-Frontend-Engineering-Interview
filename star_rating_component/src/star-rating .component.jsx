import '.star-rating.styles.css'

const starRating = () => {
    const maxRating =5;

    return (
        <div className='star-rating-container'>
        {
            [...Array(5)].map((_, idx) => <p key={idx}>{idx + 1}</p>)
        }
        </div>
    )

}

export default starRating