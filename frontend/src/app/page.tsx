import Link from "next/link";

export default function MainPage() {
  return (
    <div className="bg-gray-200 max-w-[960px] mx-auto">
      <header className="bg-red-500 w-full flex flex-col">
        <div className="bg-amber-300 opacity-50 h-[100px] flex items-center">
          <Link href="/" className="text-2xl font-bold">
            LOGO
          </Link>
        </div>
        <div className="bg-blue-300 opacity-50 h-[130px] w-screen ml-[calc(50%-50vw)] flex items-center">
          <div className="max-w-[960px] mx-auto flex items-center justify-between gap-[20px]">
            <div className="border-2 border-green-500 h-[50px] w-[470px]">
              search1
            </div>
            <div className="border-2 border-green-500 w-[225px] h-[50px]">
              search2
            </div>
            <div className="border-2 border-green-500 w-[225px] h-[50px]">
              search3
            </div>
          </div>
        </div>
      </header>

      <main className="bg-green-500 opacity-50 w-full mt-[40px] flex gap-[28px]">
        <section className="border-2 border-blue-500 w-[552px]">
          <div className="w-full mb-[8px]">
            <div className="bg-yellow-500 opacity-50 h-[30px] flex items-center justify-between">
              <span className="border-2 border-red-500">
                <span>로고</span> 인기소스
              </span>
              <select className="border-2 border-red-500 h-full w-[77px]">
                <option value="recent">최신순</option>
                <option value="popular">인기순</option>
              </select>
            </div>
            <p className="text-xs mt-[5px] mb-[10px]">
              유명한 소스들을 모아서 볼 수 있어요!
            </p>
            <div className="border-1 border-neutral-300 w-full h-[1px]"></div>
          </div>

          <div className="w-full flex flex-col gap-[8px] h-fit">
            <div className="border-2 border-red-500 h-[72px] w-full"></div>
            <div className="border-2 border-red-500 h-[72px] w-full"></div>
            <div className="border-2 border-red-500 h-[72px] w-full"></div>
            <div className="border-2 border-red-500 h-[72px] w-full"></div>
            <div className="border-2 border-red-500 h-[72px] w-full"></div>
            <div className="border-2 border-red-500 h-[72px] w-full"></div>
            <div className="border-2 border-red-500 h-[72px] w-full"></div>
            <div className="border-2 border-red-500 h-[72px] w-full"></div>
          </div>

          <button className="bg-red-300 h-[40px] w-full mt-[20px]">
            더 많은 인기소스 보러가기
          </button>
        </section>
        <div className="w-[380px] flex flex-col gap-[28px]">
          <section className="border-2 border-blue-500">
            <div className="w-full mb-[8px]">
              <div className="bg-yellow-500 opacity-50 h-[30px] flex items-center justify-between">
                <span className="border-2 border-red-500">
                  <span>로고</span> 랜덤소스
                </span>
                <select className="border-2 border-red-500 h-full w-[77px]">
                  <option value="recent">최신순</option>
                  <option value="popular">인기순</option>
                </select>
              </div>
              <p className="text-xs mt-[5px] mb-[10px]">
                유명한 소스들을 모아서 볼 수 있어요!
              </p>
              <div className="border-1 border-neutral-300 w-full h-[1px]"></div>
            </div>

            <div className="w-full flex flex-col gap-[8px] h-fit">
              <div className="border-2 border-red-500 h-[72px] w-full"></div>
            </div>
          </section>
          <section className="border-2 border-blue-500">
            <div className="w-full mb-[8px]">
              <div className="bg-yellow-500 opacity-50 h-[30px] flex items-center justify-between">
                <span className="border-2 border-red-500">
                  <span>로고</span> 추천소스
                </span>
                <select className="border-2 border-red-500 h-full w-[77px]">
                  <option value="recent">최신순</option>
                  <option value="popular">인기순</option>
                </select>
              </div>
              <p className="text-xs mt-[5px] mb-[10px]">
                유명한 소스들을 모아서 볼 수 있어요!
              </p>
              <div className="border-1 border-neutral-300 w-full h-[1px]"></div>
            </div>

            <div className="w-full flex flex-col gap-[8px] h-fit">
              <div className="border-2 border-red-500 h-[72px] w-full"></div>
              <div className="border-2 border-red-500 h-[72px] w-full"></div>
              <div className="border-2 border-red-500 h-[72px] w-full"></div>
              <div className="border-2 border-red-500 h-[72px] w-full"></div>
              <div className="border-2 border-red-500 h-[72px] w-full"></div>
              <div className="border-2 border-red-500 h-[72px] w-full"></div>
            </div>

            <button className="bg-red-300 h-[40px] w-full mt-[20px]">
              더 재미있는 소스 찾으러 가기
            </button>
          </section>
        </div>
      </main>

      <footer className="bg-neutral-300 h-[100px] w-screen ml-[calc(50%-50vw)] mt-[40px]">
        <div className="flex items-center justify-center">TEST TEST TEST</div>
      </footer>
    </div>
  );
}
