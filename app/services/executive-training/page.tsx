import { ServicePage } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/utils/metadata";

export const metadata = serviceMetadata("executive-training");

export default function Page() {
  return <ServicePage slug="executive-training" />;
}
