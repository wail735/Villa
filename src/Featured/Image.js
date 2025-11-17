import { Link } from "react-router-dom";

export default function Image() {
  return (
    <div className="relative w-full md:w-[400px] flex-shrink-0">
      {/* image principale */}
      <img
        src="/assets/images/featured.jpg"
        alt="Featured"
        className="rounded-lg w-full h-auto"
      />

      {/* icône fixée */}
      <Link to="/property-details">
        <img
          src="/assets/images/featured-icon.png"
          alt="Icon"
          className="absolute bg-orange-600 rounded-full p-3 shadow-lg
            w-12 h-12 sm:w-14 sm:h-14 left-4 bottom-4"
        />
      </Link>
    </div>
  );
}
