import React from "react";
import PageHomeNavigation from "../../components/ui/page-home-navigation";
import BCNLogo from "~~/public/logos/bcn-logo.png";

const GiftcardHomePage = () => {
  return (
    <PageHomeNavigation
      application="chiliz"
      title="Chiliz-Barcelona Token Distribution"
      logoSrc={BCNLogo}
      subTitle="
        Since most football fans doesn't have a wallet ready yet, distributing BCN tokens to the club members is either centralized or impossible.
        Now, using TornadoCodes technology, the BCN team can distribute tokens to their users simply by sharing a code for future redemption with any wallet they choose.
        Cheap. Decentralized. Mathematically Secure. The future of fan tokens distribution is here.
        "
    />
  );
};

export default GiftcardHomePage;
