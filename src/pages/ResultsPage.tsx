import PageBanner from '@/components/shared/PageBanner';
import ResultsGallery from '@/components/results/ResultsGallery';
import FinalCTA from '@/components/home/FinalCTA';

export default function ResultsPage() {
  return (
    <>
      <PageBanner
        badge="Bảng vàng thành tích"
        title="Kết quả nói lên tất cả"
        subtitle="Từ những bước đầu bỡ ngỡ đến những cột mốc đáng tự hào - đây là hành trình chinh phục tiếng Anh của học viên ILE."
        image="https://res.cloudinary.com/wsaz946u/image/upload/v1788167437/kindy_teacher_kids.webp"
        imageAlt="Học viên ILE tự hào với thành tích của mình"
        fullBleed={true}
      />
      <ResultsGallery />
      <FinalCTA />
    </>
  );
}
