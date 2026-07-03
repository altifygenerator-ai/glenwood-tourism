import GlenwoodBusinessDirectoryPage from "@/components/businesses/GlenwoodBusinessDirectoryPage";
import { localServicesPage } from "@/data/glenwoodBusinessDirectoryPages";

export const metadata = localServicesPage.metadata;

export default function GlenwoodLocalServicesPage() {
  return <GlenwoodBusinessDirectoryPage {...localServicesPage.props} />;
}
