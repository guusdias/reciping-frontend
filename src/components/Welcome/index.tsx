export default function Welcome() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-4 bg-[#f7f3ef] h-full rounded-3xl">
      <h1 className="text-4xl font-bold mt-2">Bem vindo ao Reciping</h1>
      <img
        className="w-full rounded-3xl"
        src="https://raw.githubusercontent.com/guusdias/reciping-frontend/fa301733698687b762d443a13932d8e90dc1ade8/src/assets/svg/DrawKit-cooking-kitchen-food-vector-illustrations-01.svg"
        alt="welcome_img"
      ></img>
    </div>
  );
}
