import { FaPlus } from "react-icons/fa";

interface data {
  id: number;
  course_name: string;
  course_description: string;
  class_color: string,
  student_count: number;
}

const fake_data: data[] = [
  {
    id: 1,
    course_name: "การเขียนโปรแกรมไพธอนเบื้องต้น",
    course_description: "ปวช.1 เทคโนโลยีสารสนเทศ",
    class_color: "bg-blue-600",
    student_count: 20,
    
  },
  {
    id: 2,
    course_name: "การพัฒนาเว็บไซต์ด้วยไพธอน",
    course_description: "ปวช.3 เทคโนโลยีสารสนเทศ",
    class_color: "bg-pink-600",
    student_count: 18,
  },
  {
    id: 3,
    course_name: "การจัดการฐานข้อมูลเบื้องต้น",
    course_description: "ปวส.2 เทคโนโลยีสารสนเทศ",
    class_color: "bg-amber-600",
    student_count: 22,
  },
];

export default function Page() {
  return (
    <>
      <div className="flex justify-between items-start sm:item-center mb-2 mt-2">
        <div>
          <h1 className="text-2xl">ชั้นเรียนของคุณ</h1>
          <h2>ยินดีต้อนรับ, Mr.Nattapong Nakaom</h2>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex gap-2 items-center cursor-pointer">
          <FaPlus /> <span>สร้างชั้นเรียน</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {fake_data.map((d) => (
          <div key={d.id} className="bg-white border border-gray-300 rounded-lg hover:shadow-lg duration-300 transition-all cursor-pointer">
            <div className={`${d.class_color} h-28 p-5 relative text-white `}>
              <h1 className="text-2xl">{d.course_name}</h1>
              <h2>{d.course_description}</h2>
            </div>
            <div className="flex justify-end p-5">
                <p className="text-lg">{d.student_count} คน</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}