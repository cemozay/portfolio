import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Layout from "@/components/layout/Layout";
import LangSetter from "@/components/layout/LangSetter";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <LangSetter />
      <Layout>{children}</Layout>
    </NextIntlClientProvider>
  );
}
