export default function robots() {
  const baseUrl = "https://www.prekshacare.com";
  return {
    rules: [{ userAgent: "*" }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
