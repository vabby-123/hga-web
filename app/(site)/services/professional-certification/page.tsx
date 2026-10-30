import { ServicePage } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/utils/metadata";

export const metadata = serviceMetadata("professional-certification");

export default function Page() {
  return <ServicePage slug="professional-certification" />;
}
