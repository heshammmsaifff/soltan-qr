import Link from "next/link";

function AfterContact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c1c1c] via-[#3a2c1b] to-[#d1a562] flex flex-col items-center justify-center px-6 py-10 font-[Cairo]">
      {/* اللوجو */}
      <div className="flex items-center gap-4 mb-6">
        <img src="/logo.png" alt="logo" className="w-24" />
        <img src="/name.png" alt="name" className="w-24" />
      </div>

      {/* الرسالة */}
      <h1 className="text-2xl font-bold text-white mb-4">
        شكراً لك .. هنا السلطان
      </h1>

      {/* زر العودة */}
      <Link
        href="/"
        className="w-[180px] h-[50px] bg-[#5b4630] text-white font-bold rounded-[30px] shadow-md hover:bg-[#6b5239] transition flex items-center justify-center"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}

export default AfterContact;
