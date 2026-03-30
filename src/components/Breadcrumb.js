import Link from "next/link";

export default function Breadcrumb({ items }) {
  return (
    <nav className="text-sm text-gray-500 mb-4">
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:text-pink-600">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800 font-medium">
              {item.label}
            </span>
          )}

          {index < items.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}