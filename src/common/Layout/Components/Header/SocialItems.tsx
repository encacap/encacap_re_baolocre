import _ from "lodash";
import { twMerge } from "tailwind-merge";
import { ContactInformationType } from "../../../../types/dataTypes";
import WrappedFacebookIcon from "../WrappedFacebookIcon";
import WrappedYoutubeIcon from "../WrappedYoutubeIcon";

interface SocialItemsProps {
  contactInformation: ContactInformationType;
  className?: string;
}

function SocialItems({ contactInformation, className }: SocialItemsProps) {
  if (_.isEmpty(contactInformation?.facebook) && _.isEmpty(contactInformation?.youtube)) {
    return null;
  }

  return (
    <div className={twMerge("hidden space-x-2 lg:flex", className)}>
      {contactInformation?.facebook && <WrappedFacebookIcon href={contactInformation.facebook} />}
      {contactInformation?.youtube && <WrappedYoutubeIcon href={contactInformation.youtube} />}
    </div>
  );
}

export default SocialItems;
