import localFont from "@next/font/local";
import cardLayoutStyles from "./information-layout.module.scss";

const firacode = localFont({
  src: [
    {
      path: "./FiraCode-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./FiraCode-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

function CardLayout({ children }: { children: React.ReactNode }) {
  return <div className={cardLayoutStyles.informationLayout}>{children}</div>;
}
export default CardLayout;
