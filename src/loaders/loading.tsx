import { StyledLoaderWrapper } from "../styles/style-one";

function Loading() {
    return (
        <StyledLoaderWrapper>
            <div id="loader">
                <div></div>
                <div className="loader-tag-line">Loading...</div>
            </div>
        </StyledLoaderWrapper>
    );
}

export default Loading;
