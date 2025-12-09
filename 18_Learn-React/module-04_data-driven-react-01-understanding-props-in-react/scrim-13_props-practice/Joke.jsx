export default function Joke(props) {
    return (
        <>
            {/* Only render the punchline if it exists */}
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            
            <p className="punchline">Punchline: {props.punchline}</p>
            <hr />
        </>
    )
}