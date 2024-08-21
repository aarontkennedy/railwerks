import * as React from "react";
import "./orderOnlineButton.scss";
import { posUrl } from "../../helpers/constants";

const OrderOnlineButton = (): JSX.Element => {
  return (
    <a href={posUrl} className="order-online">
      ORDER TAKEOUT
    </a>
  );
};

export default OrderOnlineButton;
