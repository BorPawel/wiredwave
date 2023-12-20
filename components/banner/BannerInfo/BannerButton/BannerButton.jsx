import Button from '@/components/reusable/button/Button';
import Link from 'next/link'
export const BannerButton = ({ lowerCategory, slug, buttonText }) => (
    <Link href={`/product/${lowerCategory}/${slug}`}>
      <Button buttonText={buttonText} type="full" />
    </Link>
  );