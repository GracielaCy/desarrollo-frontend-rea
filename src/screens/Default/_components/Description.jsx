import { useSelector } from "react-redux";

const Description = () => {
    const defaultState = useSelector(state => state.default);

    return (
        <>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <h4>{defaultState.name}</h4>
        </>
    );
};

export default Description;