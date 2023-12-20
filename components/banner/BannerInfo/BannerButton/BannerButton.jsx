export const BannerButton = ({ lowerCategory, slug, buttonText }) => (
    <Link href={`/product/${lowerCategory}/${slug}`}>
      <ButtonFull buttonText={buttonText} type="full" />
    </Link>
  );