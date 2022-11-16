import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="sort__filter-categories"
  speed={3}
  width={220}
  height={260}
  viewBox="0 0 220 260"
  backgroundColor="#f3f3f3"
  foregroundColor="#dedede"
  {...props}
  >
       <rect x="0" y="0" rx="12" ry="12" width="220" height="260" />
  </ContentLoader>
)
export default Skeleton;