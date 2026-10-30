import { ServicePage } from "@/components/ServicePage";
import { serviceMetadata } from "@/lib/utils/metadata";

export const metadata = serviceMetadata("digital-branding-advisory");

export default function Page() {
  return <ServicePage slug="digital-branding-advisory" />;
}
