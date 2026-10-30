import { ServicePage } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/utils/metadata";

export const metadata = serviceMetadata("smart-workflow-management");

export default function Page() {
  return <ServicePage slug="smart-workflow-management" />;
}
