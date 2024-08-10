// #region Import Externals
import { useParams } from "react-router-dom";
// #endregion
// #region Import Internals
// #endregion

const Form = (): JSX.Element => {
    const { id } = useParams();
    return (
        <div>
            <h1>Form</h1>
            id: {id}
        </div>
    );
};

export default Form;
