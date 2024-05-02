
const ExplanationBlock = ({title, description, ...props}) => {

    return (
        <div
            style={{
                padding: 0
                
            }}
        >
            <h3
                style={{
                    marginTop: 0,
                    padding: 0
                }}
            >
                {title}
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default ExplanationBlock