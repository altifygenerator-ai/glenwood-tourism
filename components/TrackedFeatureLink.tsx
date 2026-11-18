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
  placementType?: string;
  newTab?: boolean;
  eventName?: string;
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
  placementType,
  newTab = false,
  eventName = "Featured Listing Click",
}: TrackedFeatureLinkProps) {
  function handleClick() {
    track(eventName, {
      business,
      city,
      page,
      placement,
      action,
      ...(placementType ? { placementType } : {}),
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