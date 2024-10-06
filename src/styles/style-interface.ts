export interface ThemeProps {
    src?: string;
    d?: string; //d -> display
    w?: string; //w -> width
    h?: string; //h -> height
    pos?: string; //pos -> position
    right?: string; //right -> right (for absolute position)
    left?: string; //left -> left (for absolute position)
    top?: string; //top -> top (for absolute position)
    bottom?: string; //bottom -> bottom (for absolute position)
    ff?: string; //ff -> fontFamily
    fs?: string; //fs -> fontSize
    fw?: string; //fw -> fontWeight
    lh?: string; //lh -> lineHeight
    ta?: string; //ta -> textAlign
    jc?: string; //jc -> justifyContent
    ai?: string; //ai -> alignItems
    aself?: string; //aself -> alignSelf
    ls?: string; //ls -> letterSpacing
    c?: string; //c -> color
    b?: string; //b -> border
    bgc?: string; //bgc -> backgroundColor
    m?: string; //m -> margin
    mr?: string; //mr -> marginRight
    mt?: string; //mt -> marginTop
    mb?: string; //mb -> marginBottom
    ml?: string; //ml -> marginLeft
    p?: string; //p -> padding
    pt?: string; //pt -> paddingTop
    pr?: string; //pr -> paddingRight
    pb?: string; //pb -> paddingBottom
    pl?: string; //pl -> paddingLeft
    br?: string; //br -> borderRadius
    bb?: string; //bb -> borderBottom
    bc?: string; //bc -> borderColor
    zi?: string; //zi -> zIndex
    bs?: string; //bs -> boxShadow
    flex?: string; //flex -> flex
    gap?: string; //gap -> gap
    bt?: string; //bt -> border-top
    maxW?: string; // maxW-> max-width
    maxH?: string; //maH-> max-height
    flexGrow?: string; //flexGrow
    minH?: string; //minimum height
    ar?: string; //aspect-ratio
    tw?: string; //text-wrap
    //grid
    gridTemplateColumns?: string; //gridTemplateColumns -> grid-template-columns
    gridColumn?: string; //gridColumn -> grid-column
    oflx?: string; //oflx -> overflowX
    ofly?: string; //ofly -> overflowY
    opac?: string; //opac -> opacity
    maxw?: string; //maxw -> maxWidth
    bg?: string; // background
    fd?: string; // flex direction

    // CUSTOM
    hoverable?: boolean; //hoverable -> Mouse cursor mods based on boolean
    hoverbgc?: string; // background color if hovered - button specific
    focusbgc?: string; // background color if button clicked and is in focus - button specific
    flexd?: string; //flexd -> flexDirection (For Flex Components)
    bgurl?: string; //bgurl -> backgroundUrl
    bgrepeat?: string; //bgrepeat -> backgroundRepeat;
    bgpos?: string; //bgpos -> backgroundPosition
    noPointer?: boolean; //noPointer -> cursor : default;
    hide?: boolean | string; //hide -> display : none;
    contentBdr?: string; // Antd Modal Cotent Border
    contentBgc?: string; // Antd Modal Content Background Color
    bodyH?: string; // Antd Modal Body Height
    fi?: string; //filter

    // Component Custom
    square?: boolean | string; // If ANTD card used is square or not
}
