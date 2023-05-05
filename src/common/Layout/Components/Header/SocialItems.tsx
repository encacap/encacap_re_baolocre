import _ from "lodash";
import { twMerge } from "tailwind-merge";
import { ContactInformationType } from "../../../../types/dataTypes";
import WrappedFacebookIcon from "../WrappedFacebookIcon";
import WrappedYoutubeIcon from "../WrappedYoutubeIcon";

interface SocialItemsProps {
  contactInformation: ContactInformationType;
  className?: string;
}

const SocialItems = ({ contactInformation, className }: SocialItemsProps) => {
  if (_.isEmpty(contactInformation?.site_facebook) && _.isEmpty(contactInformation?.site_youtube)) {
    return null;
  }

  return (
    <div className={twMerge("hidden space-x-2 lg:flex", className)}>
      {contactInformation?.site_facebook && <WrappedFacebookIcon href={contactInformation.site_facebook} />}
      {contactInformation?.site_youtube && <WrappedYoutubeIcon href={contactInformation.site_youtube} />}
    </div>
  );
};

export default SocialItems;
