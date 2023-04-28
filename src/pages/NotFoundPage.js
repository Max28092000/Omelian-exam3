import { Link } from "react-router-dom";

function NotFoundPage() {
    return(
        <div className="container">
            <h2>This page does not exist</h2>
            <div>
                <Link to="/">Home page</Link>
            </div>
        </div>
    )
}

export { NotFoundPage };