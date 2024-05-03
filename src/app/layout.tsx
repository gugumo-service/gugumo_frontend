import StyledComponentsRegistry from "@/lib/registry";
import StoreProvider from "@/store/Providers";
import localFont from "next/font/local";
import type { Metadata } from "next";
import 'swiper/css';
import ThemeClient from "@/lib/ThemeClient";
import ModalProvider from "@/lib/ModalProvider";

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: "구구모",
  description: "동네 구기종목 매치 서비스 구구모 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <ThemeClient>
          <StyledComponentsRegistry>
            <StoreProvider>
              <ModalProvider>
                {children}
              </ModalProvider>
            </StoreProvider>
          </StyledComponentsRegistry>
        </ThemeClient>
      </body>
    </html>
  );
}
