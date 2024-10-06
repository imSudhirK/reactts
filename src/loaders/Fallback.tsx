import Loading from "./loading";
import { FallbackLoaderWrapper } from "../styles/style-one";

const FallBack = () => {
    return (
        <FallbackLoaderWrapper>
            <Loading />
        </FallbackLoaderWrapper>
    );
};

export default FallBack;
