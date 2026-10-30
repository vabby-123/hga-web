import { ServicePage } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/utils/metadata";

export const metadata = serviceMetadata("business-advisory");

export default function Page() {
  return <ServicePage slug="business-advisory" />;
}
