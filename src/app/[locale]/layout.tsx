import Layout from "@/components/layout/Layout";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
