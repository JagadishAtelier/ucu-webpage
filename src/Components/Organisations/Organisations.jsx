import "./Organisations.css";

const brands = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Intel_logo_2023.svg/512px-Intel_logo_2023.svg.png",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Sony_wordmark.svg",
  },
];

export default function Organisations() {
  // Group brands into chunks of 4 for each carousel slide
  const chunkSize = 7;
  const brandGroups = [];
  for (let i = 0; i < brands.length; i += chunkSize) {
    brandGroups.push(brands.slice(i, i + chunkSize));
  }

  return (
    <section className="pt-5 text-center">
      <h2 className="mb-5 fw-semibold">Our Students at</h2>

      <div id="brandCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {brandGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
            >
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                {group.map((brand, brandIndex) => (
                  <div key={brandIndex} className="brand-card">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="brand-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}