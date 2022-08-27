import _ from "lodash";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getContactInformation } from "../../slices/layoutSlice";
import { HTMLHeadType } from "../../types/commonTypes";
import CustomHead from "../CustomHead/CustomHead";
import Footer from "./Components/Footer/Footer";
import Header, { HeaderProps } from "./Components/Header/Header";

interface LayoutProps extends HeaderProps {
  children: React.ReactNode;
  head?: HTMLHeadType;
  footerColor?: "light" | "dark";
}

const PageLayout = ({ children, head, footerColor = "light", isHideMobileNavbar }: LayoutProps) => {
  const contactInformation = useAppSelector((state) => state.layout.contactInformation);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (_.isEmpty(contactInformation)) {
      dispatch(getContactInformation());
    }
  }, [contactInformation]);

  return (
    <>
      <CustomHead head={head} />
      <Header isHideMobileNavbar={isHideMobileNavbar} contactInformation={contactInformation} />
      {children}
      <Footer color={footerColor} contactInformation={contactInformation} />
    </>
  );
};

export default PageLayout;
