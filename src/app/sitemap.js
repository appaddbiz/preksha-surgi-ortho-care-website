import headerData from "@/data/HeaderData";

export default function sitemap() {
  const baseUrl = "https://www.prekshacare.com";

  // Collect key navigational routes from header data
  const topLevel = headerData.navItems
    .map((item) => item.href)
    .filter((href) => typeof href === "string" && href.startsWith("/"));

  // Collect second-level items
  const secondLevel = headerData.navItems
    .flatMap((item) => item.subNavItems || [])
    .map((sub) => sub.href)
    .filter((href) => typeof href === "string" && href.startsWith("/"));

  // Collect third-level items
  const thirdLevel = headerData.navItems
    .flatMap((item) => item.subNavItems || [])
    .flatMap((sub) => sub.subItems || [])
    .map((leaf) => leaf.href)
    .filter((href) => typeof href === "string" && href.startsWith("/"));

  // Deduplicate
  const paths = Array.from(
    new Set(["/", ...topLevel, ...secondLevel, ...thirdLevel])
  );

  const now = new Date().toISOString();

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}
