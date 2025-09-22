export default function About() {
  const branches = [
    {
      name: "فاقوس شارع الدروس",
      governorate: "الشرقية",
      address: "بجوار مدرسة الثانوية العسكرية",
      map: "https://www.google.com/maps/place/30%C2%B043'22.4%22N+31%C2%B047'36.5%22E/@30.7228775,31.7908955,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.7228775!4d31.7934704?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D",
      phones: ["01558537517", "01080474727"],
    },
    {
      name: "فاقوس المنشية الجديدة",
      governorate: "الشرقية",
      address: "بجوار المنياوي للحلويات",
      map: "https://www.google.com/maps/place/30%C2%B043'50.6%22N+31%C2%B047'38.1%22E/@30.7307129,31.7913361,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.7307129!4d31.793911?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D",
      phones: ["01050046896"],
    },
    {
      name: "أبو كبير",
      governorate: "الشرقية",
      address: "شارع المحطة بجوار المنياوي للحلويات",
      map: "https://www.google.com/maps/place/30%C2%B043'48.5%22N+31%C2%B040'14.3%22E/@30.730135,31.668066,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.730135!4d31.6706409?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D",
      phones: ["01050046764"],
    },
    {
      name: "ديرب نجم",
      governorate: "الشرقية",
      address: "بجوار مدرسة نصر عدلان",
      map: "https://www.google.com/maps/place/30%C2%B044'37.1%22N+31%C2%B027'34.6%22E/@30.7436275,31.4570465,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.7436275!4d31.4596214?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D",
      phones: ["01050048396"],
    },
    {
      name: "دوران رضا",
      governorate: "الإسماعيلية",
      address: "نهاية شارع شبين",
      map: "https://www.google.com/maps/place/30%C2%B036'12.6%22N+32%C2%B016'17.7%22E/@30.6034889,32.269001,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.6034889!4d32.2715759?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D",
      phones: ["01140430201", "01050048327"],
    },
    {
      name: "أبو عطوة",
      governorate: "الإسماعيلية",
      address: "بجوار أبو ربيع للحلويات",
      map: "https://www.google.com/maps/place/30%C2%B033'55.2%22N+32%C2%B015'26.5%22E/@30.565321,32.2547837,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.565321!4d32.2573586?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D",
      phones: ["01012316888"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c1c1c] via-[#3a2c1b] to-[#d1a562] font-[Cairo] px-6 py-10">
      {/* العناوين */}
      <div className="text-center mb-10 text-white">
        <h1 className="text-4xl font-extrabold mb-2">فروعنا</h1>
        <h2 className="text-sm font-medium">قم بالضغط للحصول على الخريطة</h2>
      </div>

      {/* عرض الفروع */}
      <div className="flex flex-col items-center gap-6">
        {branches.map((branch, index) => (
          <div key={index} className="w-full max-w-[350px]">
            {/* الزر */}
            <div className="flex items-center justify-center">
              <a
                href={branch.map}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[380px] h-[101px] rounded-[30px] border border-white opacity-200 p-4 shadow-md 
               bg-gradient-to-b from-[#6b5239] to-[#a88354] 
               flex items-center justify-center gap-2 text-center backdrop-blur-md"
              >
                <img
                  src="/location-pin.png"
                  alt="Location"
                  className="w-5 h-5"
                />
                <span className="text-[25px] text-white">{branch.name}</span>
              </a>
            </div>

            {/* المحافظة والعنوان وأرقام الموبايل */}
            <div className="flex justify-between mt-2 px-2">
              <p className="text-sm font-bold text-black">
                {branch.governorate}
              </p>
              <div className="flex flex-col text-right">
                <p className="text-sm text-white">{branch.address}</p>
                {branch.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone}`}
                    className="text-sm text-white underline hover:text-yellow-300"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
