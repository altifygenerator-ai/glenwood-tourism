"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

type TrackedFeatureLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  business: string;
  city: string;
  page: string;
  placement: string;
  action: string;
  newTab?: boolean;
};

export default function TrackedFeatureLink({
  href,
  children,
  className,
  business,
  city,
  page,
  placement,
  action,
  newTab = false,
}: TrackedFeatureLinkProps) {
  function handleClick() {
    track("Featured Listing Click", {
      business,
      city,
      page,
      placement,
      action,
    });
  }

  const isInternalLink = href.startsWith("/");

  if (isInternalLink) {
    return (
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}