import Loading from "./loading";
import { FallbackLoaderWrapper } from "../styledComponent/style-one";

const FallBack = () => {
    return (
        <FallbackLoaderWrapper>
            <Loading />
        </FallbackLoaderWrapper>
    );
};

export default FallBack;
