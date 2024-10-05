import { StyledLoaderWrapper } from "../styledComponent/style-one";

function Loading() {
  return (
    <StyledLoaderWrapper>
      <div id="credflow-loader">
        <div></div>
        <div className="loader-tag-line">Making SMEs Cash Rich.</div>
      </div>
    </StyledLoaderWrapper>
  );
}

export default Loading;
