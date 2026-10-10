import { ServicePage } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/utils/metadata";

export const metadata = serviceMetadata("automating-business-analytics");

export default function Page() {
  return <ServicePage slug="automating-business-analytics" />;
}
