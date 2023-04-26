import Link from "next/link";

interface BreadcrumbItemProps {
  href: string;
  label: string;
  haveSeparator?: boolean;
}

function BreadcrumbItem({ href, label, haveSeparator = true }: BreadcrumbItemProps) {
  return (
    <div className="flex items-center">
      <Link href={href}>
        <a className="mr-px text-gray-400 duration-200 hover:text-encacap-main">{label}</a>
      </Link>
      {haveSeparator && <span className="ml-2 mr-2.5 text-gray-400">/</span>}
    </div>
  );
}

export default BreadcrumbItem;
