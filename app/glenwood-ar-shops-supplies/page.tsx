import GlenwoodBusinessDirectoryPage from "@/components/businesses/GlenwoodBusinessDirectoryPage";
import { shoppingAndSuppliesPage } from "@/data/glenwoodBusinessDirectoryPages";

export const metadata = shoppingAndSuppliesPage.metadata;

export default function GlenwoodShopsAndSuppliesPage() {
  return <GlenwoodBusinessDirectoryPage {...shoppingAndSuppliesPage.props} />;
}
