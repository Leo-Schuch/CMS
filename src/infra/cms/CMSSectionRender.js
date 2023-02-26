import { cmsSections } from "../../components/cmsSections"
import { getCMSContent } from "./CMSProvider"

export function CMSSectionRender({ pageName }){
  const sections = getCMSContent(`${pageName}.pageContent[0].section`)
  return sections.map((sectionProps) => {
    const Component = cmsSections[sectionProps.componentName];

    if(!Component) return null;

    return (
        <Component key={sectionProps.id} {...sectionProps}/>
    )
  } )
}
