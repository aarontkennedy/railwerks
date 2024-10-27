import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import PageLayout from "../components/pageLayout";
import "../styles/adminPage.scss";
import { useScreenDetector } from "../helpers/useScreenDetector";
import { StaticImage } from "gatsby-plugin-image";
import {
  desktopHeroImageStyle,
  mobileHeroImageStyle,
} from "../helpers/constants";
import DrinkEditor from "../components/admin/drinkEditor";

const lambdaUpdateUrl =
  "https://4gvavuuvssbnco7dtq2cwwagdm0mkmhg.lambda-url.us-east-2.on.aws/";
const beerCsvUrl = "https://railwerks.s3.us-east-2.amazonaws.com/test.csv"; //"https://railwerks.s3.us-east-2.amazonaws.com/beers.csv";

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
            s3Bucket="railwerks"
            s3Key="test.csv"
            lambdaUpdateUrl={lambdaUpdateUrl}
            drinkLabel="beer"
          />
          <DrinkEditor
            drinkCsvUrl={beerCsvUrl}
            s3Bucket="railwerks"
            s3Key="test.csv"
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
