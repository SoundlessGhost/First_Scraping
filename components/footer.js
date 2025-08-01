import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] border-t text-sm text-muted-foreground py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-foreground">Firstscraping</h2>
          <p className="max-w-sm">
            After building numerous scrapers and handling the complexities of
            proxies, CAPTCHAs, and rendering — we built Firstscraping to
            simplify the process.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="#">
              <span className="hover:underline">Twitter</span>
            </Link>
            <Link href="#">
              <span className="hover:underline">LinkedIn</span>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground mt-4">© Firstscraping</p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-foreground mb-2">Product</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/docs">Documentation</Link>
            </li>
            <li>
              <Link href="/faq">Product FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-foreground mb-2">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">Web Scraping Pricing</Link>
            </li>
            <li>
              <Link href="#">Choosing a Tool</Link>
            </li>
            <li>
              <Link href="#">Enterprise Data</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Glossary</Link>
            </li>
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="font-semibold text-foreground mb-2">Use Cases</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">SERP Data</Link>
            </li>
            <li>
              <Link href="#">Ecommerce</Link>
            </li>
            <li>
              <Link href="#">Real Estate</Link>
            </li>
            <li>
              <Link href="#">Market Research</Link>
            </li>
          </ul>
        </div>

        {/* Targeted Scrapers */}
        <div>
          <h3 className="font-semibold text-foreground mb-2">By Target</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">Amazon Scraper</Link>
            </li>
            <li>
              <Link href="#">Google Shopping</Link>
            </li>
            <li>
              <Link href="#">eBay Scraper</Link>
            </li>
            <li>
              <Link href="#">Etsy Scraper</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
