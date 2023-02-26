import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PageFAQDisplayQuestionsSection } from "./PageFAQDisplayQuestionsSection";
import { PagehomeHerosectionRecord } from "./PagehomeHerosectionRecord";
import { SEOBlock } from "./SeoBlock";

export const cmsSections = {
  PagefaqDisplayquestionSectionRecord: PageFAQDisplayQuestionsSection,
  CommonSeoBlockRecord:(props) => <SEOBlock {...props}/>,
  CommonMenuRecord:(props) => <Menu {...props}/>,
  PagehomeHerosectionRecord: PagehomeHerosectionRecord,
  CommonFooterRecord:(props) => <Footer {...props}/>
}
