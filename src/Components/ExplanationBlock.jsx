
const ExplanationBlock = ({title, children}) => {
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
            {children}
        </div>
    )
}

export default ExplanationBlock