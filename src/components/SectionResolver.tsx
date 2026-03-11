import type { SectionConfig } from '../types/config';
import { HeroSection } from './sections/HeroSection';
import { FeaturedProductsSection } from './sections/FeaturedProductsSection';
import { StatsBarSection } from './sections/StatsBarSection';
import { PageHeaderSection } from './sections/PageHeaderSection';
import { ProductGridSection } from './sections/ProductGridSection';
import { UserCardSection } from './sections/UserCardSection';
import { ProfileDetailsSection } from './sections/ProfileDetailsSection';

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
const SECTIONS: Record<string, React.ComponentType<any>> = {
  hero: HeroSection,
  featuredProducts: FeaturedProductsSection,
  statsBar: StatsBarSection,
  pageHeader: PageHeaderSection,
  productGrid: ProductGridSection,
  userCard: UserCardSection,
  profileDetails: ProfileDetailsSection,
};

export function SectionResolver({ sections }: { sections: SectionConfig[] }) {
  return (
    <>
      {sections.map((section, i) => {
        const Component = SECTIONS[section.type];
        if (!Component) {
          console.warn(`Unknown section type: "${section.type}"`);
          return null;
        }
        return <Component key={section.type + '-' + i} {...section.props} />;
      })}
    </>
  );
}
