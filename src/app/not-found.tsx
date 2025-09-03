
import Link from 'next/link';
export default function NotFound() {
  return (
    <>
      <section className="flex min-h-screen justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl mb-5">ไม่พบหน้าที่เรียกใช้</h1>
          <Link href="/">ย้อนกลับหน้าหลัก</Link>
        </div>
      </section>
    </>
  );
}