import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import PageLayout from "../components/pageLayout";
import "../styles/adminPage.scss";
import { useScreenDetector } from "../helpers/useScreenDetector";
import { StaticImage } from "gatsby-plugin-image";
import {
  desktopHeroImageStyle,
  mobileHeroImageStyle,
  bucket,
  lambdaUpdateUrl,
  beerCsvUrl,
  cocktailsCsvUrl,
} from "../helpers/constants";
import DrinkEditor from "../components/admin/drinkEditor";

const AdminPage = () => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <PageLayout>
      <div className="page__hero-wrapper">
        <StaticImage
          alt="Beer Flight"
          src="../images/flight.jpg"
          placeholder="blurred"
          layout="fullWidth"
          imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
          style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        />
        <div className="page__hero-title">Admin</div>
      </div>
      <div className="admin-page">
        <div className="admin-page__content">
          <DrinkEditor
            drinkCsvUrl={beerCsvUrl}
            s3Bucket={bucket}
            s3Key="beers.csv"
            lambdaUpdateUrl={lambdaUpdateUrl}
            drinkLabel="beer"
          />
          <DrinkEditor
            drinkCsvUrl={cocktailsCsvUrl}
            s3Bucket={bucket}
            s3Key="cocktails.csv"
            lambdaUpdateUrl={lambdaUpdateUrl}
            drinkLabel="cocktail"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export const Head = () => (
  <MetaHelper title="Admin" description="Manage drinks" />
);

export default AdminPage;
