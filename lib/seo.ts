export function generateMetadata({ title, description }: any) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  }
}