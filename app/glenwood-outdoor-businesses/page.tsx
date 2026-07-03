import GlenwoodBusinessDirectoryPage from "@/components/businesses/GlenwoodBusinessDirectoryPage";
import { outdoorBusinessesPage } from "@/data/glenwoodBusinessDirectoryPages";

export const metadata = outdoorBusinessesPage.metadata;

export default function GlenwoodOutdoorBusinessesPage() {
  return <GlenwoodBusinessDirectoryPage {...outdoorBusinessesPage.props} />;
}
